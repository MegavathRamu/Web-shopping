// KidsContext.js
import React, { createContext, useState } from 'react';

export const KidsContext = createContext();

export const KidsProvider = ({ children }) => {
    // Define your context state and logic here
    const [kidsData, setKidsData] = useState(/* initial state */);

    return (
        <KidsContext.Provider value={{ kidsData, setKidsData }}>
            {children}
        </KidsContext.Provider>
    );
};
