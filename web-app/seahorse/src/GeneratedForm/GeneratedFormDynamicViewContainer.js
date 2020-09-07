import React, { useState, useEffect } from "react";
import FormItemFactory from "./GeneratedFormItem/helpers/FormItemFactory";
import FormItemWrapper from "./GeneratedFormItem/helpers/FormItemWrapper";

export default function GeneratedFormDynamicViewContainer({
  state,
  onDataRefreshed,
}) {
  return (
    <>
      {state.map((item) => (
        <FormItemWrapper key={item.id} item={item}>
          <FormItemFactory
            onDataRefreshed={onDataRefreshed}
            state={state}
            key={item.id}
            action={item.actionType}
            item={item}
          ></FormItemFactory>
        </FormItemWrapper>
      ))}
    </>
  );
}
