export const numbersFractionCalculator = (numbers: number[]) => {
  const count = numbers.length;
  const positiveNumbers: number = numbers.filter((number) => number > 0).length;
  const negativeNumbers: number = numbers.filter((number) => number < 0).length;
  const zeroNumbers: number = numbers.filter((number) => number === 0).length;

  const positiveFraction = (positiveNumbers / count).toFixed(6);
  const negativeFraction = (negativeNumbers / count).toFixed(6);
  const zeroFraction     = (zeroNumbers / count).toFixed(6);

  return {
    positives: positiveFraction,
    negative: negativeFraction,
    zeros: zeroFraction,
  };
};
