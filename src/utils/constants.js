const baseUrl = 'https://nepalog.azurewebsites.net/api';
let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  }
};


export const constants = {
  baseUrl,
  axiosConfig
};

