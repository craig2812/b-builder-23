import * as React from 'react';
import { useState } from 'react';

interface FormData {
  input1: string;
  input2: number;
  input3: string;
  input4: number;
}

export const MyOnePageApp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    input1: '2/2',
    input2: 0,
    input3: '6/4',
    input4: 50,
  });

  const convertOdds = (input: string) => {
    var result = input;
    if (input.includes('/')) {
      result = (
        parseInt(input.split('/')[0]) / parseInt(input.split('/')[1]) +
        1
      ).toString();
    }
    return result;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      input4: parseInt(event.target.value),
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const aOdds = convertOdds(formData.input1);
    const bOdds = convertOdds(formData.input3);
    console.log(aOdds, bOdds);
    console.log('Calculating with', formData);
    event.preventDefault();
  };

  const isFormValid = () => {
    // Check if all fields are filled out
    return Object.values(formData).every((value) => value !== 0);
  };

  return (
    <div>
      <h1>My One-Page App</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="input1">Input 1:</label>
        <input
          type="text"
          id="input1"
          name="input1"
          value={formData.input1}
          onChange={handleInputChange}
        />

        <label htmlFor="input2">Input 2:</label>
        <input
          type="text"
          id="input2"
          name="input2"
          value={formData.input2}
          onChange={handleInputChange}
        />

        <label htmlFor="input3">Input 3:</label>
        <input
          type="text"
          id="input3"
          name="input3"
          value={formData.input3}
          onChange={handleInputChange}
        />

        <label htmlFor="slider">Slider:</label>
        <input
          type="range"
          id="slider"
          name="slider"
          min="0"
          max="100"
          value={formData.input4}
          onChange={handleSliderChange}
        />

        <button type="submit" disabled={!isFormValid()}>
          Do Calculations
        </button>
      </form>
    </div>
  );
};

export default MyOnePageApp;
