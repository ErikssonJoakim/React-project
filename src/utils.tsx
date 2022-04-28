export const getRandomNumber = (minValue: number, maxValue: number): number => {
  const num: number = Math.floor(Math.random() * (maxValue - minValue) + minValue)
  if (num === 2) {
    return num + 1
  }
  return num === 2 ? num + 1 : num
}
