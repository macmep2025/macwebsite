import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContext';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const { content, setContent, loading } = useSiteContent();
  const [formData, setFormData] = useState(content);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [githubToken, setGithubToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) navigate('/admin');
    });
    setGithubToken(localStorage.getItem('githubToken') || '');
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (content) setFormData(content);
  }, [content]);

  const handleTokenChange = (e) => {
    const val = e.target.value;
    setGithubToken(val);
    localStorage.setItem('githubToken', val);
  };

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleProjectChange = (category, index, field, value) => {
    setFormData(prev => {
      const updatedCategory = [...prev.projects[category]];
      updatedCategory[index] = { ...updatedCategory[index], [field]: value };
      return {
        ...prev,
        projects: {
          ...prev.projects,
          [category]: updatedCategory
        }
      };
    });
  };

  const addProject = (category) => {
    setFormData(prev => ({
      ...prev,
      projects: {
        ...prev.projects,
        [category]: [{ src: '', alt: 'New Project', text: 'New Project Description' }, ...prev.projects[category]]
      }
    }));
  };

  const removeProject = (category, index) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    setFormData(prev => {
      const updatedCategory = prev.projects[category].filter((_, i) => i !== index);
      return {
        ...prev,
        projects: {
          ...prev.projects,
          [category]: updatedCategory
        }
      };
    });
  };

  const handleFileUpload = async (e, category, index) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!githubToken) {
      toast.error('Please enter your GitHub Token in the Settings tab first!');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Content = reader.result.split(',')[1];
      const filename = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
      const path = `public/projects/${filename}`;

      toast.loading('Uploading to GitHub...', { id: 'upload' });
      try {
        const response = await fetch(`https://api.github.com/repos/macmep2025/macwebsite/contents/${path}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${githubToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Upload ${filename} via Admin Panel`,
            content: base64Content,
            branch: 'main'
          })
        });

        if (!response.ok) throw new Error('GitHub API Error');
        
        toast.success('Uploaded successfully!', { id: 'upload' });
        // Update the form data with the new local path!
        handleProjectChange(category, index, 'src', `projects/${filename}`);
      } catch (error) {
        toast.error('Upload failed. Check your GitHub token permissions.', { id: 'upload' });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const docRef = doc(db, 'site_content', 'main');
      await setDoc(docRef, formData, { merge: true });
      setContent(formData);
      toast.success('Website updated successfully!');
    } catch (error) {
      toast.error('Error saving: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/admin');
  };

  if (loading || !formData) return <div style={styles.container}>Loading content...</div>;

  return (
    <div style={styles.container}>
      <div style={{ ...styles.header, position: 'relative', zIndex: 1001 }}>
        <h2>Admin Dashboard</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-outline" onClick={handleLogout} style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Logout</button>
          <button className="btn" onClick={handleSave} disabled={saving} style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            {saving ? 'Saving...' : 'Save All Changes'}
          </button>
        </div>
      </div>

      <div style={styles.tabs}>
        <button 
          style={activeTab === 'general' ? styles.activeTabBtn : styles.tabBtn} 
          onClick={() => setActiveTab('general')}
        >
          General Text
        </button>
        <button 
          style={activeTab === 'projects' ? styles.activeTabBtn : styles.tabBtn} 
          onClick={() => setActiveTab('projects')}
        >
          Manage Projects
        </button>
        <button 
          style={activeTab === 'settings' ? styles.activeTabBtn : styles.tabBtn} 
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      {activeTab === 'general' && (
        <div style={styles.editor}>
          {/* HERO SECTION */}
          <div className="glass" style={styles.section}>
            <h3 style={styles.sectionTitle}>Hero Section</h3>
            <label style={styles.label}>Title (use &lt;span&gt; for red text)</label>
            <input style={styles.input} value={formData.hero.title} onChange={(e) => handleChange('hero', 'title', e.target.value)} />
            
            <label style={styles.label}>Subtitle</label>
            <textarea style={styles.textarea} value={formData.hero.subtitle} onChange={(e) => handleChange('hero', 'subtitle', e.target.value)} />
            
            <label style={styles.label}>Video Path / URL</label>
            <input style={styles.input} value={formData.hero.videoUrl} onChange={(e) => handleChange('hero', 'videoUrl', e.target.value)} />
          </div>

          {/* ABOUT SECTION (Home Page) */}
          <div className="glass" style={styles.section}>
            <h3 style={styles.sectionTitle}>About Section (Home)</h3>
            <label style={styles.label}>Title</label>
            <input style={styles.input} value={formData.about.title} onChange={(e) => handleChange('about', 'title', e.target.value)} />
            
            <label style={styles.label}>Paragraph 1</label>
            <textarea style={styles.textarea} value={formData.about.text1} onChange={(e) => handleChange('about', 'text1', e.target.value)} />
            
            <label style={styles.label}>Paragraph 2</label>
            <textarea style={styles.textarea} value={formData.about.text2} onChange={(e) => handleChange('about', 'text2', e.target.value)} />
          </div>

          {/* ABOUT PAGE */}
          <div className="glass" style={styles.section}>
            <h3 style={styles.sectionTitle}>About Page Content</h3>
            <label style={styles.label}>Vision</label>
            <textarea style={styles.textarea} value={formData.aboutPage.vision} onChange={(e) => handleChange('aboutPage', 'vision', e.target.value)} />
            
            <label style={styles.label}>Mission 1</label>
            <textarea style={styles.textarea} value={formData.aboutPage.mission1} onChange={(e) => handleChange('aboutPage', 'mission1', e.target.value)} />
            
            <label style={styles.label}>Mission 2</label>
            <textarea style={styles.textarea} value={formData.aboutPage.mission2} onChange={(e) => handleChange('aboutPage', 'mission2', e.target.value)} />
            
            <h4 style={{marginTop: '1rem'}}>CEO Profile</h4>
            <label style={styles.label}>Name</label>
            <input style={styles.input} value={formData.aboutPage.ceoName} onChange={(e) => handleChange('aboutPage', 'ceoName', e.target.value)} />
            
            <label style={styles.label}>Title</label>
            <input style={styles.input} value={formData.aboutPage.ceoTitle} onChange={(e) => handleChange('aboutPage', 'ceoTitle', e.target.value)} />
            
            <label style={styles.label}>Bio Paragraph 1</label>
            <textarea style={styles.textarea} value={formData.aboutPage.ceoBio1} onChange={(e) => handleChange('aboutPage', 'ceoBio1', e.target.value)} />
            
            <label style={styles.label}>Bio Paragraph 2</label>
            <textarea style={styles.textarea} value={formData.aboutPage.ceoBio2} onChange={(e) => handleChange('aboutPage', 'ceoBio2', e.target.value)} />
            
            <label style={styles.label}>Image Path / URL</label>
            <input style={styles.input} value={formData.aboutPage.ceoImage} onChange={(e) => handleChange('aboutPage', 'ceoImage', e.target.value)} />
          </div>
        </div>
      )}

      {activeTab === 'projects' && formData.projects && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {['commercial', 'villas', 'fitout'].map((category) => (
            <div key={category} className="glass" style={styles.section}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ textTransform: 'capitalize', color: 'var(--primary)' }}>{category} Projects</h3>
                <button className="btn" onClick={() => addProject(category)}>+ Add New</button>
              </div>
              
              <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {formData.projects[category].map((project, index) => (
                  <div key={index} style={styles.projectCard}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <strong>Project #{index + 1}</strong>
                      <button style={styles.deleteBtn} onClick={() => removeProject(category, index)}>Remove</button>
                    </div>
                    
                    <label style={styles.label}>Image URL (Or Upload directly to GitHub)</label>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <input style={{...styles.input, flex: 1}} value={project.src} onChange={(e) => handleProjectChange(category, index, 'src', e.target.value)} placeholder="projects/filename.jpg" />
                      <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, category, index)} style={{ width: '100px' }} title="Upload Image" />
                    </div>

                    <label style={styles.label}>Title / Description</label>
                    <textarea style={styles.textarea} value={project.text} onChange={(e) => handleProjectChange(category, index, 'text', e.target.value)} rows="2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="glass" style={{...styles.section, maxWidth: '600px'}}>
          <h3 style={styles.sectionTitle}>Admin Settings</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            To enable the <strong>Upload File</strong> button in the Projects tab, you must provide a GitHub Personal Access Token (PAT). This allows the browser to securely push pictures directly to your `public/projects/` folder on GitHub.
          </p>
          <label style={styles.label}>GitHub Personal Access Token (Classic)</label>
          <input 
            type="password" 
            style={styles.input} 
            value={githubToken} 
            onChange={handleTokenChange} 
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxx" 
          />
          <p style={{ color: '#ff4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>
            Note: The token must have "repo" scope. It is saved only in your local browser.
          </p>
        </div>
      )}

    </div>
  );
};

const styles = {
  container: { padding: '100px 2rem 2rem', minHeight: '100vh', background: 'var(--background)' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' },
  tabs: { display: 'flex', gap: '1rem', marginBottom: '2rem' },
  tabBtn: { padding: '10px 20px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '6px', cursor: 'pointer' },
  activeTabBtn: { padding: '10px 20px', background: 'var(--primary)', border: 'none', color: '#fff', borderRadius: '6px', cursor: 'pointer' },
  editor: { display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' },
  section: { padding: '2rem', borderRadius: '12px' },
  sectionTitle: { color: 'var(--primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' },
  label: { display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1rem' },
  input: { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.3)', color: '#fff', fontSize: '1rem' },
  textarea: { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.3)', color: '#fff', fontSize: '1rem', minHeight: '80px', resize: 'vertical' },
  projectCard: { background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' },
  deleteBtn: { background: 'transparent', border: 'none', color: '#ff4444', cursor: 'pointer', fontSize: '0.9rem' }
};

export default AdminDashboard;
