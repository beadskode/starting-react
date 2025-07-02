export const makeArray = (length: number) => new Array(length).fill(null)
// 시작값부터 끝값까지로 채워진 배열 반환
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min)
// 랜덤 정수 반환 (단, max 본인은 미포함)
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min
