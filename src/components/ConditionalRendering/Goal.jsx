import React from "react";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

function Goal(props) {
  const isGoal = props.isGoal;   ///see app.jsx
//   if (isGoal) {
//     return <MadeGoal />;
//   }
//   return <MissedGoal />;
return(
    <>
    {isGoal ? <MadeGoal /> : <MissedGoal />}
</>
)
}

export default Goal;
