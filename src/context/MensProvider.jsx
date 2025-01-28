// MensContext.js
import React, { createContext, useState } from 'react';

export const MensContext = createContext();

export const MensProvider = ({ children }) => {
    // Define your context state and logic here
    const [mensData, setMensData] = useState(/* initial state */);

    return (
        <MensContext.Provider value={{ mensData, setMensData }}>
            {children}
        </MensContext.Provider>
    );
};
