const API_URL = 'https://cars-database-with-image.p.rapidapi.com/api/search/advanced';
const API_KEY = process.env.REACT_APP_API_KEY;
const API_HOST = process.env.REACT_APP_API_HOST;

export const fetchCars = async () => {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
    },
  };

  try {
    const cachedData = localStorage.getItem('carsData');
    if (cachedData) {
      console.log('Date încărcate din localStorage');
      return JSON.parse(cachedData);
    }

    const response = await fetch(API_URL, options);
    if (!response.ok) {
      throw new Error('Eroare la încărcarea datelor');
    }

    const data = await response.json();
    localStorage.setItem('carsData', JSON.stringify(data.results));
    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};