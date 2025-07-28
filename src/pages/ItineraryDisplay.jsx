import { useState, useEffect } from 'react';
import Preview from './Preview';

const ItineraryDisplay = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:3001/api/itinerary')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFormData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching itinerary data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div className="text-center p-8">Loading itinerary...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">Error: Could not fetch itinerary data. Please ensure the backend server is running.</div>;
  }


  return formData ? <Preview formData={formData} /> : null;
};

export default ItineraryDisplay;