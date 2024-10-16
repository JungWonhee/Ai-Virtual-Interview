import React from 'react';

export const Select = ({ children, ...props }) => (
  <select className="select" {...props}>
    {children}
  </select>
);

export const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

export const SelectTrigger = ({ children }) => (
  <div className="select-trigger">{children}</div>
);

export const SelectContent = ({ children }) => (
  <div className="select-content">{children}</div>
);

export const SelectValue = ({ placeholder }) => (
  <span className="select-value">{placeholder}</span>
);
