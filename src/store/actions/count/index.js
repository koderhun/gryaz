export const INCREMENT = "INCREMENT";
export const DECREASE = "DECREASE";

export function incrementAction() {
  return {
    type: INCREMENT
  };
}
export function decreaseAction() {
  return {
    type: DECREASE
  };
}
