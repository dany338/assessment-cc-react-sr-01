export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {
  const MAX_DICE_FACE = 3;
  const diceFaces = [dice1, dice2, dice3];
  if (diceFaces.some((diceFace) => diceFace < 1 || diceFace > 6)) {
    throw new Error('Dice out of number range');
  }
  const diceFacesUnique = diceFaces.filter(
    (currentValue, currentIndex) => diceFaces.indexOf(currentValue) === currentIndex
  );
  const diceFacesUniqueCount = diceFacesUnique.length;
  if (diceFacesUniqueCount === MAX_DICE_FACE) {
    return Math.max(...diceFaces);
  } else if (diceFacesUniqueCount === 2) {
    const finDuplicateNumber = diceFaces.filter((currentValue, currentIndex) =>
         diceFaces.indexOf(currentValue) !== currentIndex)?.[0];
    return finDuplicateNumber * 2;
  } else {
    return diceFacesUnique[0] * 3;
  }
};
