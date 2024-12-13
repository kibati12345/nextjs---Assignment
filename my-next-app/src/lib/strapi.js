import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export const fetchFromStrapi = async (endpoint) => {
  try {
    const response = await axios.get(`${strapiUrl}/api/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
    return null;
  }
};
