import React, { useMemo, useState, useEffect } from 'react';
import { COMPONENT_DATA } from '../data/library';
import { 
  Box, FileText, Layers, List, Type, LayoutGrid, Bell, MousePointer2, Smartphone, Cpu, MenuSquare,
  Camera, MapPin, Shield, Database, Globe, Zap, Compass, Info, FileStack, Palette, Lock, Video, Radio, BellRing, Navigation as NavIcon,
  Search, ChevronDown, ChevronRight, X
} from 'lucide-react';
import { ComponentDoc } from '../types';

interface NavigationProps {
  activeId: string;
  onSelect: (id: string) => void;
  onMobileClose: () => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Basic UI': <Box size={16} />,
  'Lists': <List size={16} />,
  'User Input': <Type size={16} />,
  'Layout & Styling': <LayoutGrid size={16} />,
  'Feedback & Alerts': <Bell size={16} />,
  'Modal & Overlays': <MenuSquare size={16} />,
  'Gestures & Interaction': <MousePointer2 size={16} />,
  'Accessibility': <Smartphone size={16} />,
  'Other Core APIs': <Cpu size={16} />,
  
  // Expo & Ecosystem
  'Expo: Media & Files': <FileStack size={16} />,
  'Expo: Camera & Sensors': <Camera size={16} />,
  'Expo: Location & Maps': <MapPin size={16} />,
  'Expo: Device & System': <Cpu size={16} />,
  'Expo: UI & UX': <Palette size={16} />,
  'Expo: Auth & Security': <Shield size={16} />,
  'Expo: Networking': <Globe size={16} />,
  'Expo: Storage': <Database size={16} />,
  'Expo: Notifications': <BellRing size={16} />,
  'Expo: App Info': <Info size={16} />,
  'Navigation': <NavIcon size={16} />,
  'Animation': <Zap size={16} />
};

export const Navigation: React.FC<NavigationProps> = React.memo(({ activeId, onSelect, onMobileClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const groupedData = useMemo<Record<string, ComponentDoc[]>>(() => {
    const groups: Record<string, ComponentDoc[]> = {};
    COMPONENT_DATA.forEach(doc => {
      if (!groups[doc.category]) {
        groups[doc.category] = [];
      }
      groups[doc.category].push(doc);
    });
    // Order of categories
    const order = [
      'Basic UI',
      'Lists',
      'User Input',
      'Layout & Styling',
      'Feedback & Alerts',
      'Modal & Overlays',
      'Gestures & Interaction',
      'Accessibility',
      'Other Core APIs',
      'Expo: Media & Files',
      'Expo: Camera & Sensors',
      'Expo: Location & Maps',
      'Expo: Device & System',
      'Expo: UI & UX',
      'Expo: Auth & Security',
      'Expo: Networking',
      'Expo: Storage',
      'Expo: Notifications',
      'Expo: App Info',
      'Navigation',
      'Animation'
    ];
    
    return order.reduce((acc, key) => {
      if (groups[key]) acc[key] = groups[key];
      return acc;
    }, {} as Record<string, ComponentDoc[]>);
  }, []);

  // Initialize expanded state for active item
  useEffect(() => {
    const activeDoc = COMPONENT_DATA.find(d => d.id === activeId);
    if (activeDoc) {
      setExpandedCategories(prev => ({ ...prev, [activeDoc.category]: true }));
    }
  }, [activeId]);

  // Handle Search Filtering
  const filteredGroups = useMemo(() => {
    if (!searchTerm) return groupedData;
    const result: Record<string, ComponentDoc[]> = {};
    Object.entries(groupedData).forEach(([category, items]) => {
      const matches = (items as ComponentDoc[]).filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matches.length > 0) result[category] = matches;
    });
    return result;
  }, [groupedData, searchTerm]);

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <nav className="h-full flex flex-col bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 w-72 shadow-lg shadow-slate-200/40 dark:shadow-slate-900/40 z-50">
      {/* Header */}
      <div className="p-5 pb-2 shrink-0">
        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-extrabold text-xl tracking-tight mb-1">
          <div className="bg-brand-600 text-white p-1.5 rounded-lg">
             <Layers size={20} className="fill-current" />
          </div>
          <span>RN Docs</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium ml-1">Native & Expo Reference</p>

        {/* Search Bar */}
        <div className="relative mt-5 group">
          <Search className="absolute left-3 top-2.5 text-slate-400 dark:text-slate-500 group-focus-within:text-brand-500 transition-colors" size={15} />
          <input 
            type="text" 
            placeholder="Search components..." 
            className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 text-sm rounded-xl pl-9 pr-8 py-2 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-2.5 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>
      
      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-2 scrollbar-thin space-y-4">
        {Object.entries(filteredGroups).map(([category, items]) => {
          const isExpanded = searchTerm ? true : expandedCategories[category];
          const hasActiveItem = (items as ComponentDoc[]).some(i => i.id === activeId);

          return (
            <div key={category} className="select-none">
              <button 
                onClick={() => !searchTerm && toggleCategory(category)}
                className={`w-full flex items-center justify-between px-2 py-1.5 mb-1 rounded-md transition-colors group ${
                   searchTerm ? 'cursor-default' : 'cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                 <div className="flex items-center gap-2.5 overflow-hidden">
                    <span className={`transition-colors duration-200 ${hasActiveItem || isExpanded ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`}>
                      {CATEGORY_ICONS[category] || <Box size={16} />}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-wider truncate ${hasActiveItem ? 'text-slate-800 dark:text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>
                      {category.replace('Expo: ', '')}
                    </span>
                 </div>
                 {!searchTerm && (
                   <span className="text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors">
                     {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                   </span>
                 )}
              </button>
              
              {isExpanded && (
                <div className="space-y-0.5 relative ml-2 pl-3 border-l border-slate-100 dark:border-slate-600">
                   {(items as ComponentDoc[]).map(comp => {
                     const isActive = activeId === comp.id;
                     return (
                       <button
                         key={comp.id}
                         onClick={() => { onSelect(comp.id); onMobileClose(); }}
                         className={`
                           w-full text-left px-3 py-1.5 text-sm font-medium rounded-lg transition-all flex items-center justify-between
                           ${isActive 
                             ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300' 
                             : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-200'}
                         `}
                       >
                         <span className="truncate">{comp.name}</span>
                         {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400 shrink-0" />}
                       </button>
                     );
                   })}
                </div>
              )}
            </div>
          );
        })}

        {Object.keys(filteredGroups).length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 text-slate-400 dark:text-slate-500">
             <Search size={32} strokeWidth={1.5} className="mb-2 opacity-50" />
             <p className="text-sm text-slate-400 dark:text-slate-500">No components found</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-600 shrink-0 bg-slate-50/50 dark:bg-slate-700/50">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400">
               <span className="font-bold text-xs">RN</span>
            </div>
            <div className="flex-1 min-w-0">
               <p className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">React Native Docs</p>
               <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">v0.73 • SDK 50</p>
            </div>
        </div>
      </div>
    </nav>
  );
});