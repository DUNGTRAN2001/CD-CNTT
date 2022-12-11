import axios from "../axios";
const handleLoginApi = (username, password) => {
  return axios.post("/api/Identity/login", { username, password });
};
const handleRegisterApi = (data) => {
  return axios.post("/api/Identity/register", data);
};
export { handleLoginApi, handleRegisterApi };
