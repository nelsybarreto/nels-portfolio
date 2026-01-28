export type AboutCardBase = {
    id: string;
    title: string;
    icon: 'experience' | 'stack' | 'quality' | 'tools';
    value?: string;      // opcional
    description?: string;       // opcional
    stack?: string[];    // opcional
  };
  
  export type AboutCardWithValue = AboutCardBase & {
    value: string;
    description: string;
  };
  
  export type AboutCardWithStack = AboutCardBase & {
    stack: string[];
  };
  
  export type AboutCard =
    | AboutCardWithValue
    | AboutCardWithStack;