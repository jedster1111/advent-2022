import { day1_1, day1_2, getMaxCalories, getSumOfMax3Calories } from "."

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

it("should get the right result part 1", () => {
  expect(day1_1()).toBe(66616)
})

it("should get the right result part 2", () => {
  expect(day1_2()).toBe(199172)
})
