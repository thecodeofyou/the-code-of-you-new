import React, { useState } from 'react';

export default function BirthForm() {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data to confirm it works
    console.log({ birthDate, birthTime, birthPlace });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4">
      <div>
        <label className="block mb-1 font-semibold">Birth Date</label>
        <input
          type="date"
          value={birthDate}
          onChange={e => setBirthDate(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Birth Time</label>
        <input
          type="time"
          value={birthTime}
          onChange={e => setBirthTime(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Birth Place</label>
        <input
          type="text"
          value={birthPlace}
          onChange={e => setBirthPlace(e.target.value)}
          placeholder="City, State, Country"
          className="w-full border rounded p-2"
          required
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
}
