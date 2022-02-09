import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.giphy.com/v1/gifs/",
});

export default apiClient;
