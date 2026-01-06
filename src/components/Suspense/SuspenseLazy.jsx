import React, { Suspense, lazy } from "react";

const Flowers = lazy(() => import("./Flowers.jsx"));

const SuspenseLazy = () => {
  return (
    <div>
      <h3>Suspense</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <Flowers />
      </Suspense>
    </div>
  );
};

export default SuspenseLazy;
