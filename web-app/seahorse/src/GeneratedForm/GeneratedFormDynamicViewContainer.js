import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import FormItemFactory from "./GeneratedFormItem/helpers/FormItemFactory";
import FormItemWrapper from "./GeneratedFormItem/helpers/FormItemWrapper";

export default function GeneratedFormDynamicViewContainer({ state }) {
  return (
    <>
      {state.map((item) => (
        <FormItemWrapper item={item}>
          <FormItemFactory
            key={item.id}
            action={item.actionType}
            item={item}
          ></FormItemFactory>
        </FormItemWrapper>
      ))}
    </>
  );
}
