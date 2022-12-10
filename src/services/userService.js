import axios from "../axios";
const handleLoginApi = (username, password) => {
  return axios.post("/api/Identity/login", { username, password });
};
export { handleLoginApi };
