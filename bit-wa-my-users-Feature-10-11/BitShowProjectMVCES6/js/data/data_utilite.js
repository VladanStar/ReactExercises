const addToStorage = (key, value) => { // Method to put instance in local Storage.
    localStorage.setItem(key, value);
}

const getFromStorage = (key) => { // Method to retrive instance from storage
    return localStorage.getItem(key);
}

export {
    addToStorage,
    getFromStorage
}