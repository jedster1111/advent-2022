import { calculateTotalScore, calculateTotalScoreV2, day2_1, day2_2 } from "."
import { day1_1 } from "../1"

describe("V1", () => {
  it("should calculate total score", () => {
    const input = [
      "A Y",
      "B X",
      "C Z",
    ]

    const result = calculateTotalScore(input)

    expect(result).toBe(15)
  })

  it("should handle a tie", () => {
    const input = [
      "A X"
    ]

    const result = calculateTotalScore(input)

    expect(result).toBe(4)
  })

  it("should handle a loss", () => {
    const input = [
      "B X"
    ]

    const result = calculateTotalScore(input)

    expect(result).toBe(1)
  })

  it("should handle a win", () => {
    const input = [
      "C X"
    ]

    const result = calculateTotalScore(input)

    expect(result).toBe(7)
  })

  it("should handle points for rock", () => {
    const input = [
      "B X"
    ]

    const result = calculateTotalScore(input)

    expect(result).toBe(1)
  })

  it("should handle points for paper", () => {
    const input = [
      "C Y"
    ]

    const result = calculateTotalScore(input)

    expect(result).toBe(2)
  })


  it("should handle points for scissors", () => {
    const input = [
      "A Z"
    ]

    const result = calculateTotalScore(input)

    expect(result).toBe(3)
  })

  it("should get the correct result", () => {
    expect(day2_1()).toBe(10595)
  })
})


describe("V2", () => {
  it("should calculate total score", () => {
    const input = [
      "A Y",
      "B X",
      "C Z",
    ]

    const result = calculateTotalScoreV2(input)

    expect(result).toBe(12)
  })

  it("should get the correct result", () => {
    expect(day2_2()).toBe(9541)
  })
})
