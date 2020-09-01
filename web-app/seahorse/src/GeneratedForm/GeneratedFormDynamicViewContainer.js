import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import FormItemFactory from "./GeneratedFormItem/helpers/FormItemFactory";

export default function GeneratedFormDynamicViewContainer({ state }) {
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      {state.map((item) => (
        <FormItemFactory
          key={item.id}
          action={item.actionType}
          item={item}
        ></FormItemFactory>
      ))}
    </>
  );
}
