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

export const time = (seconds: number) => {
  const min = Math.floor(seconds / 60);
  const sec = seconds - min * 60;
  return [min, sec];
};
