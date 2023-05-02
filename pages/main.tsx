import * as React from 'react';
import { useState } from 'react';
import { Calculate } from '../utils/calculate';

interface FormData {
  input1: string;
  input2: number;
  input3: string;
  input4: number;
  result: number;
}

export const MyOnePageApp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    input1: '2/2',
    input2: 120,
    input3: '6/4',
    input4: 0,
    result: 0,
  });

  const convertOdds = (input: string) => {
    var converted = input;
    if (input.includes('/')) {
      converted = (
        parseInt(input.split('/')[0]) / parseInt(input.split('/')[1]) +
        1
      ).toString();
    }
    return converted;
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
    console.log('slider', formData.input4);
  };

  const handleResult = (result: number) => {
    setFormData({
      ...formData,
      result: result,
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const aOdds = convertOdds(formData.input1);
    const bOdds = convertOdds(formData.input3);
    const result = Calculate(aOdds, bOdds, formData.input2, formData.input4);
    handleResult(result as number);
    console.log('result', result);
    console.log('formData', formData);
    event.preventDefault();
  };

  // const isFormValid = () => {
  //   // Check if all fields are filled out
  //   return Object.values(formData).every((value) => value !== 0);
  // };

  return (
    <div>
      <h1>BetBuilder</h1>
      <form
        onSubmit={handleFormSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="input1">WillHill Odds</label>
        <input
          type="text"
          id="input1"
          name="input1"
          value={formData.input1}
          onChange={handleInputChange}
        />

        <label htmlFor="input2">WillHill Amount</label>
        <input
          type="text"
          id="input2"
          name="input2"
          value={formData.input2}
          onChange={handleInputChange}
        />

        <label htmlFor="input3">Lay Bet Odds</label>
        <input
          type="text"
          id="input3"
          name="input3"
          value={formData.input3}
          onChange={handleInputChange}
        />

        <label htmlFor="slider">
          Slider: Split winnings reagrdless of result --{'>'} Only Win on Will
          Hill
        </label>
        <input
          type="range"
          id="slider"
          name="slider"
          min="0"
          max="200"
          value={formData.input4}
          onChange={handleSliderChange}
        />

        <button
          type="submit"
          // disabled={!isFormValid()}
        >
          Do Calculations
        </button>

        <label htmlFor="result">Result</label>
        <input
          type="number"
          id="result"
          name="result"
          value={formData.result.toFixed(2)}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default MyOnePageApp;
