/*
 *
 * WAP to find the ensure whether the input list is valid or not on the basis of the directed graph given below.
 *
 * SHOWER
 *    |
 *    v
 * Wake UP <- BRUSH TEETH <- EAT BREAKFAST
 *
 *
 *
 *
 */

const actionGraph = {
  WAKEUP: [],
  SHOWER: ["WAKEUP"],
  BRUSHTEETH: ["WAKEUP"],
  EATBREAKFAST: ["BRUSHTEETH"],
};

const actionListOne = ["WAKEUP", "SHOWER", "BRUSHTEETH", "EATBREAKFAST"];
const actionListTwo = ["SHOWER", "WAKEUP", "BRUSHTEETH", "EATBREAKFAST"];

function checkValidList(actionGraph, actionList) {
  const occuredActions = [];
  const actionListCopy = JSON.parse(JSON.stringify(actionList)); // we need original array so to avoid mutating it.

  while (actionListCopy.length > 1) {
    let action = actionListCopy.shift();
    if (actionGraph[action].length < 1) {
      occuredActions.push(action);
    } else {
      let actionFlag = occuredActions.includes(actionGraph[action][0]);
      if (actionFlag === true) {
        occuredActions.push(action);
      } else {
        console.log(actionList, "is invalid.");
        return;
      }
    }
  }
  console.log(actionList, "is valid.");
}

checkValidList(actionGraph, actionListOne);
checkValidList(actionGraph, actionListTwo);
