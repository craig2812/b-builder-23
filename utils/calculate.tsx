export const Calculate = (aOdds, bOdds, backAmount, slider) => {
  console.log('calculating');

  const result = (backAmount * (aOdds - (1 * slider) / 100)) / bOdds;
  return result;
};
