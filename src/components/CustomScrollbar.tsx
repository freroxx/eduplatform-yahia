
import React, { useEffect } from 'react';

interface CustomScrollbarProps {
  theme: 'light' | 'dark' | 'night';
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ theme }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'custom-scrollbar';
    
    const getScrollbarStyles = () => {
      switch (theme) {
        case 'light':
          return `
            ::-webkit-scrollbar { width: 8px; height: 8px; }
            ::-webkit-scrollbar-track { background: rgba(243, 244, 246, 0.5); border-radius: 4px; }
            ::-webkit-scrollbar-thumb { 
              background: linear-gradient(135deg, #3b82f6, #8b5cf6); 
              border-radius: 4px; 
              transition: all 0.3s ease;
            }
            ::-webkit-scrollbar-thumb:hover { 
              background: linear-gradient(135deg, #2563eb, #7c3aed); 
              transform: scale(1.1);
            }
          `;
        case 'dark':
          return `
            ::-webkit-scrollbar { width: 8px; height: 8px; }
            ::-webkit-scrollbar-track { background: rgba(31, 41, 55, 0.5); border-radius: 4px; }
            ::-webkit-scrollbar-thumb { 
              background: linear-gradient(135deg, #6366f1, #8b5cf6); 
              border-radius: 4px; 
              transition: all 0.3s ease;
            }
            ::-webkit-scrollbar-thumb:hover { 
              background: linear-gradient(135deg, #4f46e5, #7c3aed); 
              transform: scale(1.1);
            }
          `;
        case 'night':
          return `
            ::-webkit-scrollbar { width: 8px; height: 8px; }
            ::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.6); border-radius: 4px; }
            ::-webkit-scrollbar-thumb { 
              background: linear-gradient(135deg, #1e293b, #334155); 
              border-radius: 4px; 
              border: 1px solid rgba(148, 163, 184, 0.3);
              transition: all 0.3s ease;
            }
            ::-webkit-scrollbar-thumb:hover { 
              background: linear-gradient(135deg, #334155, #475569); 
              border-color: rgba(148, 163, 184, 0.6);
              transform: scale(1.1);
            }
          `;
        default:
          return '';
      }
    };

    style.textContent = getScrollbarStyles();
    
    // Remove existing scrollbar styles
    const existing = document.getElementById('custom-scrollbar');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, [theme]);

  return null;
};

export default CustomScrollbar;
