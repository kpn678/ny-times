const getStories = async () => {
  const response = await fetch ('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Sip1GXvI9tspXaACu4xTIT2D6UgAAWTI');
  const listOfStories = await response.json();
  return listOfStories;
}

export { getStories }