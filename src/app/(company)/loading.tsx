"use client";

import { Oval } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="w-full h-full grid place-items-center">
      <Oval color="#ea580c" secondaryColor="gray" />
    </div>
  );
};

export default loading;
