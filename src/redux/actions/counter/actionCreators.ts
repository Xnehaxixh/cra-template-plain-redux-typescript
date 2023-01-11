import { DECREMENT, INCREMENT } from "./actionTypes"

export const increment = (count: number) => {
  return {
    type: INCREMENT,
    payload: count
  }
}

export const decrement = (count: number) => {
  return {
    type: DECREMENT,
    payload: count
  }
}
