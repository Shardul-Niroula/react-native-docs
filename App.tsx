import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Menu, X, Github, Sun, Moon } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { DocViewer } from './components/DocViewer';
import { COMPONENT_DATA } from './data/library';

function App() {
  const [activeId, setActiveId] = useState<string>('text');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const activeDoc = useMemo(() => 
    COMPONENT_DATA.find(d => d.id === activeId) || COMPONENT_DATA[0], 
  [activeId]);

  const handleSelectComponent = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const handleToggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const handleToggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 dark:bg-slate-900/70 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Navigation 
          activeId={activeId} 
          onSelect={handleSelectComponent}
          onMobileClose={handleCloseSidebar}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shrink-0 transition-colors">
          <div className="flex items-center gap-3">
            <button 
              onClick={handleToggleSidebar}
              className="lg:hidden p-2 -ml-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors"
            >
              <Menu size={24} />
            </button>
            
            {/* Mobile Title (only shows when sidebar hidden) */}
            <span className="lg:hidden font-bold text-slate-800 dark:text-slate-200 truncate">
               {activeDoc.name}
            </span>

          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleTheme}
              className="p-2 text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="https://github.com/facebook/react-native" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
              title="View React Native on GitHub"
            >
                <Github size={20} />
            </a>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 scrollbar-thin">
           <DocViewer data={activeDoc} />
           
           <footer className="mt-20 pt-6 border-t border-slate-200 dark:border-slate-700 text-center text-slate-400 dark:text-slate-500 text-sm">
             <p>Built for React Native Developers.</p>
             <p className="mt-1">Content based on standard RN documentation.</p>
           </footer>
        </main>

      </div>
    </div>
  );
}

export default React.memo(App);