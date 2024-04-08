import { useCallback, useContext, useEffect } from "react";
import LocalStorageContext from "../context/LocalStorageContext";

const getLocalStorageValue = (key, defaultValue) => {
    const value = localStorage.getItem(key);
    if (!value) return defaultValue;
    try {
        return JSON.parse(value)
    } catch (error) {
        return value;
    }
};

const setLocalStorageValue = (key, newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
}

const useLocalStorage = (key, defaultValue) => {

    const storageContext = useContext(LocalStorageContext);

    const isExistsKeyInContext = useCallback((key) => storageContext.localStorage.has(key), [storageContext]);

    const setNewValueInContext = useCallback((newValue) => {
        storageContext.setLocalStorage(new Map([...storageContext.localStorage]).set(key, newValue))
    }, [key, storageContext]);

    useEffect(() => {
        // add new key to context if not exists
        if (!isExistsKeyInContext(key)) {
            let value = getLocalStorageValue(key, defaultValue);
            setNewValueInContext(value);
        }
    }, [key, defaultValue, isExistsKeyInContext, setNewValueInContext]);

    // refresh value when other application changing local storage
    useEffect(() => {
        const localStorageChangeHandler = (e) => {
            // clear all
            if (e.key === null) setNewValueInContext(defaultValue);
            // clear item
            if (e.key !== key) return;
            // refresh value of context
            let newValue;
            try {
                if (!e.newValue) {
                    newValue = defaultValue;
                } else {
                    newValue = JSON.parse(e.newValue);
                }
            } catch (error) {
                newValue = e.newValue;
            }
            setNewValueInContext(newValue);
        };
        // thay doi tu tab khac se thuc hien ham nay
        window.addEventListener('storage', localStorageChangeHandler);
        return () => {
            window.removeEventListener("storage", localStorageChangeHandler);
        };
    }, [key, defaultValue, setNewValueInContext]);

    const setValue = useCallback((newValue) => {
        setLocalStorageValue(key, newValue);
        setNewValueInContext(newValue);
    }, [key, setNewValueInContext]);

    const getValue = useCallback(() => {
        return storageContext.localStorage.get(key)
    }, [key, storageContext]);

    return [getValue(), setValue];
};

export default useLocalStorage;