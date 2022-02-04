export const checkPoint = (
  posX: number,
  posY: number,
  centerX: number,
  centerY: number,
  radius: number
) => {
  const distancePoints =
    (posX - centerX) * (posX - centerX) + (posY - centerY) * (posY - centerY);
  radius *= radius;
  if (distancePoints < radius) {
    return true;
  }
  return false;
};
