
import React, { useState, useMemo, useEffect, useRef, useCallback, useTransition } from 'react';
import { ComponentDoc, Platform } from '../types';
import { CodeBlock } from './CodeBlock';
import { Info, AlertCircle, Smartphone, Globe, Search, ChevronDown, X } from 'lucide-react';

interface DocViewerProps {
  data: ComponentDoc;
}

interface DropdownItemProps {
  prop: ComponentDoc['props'][0];
  isSelected: boolean;
  onToggle: (name: string) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = React.memo(({ prop, isSelected, onToggle }) => (
  <button
    onClick={() => onToggle(prop.name)}
    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-b-0 ${
      isSelected
        ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300'
        : 'text-slate-700 dark:text-slate-300'
    }`}
  >
    <div className="flex items-center justify-between w-full min-w-0">
      <span className="font-mono font-medium truncate">{prop.name}</span>
      {isSelected && (
        <div className="w-2 h-2 bg-brand-500 dark:bg-brand-400 rounded-full flex-shrink-0 ml-2"></div>
      )}
    </div>
  </button>
));

const PlatformBadge: React.FC<{ platform?: Platform }> = React.memo(({ platform }) => {
  if (!platform || platform === 'All') return null;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${
      platform === 'iOS' 
        ? 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-600' 
        : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700'
    }`}>
      {platform === 'iOS' ? 'iOS' : 'Android'}
    </span>
  );
});

export const DocViewer: React.FC<DocViewerProps> = React.memo(({ data }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [selectedProps, setSelectedProps] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // More aggressive debouncing for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      startTransition(() => {
        setDebouncedSearchQuery(localSearchQuery);
      });
    }, 200); // Increased debounce time
    return () => clearTimeout(timer);
  }, [localSearchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    // Use capture phase to ensure we catch the event before other handlers
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => document.removeEventListener('mousedown', handleClickOutside, true);
  }, []);

  // Optimized filtering with early returns and limiting
  const filteredProps = useMemo(() => {
    // Early return for no filtering needed
    if (!debouncedSearchQuery && selectedProps.length === 0) {
      return data.props; // Show all props when no filters active
    }

    let filtered = data.props;

    // Filter by search query (only if debounced)
    if (debouncedSearchQuery) {
      const query = debouncedSearchQuery.toLowerCase().trim();
      if (query.length < 2) return filtered.slice(0, 20); // Show limited results for short queries
      
      filtered = filtered.filter(prop => 
        prop.name.toLowerCase().includes(query) ||
        prop.description.toLowerCase().includes(query) ||
        prop.type.toLowerCase().includes(query)
      );
    }

    // Filter by selected props
    if (selectedProps.length > 0) {
      filtered = filtered.filter(prop => selectedProps.includes(prop.name));
    }

    return filtered; // Return all filtered results
  }, [data.props, debouncedSearchQuery, selectedProps]);

  // Virtualized dropdown items - show all items
  const visibleDropdownItems = useMemo(() => {
    return data.props; // Show all props in dropdown
  }, [data.props]);

  const togglePropSelection = useCallback((propName: string) => {
    setSelectedProps(prev => 
      prev.includes(propName) 
        ? prev.filter(name => name !== propName)
        : [...prev, propName]
    );
  }, []);

  const removePropSelection = useCallback((propName: string) => {
    setSelectedProps(prev => prev.filter(name => name !== propName));
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.target.value);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(prev => !prev);
  }, []);
  return (
    <div className=" mx-auto pb-20">
      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">{data.name}</h1>
            <span className="px-3 py-1 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-bold rounded-full uppercase tracking-wide">
                Core
            </span>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {data.description}
        </p>
        <CodeBlock code={data.importCode} language="js" />
      </header>

      {/* Installation Info */}
      {data.installation && (
        <section className="mb-10">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-3 h-3 rounded-full ${
                data.installation.type === 'built-in' ? 'bg-green-500' : 'bg-orange-500'
              }`} />
              <span className="text-lg font-bold text-slate-800 dark:text-slate-200">
                {data.installation.type === 'built-in' ? 'Built-in Component' : 'Requires Installation'}
              </span>
            </div>
            {data.installation.type === 'npm' && data.installation.command && (
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Install via npm:</p>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg p-3">
                  <CodeBlock code={data.installation.command} language="bash" />
                </div>
              </div>
            )}
            {data.installation.type === 'built-in' && (
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                This component is included with React Native and doesn't require additional installation.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Notes */}
      {data.notes && data.notes.length > 0 && (
          <section className="mb-10 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6">
              <h3 className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-200 mb-4">
                  <AlertCircle size={20} />
                  Important Notes
              </h3>
              <ul className="space-y-2">
                  {data.notes.map((note, idx) => (
                      <li key={idx} className="flex gap-3 text-amber-900 dark:text-amber-100">
                          <span className="font-bold text-amber-500 dark:text-amber-400">•</span>
                          {note}
                      </li>
                  ))}
              </ul>
          </section>
      )}

      {/* Purpose */}
      <section className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
            <Info size={24} className="text-brand-500 dark:text-brand-400" />
            Purpose / Use Cases
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.purpose.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Basic Usage */}
      {data.basicUsage.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">Basic Usage</h2>
          <div className="space-y-6">
            {data.basicUsage.map((example, idx) => (
              <div key={idx}>
                {example.title && <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">{example.title}</h3>}
                <CodeBlock code={example.code} language={example.language} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Props */}
      <section className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
            Props
            <span className="ml-3 text-sm font-normal text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md">
                {filteredProps.length} of {data.props.length} Properties
            </span>
          </h2>
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Bar */}
            <div className="relative">
              <Search className={`absolute left-3 top-2.5 ${isPending ? 'text-brand-500 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'} transition-colors`} size={16} />
              <input
                type="text"
                placeholder="Search properties..."
                className={`w-full sm:w-64 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 text-sm rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
                  isPending ? 'ring-2 ring-brand-500/20 border-brand-500' : ''
                }`}
                value={localSearchQuery}
                onChange={handleSearchChange}
              />
              {isPending && (
                <div className="absolute right-3 top-2.5">
                  <div className="w-4 h-4 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            
            {/* Props Filter Dropdown */}
            <div className="relative" ref={dropdownRef}>
              {/* Selected Props Tags */}
              {selectedProps.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {selectedProps.map(propName => (
                    <span
                      key={propName}
                      className="inline-flex items-center gap-1 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs px-2 py-1 rounded-md"
                    >
                      {propName}
                      <button
                        onClick={() => removePropSelection(propName)}
                        className="hover:bg-brand-200 dark:hover:bg-brand-800/50 rounded-full p-0.5"
                      >
                        <X size={10} />
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Dropdown Button */}
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 text-sm rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none max-w-xs"
              >
                <span className="truncate">
                  {selectedProps.length === 0 
                    ? `Filter by Props (${data.props.length} available)` 
                    : `${selectedProps.length} prop${selectedProps.length > 1 ? 's' : ''} selected`
                  }
                </span>
                <ChevronDown 
                  size={16} 
                  className={`text-slate-400 dark:text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto overflow-x-hidden w-full max-w-xs">
                  {visibleDropdownItems.length === 0 ? (
                    <div className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                      No props available
                    </div>
                  ) : (
                    visibleDropdownItems.map((prop) => (
                      <DropdownItem
                        key={prop.name}
                        prop={prop}
                        isSelected={selectedProps.includes(prop.name)}
                        onToggle={togglePropSelection}
                      />
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid gap-6">
          {filteredProps.map((prop) => (
            <div key={prop.name} id={`prop-${prop.name}`} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden scroll-mt-24">
              <div className="bg-slate-50 dark:bg-slate-700 px-6 py-4 border-b border-slate-100 dark:border-slate-600 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold font-mono text-brand-700 dark:text-brand-300">
                    {prop.name}
                    </h3>
                    <PlatformBadge platform={prop.platform} />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-slate-500 dark:text-slate-400">Type:</span>
                    <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 px-1.5 py-0.5 rounded text-purple-600 dark:text-purple-400">
                        {prop.type}
                    </span>
                    {prop.default && (
                         <>
                            <span className="text-slate-400 dark:text-slate-500">|</span>
                            <span className="text-slate-500 dark:text-slate-400">Default:</span>
                            <span className="text-slate-700 dark:text-slate-300 font-bold">{prop.default}</span>
                         </>
                    )}
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">{prop.description}</p>
                {prop.examples && prop.examples.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-3">
                      {prop.examples.length > 1 ? 'Examples' : 'Example'}
                    </p>
                    <div className="space-y-4">
                      {prop.examples.map((ex, idx) => (
                        <div key={idx}>
                          {ex.title && (
                            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1 ml-1">
                              {ex.title}
                            </p>
                          )}
                          <CodeBlock code={ex.code} language={ex.language} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Styles */}
      {data.styles.length > 0 && (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">Style Properties</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {data.styles.map((group, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-4 pb-2 border-b border-slate-100 dark:border-slate-600">
                            {group.category}
                        </h3>
                        <ul className="space-y-2">
                            {group.properties.map((p, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm font-mono text-slate-600 dark:text-slate-400">
                                    <span className="text-slate-300 dark:text-slate-600 select-none">•</span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
      )}

    </div>
  );
});
