import React from "react";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

function Goal(props) {
  const isGoal = props.isGoal;   ///see app.jsx
//   if (isGoal) {
//     return <MadeGoal />;
//   }
//   return <MissedGoal />;

 /* -----Ternary Operator----- */
return(
    <>
    {isGoal ? <MadeGoal /> : <MissedGoal />}  
    {isGoal && <button>Click Me</button>}
</>
)
}

export default Goal;
