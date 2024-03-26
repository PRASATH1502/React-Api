import React, { useState, useEffect } from 'react';

function StarWarsVehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/vehicles/')
      .then(response => response.json())
      .then(data => setVehicles(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Star Wars Vehicles</h1>
      <ul>
        {vehicles.map((vehicle, index) => (
          <li key={index}>{vehicle.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StarWarsVehicles;
