// LOCAL STORAGE
function getItem(key, defaultValue) {
    let value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return defaultValue;
  }
  
  function setItem(key, value) {
    const stringified_value = JSON.stringify(value);
    localStorage.setItem(key, stringified_value);
  }
  
  function removeItem(key) {
    localStorage.removeItem(key);
  }
 
  // SESSION STORAGE
  function getSessionItem(key, defaultValue) {
    let value = sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return defaultValue;
  }
  
  function setSessionItem(key, value) {
    const stringified_value = JSON.stringify(value);
    sessionStorage.setItem(key, stringified_value);
  }
  
  function removeSessionItem(key) {
    sessionStorage.removeItem(key);
  }
  
  const Storage = { getItem, setItem, removeItem, getSessionItem, setSessionItem, removeSessionItem };
  export default Storage;