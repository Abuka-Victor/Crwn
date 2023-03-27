import { createContext, useState } from 'react';

export const cartOpenContext = createContext({
  open: false,
  setOpen: () => null,
});

export const CartOpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const value = { open, setOpen };

  return (
    <cartOpenContext.Provider value={value}>
      {children}
    </cartOpenContext.Provider>
  );
};
