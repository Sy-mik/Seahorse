import React, { useState } from "react";
import QuoteApp from "./DndExample";

export default function DynamicFormContainer() {
  const textInputCallback = () => {
    console.log("TextInput");
  };

  const [availableActions, setAvailableActions] = useState([
    {
      name: "TextInput",
      icon: "TextInput",
      callback: textInputCallback,
    },
  ]);

  const [addedActions, setAddedActions] = useState([]);

  return (
    <div>
      <QuoteApp></QuoteApp>
    </div>
  );
}
