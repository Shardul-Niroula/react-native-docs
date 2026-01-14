import React, { useState, useCallback } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: 'jsx' | 'js' | 'bash';
}

export const CodeBlock: React.FC<CodeBlockProps> = React.memo(({ code, language = 'jsx' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      console.error('Failed to copy:', err);
    }
  }, [code]);

  return (
    <div className="relative group rounded-lg overflow-hidden my-4 border border-slate-200 shadow-sm bg-slate-900">
      <div className="flex justify-between items-center px-4 py-2 bg-slate-800 border-b border-slate-700">
        <span className="text-xs font-mono text-slate-400 uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className="p-1 hover:bg-slate-700 rounded-md transition-colors text-slate-400 hover:text-white"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-slate-50 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
});