// src/utils/authUtils.js
export const saveToken = (token) => {
    localStorage.setItem('authToken', token);
  };
  
  export const saveRole = (role) => {
    localStorage.setItem('role', role);
  };
  
  export const getToken = () => {
    return localStorage.getItem('authToken');
  };
  
  export const getRole = () => {
    return localStorage.getItem('role');
  };
  