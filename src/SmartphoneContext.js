import React, { createContext, useContext, useState, useEffect } from 'react';

const SmartphoneContext = createContext();

export function useSmartphone() {
   return useContext(SmartphoneContext);
}

export const SmartphoneProvider = ({ children }) => {
   const [isSmartphone, setIsSmartphone] = useState(window.innerWidth < 768);

   useEffect(() => {
      function handleResize() {
         setIsSmartphone(window.innerWidth < 768);
      }

      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <SmartphoneContext.Provider value={isSmartphone}>
         {children}
      </SmartphoneContext.Provider>
   );
};
