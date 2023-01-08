import { input } from "./input"

export const getMaxCalories = (allCalories: (number | undefined)[]): number => {
  const calories = getSummedCalories(allCalories)
  const sortedCalories = sortAscending(calories)

  return sortedCalories[sortedCalories.length - 1]
}

export const getSumOfMax3Calories = (allCalories: (number | undefined)[]): number => {
  const calories = getSummedCalories(allCalories)
  const sortedCalories = sortAscending(calories)

  return sortedCalories.slice(-3).reduce(sum)
}

const getSummedCalories = (allCalories: (number | undefined)[]) => {
  let calories: number[] = []
  let caloryCount = 0

  for (const calory of allCalories) {
    if (calory === undefined) {
      calories.push(caloryCount)
      caloryCount = 0
      continue
    }

    caloryCount += calory
  }

  calories.push(caloryCount)
  return calories
}

const sum = (a: number, b: number) => a + b

const sortAscending = (calories: number[]) => {
  return calories.sort((a, b) => a - b)
}

export const day1_1 = () => getMaxCalories(input)
export const day1_2 = () => getSumOfMax3Calories(input)



