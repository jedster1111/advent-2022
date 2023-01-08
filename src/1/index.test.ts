import { getMaxCalories, getSumOfMax3Calories } from "."

it("should return the max callory count", () => {
  const input = [1000, 2000, 3000, , 4000, , 7000, 8000, 9000, , 10000]

  const result = getMaxCalories(input)

  expect(result).toBe(24000)
})

it("should return the max callory count when largest is at the end", () => {
  const input = [1000, 2000, 3000, , 4000, , 7000, 8000, 9000, , 50000]
  const result = getMaxCalories(input)

  expect(result).toBe(50000)
})

it("should return the 3 max callory count", () => {
  const input = [1000, 2000, 3000, , 4000, , 5000, 6000, , 7000, 8000, 9000, , 10000]
  const result = getSumOfMax3Calories(input)

  expect(result).toBe(45000)
})

it("should return the 3 max callory count when largest is at the end", () => {
  const input = [1000, 2000, 3000, , 4000, , 7000, 8000, 9000, , 50000]
  const result = getSumOfMax3Calories(input)

  expect(result).toBe(80000)
})
