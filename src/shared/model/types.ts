export type PropsPanel = {
  children: React.ReactNode;
  variant: 'left' | 'right';
};

export type PropsButton = {
  children: React.ReactNode;
  type?: 'add' | 'select';
};
