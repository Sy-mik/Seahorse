import React from "react";
import { ItemGenerator } from "./ItemGenerator";
export function ItemGeneratorContainer({ item, index, onDataRefreshed }) {
  function changeItemValue(value) {
    item.value = value;
    onDataRefreshed();
  }

  return (
    <ItemGenerator
      onItemChange={changeItemValue}
      key={index}
      index={index}
      type={item.type}
      inputName={item.name}
    ></ItemGenerator>
  );
}
