async function logMovies() {
  try {
    const response = await fetch(
      "https://github.com/gloriaumutoni?tab=repositories"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const movies = await response.json();
    console.log(movies);
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }
}

logMovies();
