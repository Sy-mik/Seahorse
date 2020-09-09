import React from "react";
import DynamicallyExtensibleFormInputAction from "./ExtensibleFormInputAction";
export function ConditionalFormActionContent({
  isVisible,
  state,
  item,
  onActionChanged,
}) {
  return isVisible ? (
    <>
      <div style={{ marginLeft: 30 }}>
        <h5>Display:</h5>
        <DynamicallyExtensibleFormInputAction
          state={state}
          item={item}
          onActionChanged={onActionChanged}
        ></DynamicallyExtensibleFormInputAction>
      </div>
      <hr></hr>
    </>
  ) : null;
}
