import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContext';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const { content, setContent, loading } = useSiteContent();
  const [formData, setFormData] = useState(content);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/admin');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (content) setFormData(content);
  }, [content]);

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const docRef = doc(db, 'site_content', 'main');
      await updateDoc(docRef, formData);
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

  if (loading) return <div style={styles.container}>Loading content...</div>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Admin Dashboard</h2>
        <div>
          <button className="btn btn-outline" onClick={handleLogout} style={{ marginRight: '1rem' }}>Logout</button>
          <button className="btn" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

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
          
          <label style={styles.label}>Paragraph 3</label>
          <textarea style={styles.textarea} value={formData.about.text3} onChange={(e) => handleChange('about', 'text3', e.target.value)} />
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
          
          <label style={styles.label}>Bio Paragraph 3</label>
          <textarea style={styles.textarea} value={formData.aboutPage.ceoBio3} onChange={(e) => handleChange('aboutPage', 'ceoBio3', e.target.value)} />
          
          <label style={styles.label}>Image Path / URL</label>
          <input style={styles.input} value={formData.aboutPage.ceoImage} onChange={(e) => handleChange('aboutPage', 'ceoImage', e.target.value)} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    minHeight: '100vh',
    background: 'var(--background)'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '1rem'
  },
  editor: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
  },
  section: {
    padding: '2rem',
    borderRadius: '12px'
  },
  sectionTitle: {
    color: 'var(--primary)',
    marginBottom: '1.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '0.5rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    marginTop: '1rem'
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'rgba(0,0,0,0.3)',
    color: '#fff',
    fontSize: '1rem'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'rgba(0,0,0,0.3)',
    color: '#fff',
    fontSize: '1rem',
    minHeight: '100px',
    resize: 'vertical'
  }
};

export default AdminDashboard;
