import axios from "axios";

export const searchItunes = async (query, limit = 10, offset = 0) => {
  // https://stackoverflow.com/questions/44177089/itunes-search-api-page-number-for-the-query
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
    query
  )}&media=music&limit=${limit}&offset=${offset}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    // TODO: Find better way to handle the errors
    console.error("Error fetching data from Itunes API", error);
    throw error;
  }
};
