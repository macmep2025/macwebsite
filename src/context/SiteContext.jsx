import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import defaultContent from '../data/defaultContent.json';

const SiteContext = createContext();

export const useSiteContent = () => useContext(SiteContext);

export const SiteProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const docRef = doc(db, 'site_content', 'main');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const fetchedData = docSnap.data();
          // Merge missing keys (like projects if it's new)
          const mergedData = { ...defaultContent, ...fetchedData };
          if (!fetchedData.projects) {
            mergedData.projects = defaultContent.projects;
            // Optionally update firestore with the merged data here
            await setDoc(docRef, mergedData);
          }
          setContent(mergedData);
        } else {
          // Push default content if database is empty
          await setDoc(docRef, defaultContent);
          setContent(defaultContent);
        }
      } catch (error) {
        console.error("Error fetching site content from Firebase:", error);
        // Fallback to default if Firebase fails (e.g. permission issues or offline)
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <SiteContext.Provider value={{ content, setContent, loading }}>
      {children}
    </SiteContext.Provider>
  );
};
