import React from 'react';

const LocalStorageContext = React.createContext({
    localStorage: new Map(),
    setLocalStorage: () => { }
});

export default LocalStorageContext;