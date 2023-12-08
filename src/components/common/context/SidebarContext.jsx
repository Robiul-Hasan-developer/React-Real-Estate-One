import React, { Children, createContext, useState } from 'react';

export const SidebarContext = createContext(); 

const SidebarProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(); 

    const handleRemove = () => {
        setIsOpen(false) 
    }
    
    return (
        <>
        <SidebarContext.Provider value={{ isOpen, setIsOpen, handleRemove }}>
            {children}
        </SidebarContext.Provider>
        </>
    );
};

export default SidebarProvider;