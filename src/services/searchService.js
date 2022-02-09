import apiClient from "./httpApiSauceService";

export const fetchGifs = (term) =>
  apiClient.get(
    `/search?api_key=${process.env.REACT_APP_GIF_API_KEY}&limit=25&offset=0&rating=Y&lang=en&q=${term}`
  );
