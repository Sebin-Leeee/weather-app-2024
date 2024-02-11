import React, { useState } from "react";

interface WeatherSearchProps {
  onSubmit: (location: string) => void;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ onSubmit }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="mr-2 p-2 rounded"
      />
      <button
        type="submit"
        className="bg-white px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
};

export default WeatherSearch;
