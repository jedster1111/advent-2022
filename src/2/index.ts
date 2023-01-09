import { input } from "./input"

type Options = "rock" | "paper" | "scissors"
type Outcome = "loss" | "draw" | "win"

type Round = {
  myMove: Options
  opponentMove: Options
}

const choiceScores: Record<Options, number> = {
  rock: 1,
  paper: 2,
  scissors: 3
}

const outcomes: Record<Options, Record<Outcome, Options>> = {
  rock: { win: "scissors", loss: "paper", draw: "rock" },
  paper: { win: "rock", loss: "scissors", draw: "paper" },
  scissors: { win: "paper", loss: "rock", draw: "scissors" },
}

const invertOutcome = (outcome: Outcome): Outcome => {
  if (outcome === "win") return "loss"
  if (outcome === "loss") return "win"
  if (outcome === "draw") return "draw"

  throw new Error("Invalid input outcome")
}

const convertLetterToOption = (letter: string): Options => {
  if (letter === "A" || letter === "X") return "rock"
  if (letter === "B" || letter === "Y") return "paper"
  if (letter === "C" || letter === "Z") return "scissors"

  throw new Error(`Failed to convert letter (${letter}) to a valid option`)
}

const convertLetterToRequiredOutcome = (letter: string): Outcome => {
  if (letter === "X") return "loss"
  if (letter === "Y") return "draw"
  if (letter === "Z") return "win"

  throw new Error(`Failed to convert letter (${letter}) to a valid required outcome`)
}

const getChoiceScore = (option: Options): number => {
  return choiceScores[option]
}

const getOutcomeScore = ({ myMove, opponentMove }: Round): number => {
  const { loss, draw, win } = outcomes[myMove]
  if (opponentMove === loss) return 0
  if (opponentMove === draw) return 3
  if (opponentMove === win) return 6

  throw new Error(`Unkown outcome, myMove: ${myMove}, opponentMove: ${opponentMove}`)
}

const calculateMyMoveFromRequiredOutcome = (opponentMove: Options, requiredOutcome: Outcome): Options => {
  return outcomes[opponentMove][invertOutcome(requiredOutcome)]
}

const calculateRoundScore = (round: Round): number => {
  const myChoiceScore = getChoiceScore(round.myMove)
  const roundOutcomeScore = getOutcomeScore(round)
  return myChoiceScore + roundOutcomeScore
}

const calculateTotalScoreFromRounds = (rounds: Round[]): number => {
  return rounds.reduce((totalScore, round) => totalScore + calculateRoundScore(round), 0)
}

export const parseInputV1 = (input: string[]): Round[] => {
  return input
    .map<string[]>(stringRound => stringRound.split(" "))
    .map<Round>(([opponentMove, myMove]) => (
      {
        myMove: convertLetterToOption(myMove),
        opponentMove: convertLetterToOption(opponentMove)
      })
    )
}

const parseInputV2 = (input: string[]): Round[] => {
  return input
    .map<string[]>(stringRound => stringRound.split(" "))
    .map<Round>(([rawOpponentMove, rawRequiredOutcome]) => {
      const opponentMove = convertLetterToOption(rawOpponentMove)
      const requiredOutcome = convertLetterToRequiredOutcome(rawRequiredOutcome)
      const myRequiredMove = calculateMyMoveFromRequiredOutcome(opponentMove, requiredOutcome)
      return (
        {
          myMove: myRequiredMove,
          opponentMove: opponentMove
        })
    })
}


export const calculateTotalScore = (input: string[]): number => {
  const rounds = parseInputV1(input)
  return calculateTotalScoreFromRounds(rounds)
}

export const calculateTotalScoreV2 = (input: string[]): number => {
  const rounds = parseInputV2(input)
  return calculateTotalScoreFromRounds(rounds)
}

export const day2_1 = () => calculateTotalScore(input)
export const day2_2 = () => calculateTotalScoreV2(input)
