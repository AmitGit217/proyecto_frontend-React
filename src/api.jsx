const searchNews = async (query) => {
  const url = `https://api.mediastack.com/v1/news?access_key=${import.meta.env.VITE_API_KEY}&keywords=${query}&countries=us,gb,de,es&limit=25`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchNextPage = async () => {
  const searchQuery = localStorage.getItem("searchQuery") ?? "";
  const currentOffset = parseInt(localStorage.getItem("currentOffset") ?? "0");

  const limit = 25;

  const url = `https://api.mediastack.com/v1/news?access_key=${
    import.meta.env.VITE_API_KEY
  }&keywords=${encodeURIComponent(searchQuery)}&countries=us,gb,de,es&limit=${limit}&offset=${currentOffset + 1}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.error) {
    console.error(data.error);
    return [];
  }

  localStorage.setItem("currentOffset", String(currentOffset + limit));

  return data.data;
};
export { searchNews, fetchNextPage };