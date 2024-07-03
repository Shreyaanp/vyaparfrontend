import React, { useState, useEffect } from "react";
import { translateText } from "./translateText"; // Adjust the path according to your file structure

const MyComponent: React.FC = () => {
  return (
    <div>
      <p>{translateText("get your product onboard on vyapar launchpad")}</p>
      <p>{translateText("welcome to vyapar launchpad")}</p>
      <p>
        {translateText(
          "Vyapar launchpad helps you to streamline your journy of digital ecommerce"
        )}
      </p>
    </div>
  );
};

export default MyComponent;
