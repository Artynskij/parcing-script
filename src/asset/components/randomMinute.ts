export const randomMinute = (min: number, max: number) => {
  const kef = min < 1 && min > 0.1 ? 0.1 : min > 1 ? 1 : 0.001;
  return (Math.random() * (max - min + kef) + min) * 1000 * 60;
};
