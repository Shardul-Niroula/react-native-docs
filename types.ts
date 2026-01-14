
export type Platform = 'iOS' | 'Android' | 'All';

export interface CodeExample {
  title?: string;
  code: string;
  language: 'jsx' | 'js';
}

export interface PropItem {
  name: string;
  type: string;
  default?: string;
  description: string;
  platform?: Platform;
  required?: boolean;
  examples: CodeExample[];
}

export interface StyleGroup {
  category: string;
  properties: string[];
  description?: string;
}

export interface ComponentDoc {
  id: string;
  name: string;
  category: string;
  description: string;
  importCode: string;
  purpose: string[];
  basicUsage: CodeExample[];
  props: PropItem[];
  styles: StyleGroup[];
  notes?: string[];
  installation?: {
    type: 'built-in' | 'npm';
    package?: string;
    command?: string;
  };
}
