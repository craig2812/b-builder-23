export const Calculate = (aOdds, bOdds, backAmount, slider) => {
  console.log('calculating');

  const result = (backAmount * (aOdds - (1 * slider) / 100)) / bOdds;
  return result;
};

export const CalculateWinningsBack = (
  backAmount,
  backOdds,
  layAmount,
  layOdds
) => {
  console.log(backAmount, backOdds, layAmount, layOdds);
  const backWinnings = backAmount * backOdds - layAmount - backAmount;
  const layWinnings = layAmount * layOdds - backAmount;
  return { back: backWinnings, lay: layWinnings };
};
