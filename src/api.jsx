const searchNews = async (query) => {
  const url = `https://api.mediastack.com/v1/news?access_key=${import.meta.env.VITE_API_KEY}&keywords=${query}&countries=us,gb,de&limit=25`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { searchNews };