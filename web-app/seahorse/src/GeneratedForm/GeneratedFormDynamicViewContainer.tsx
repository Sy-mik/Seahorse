import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import FormItemFactory from "./GeneratedFormItem/helpers/FormItemFactory";

export default function GeneratedFormDynamicViewContainer({ state }) {

  return (
    <div>
      {state.map((item) => (
        <FormItemFactory key={item.id} action={item.actionType} item={item}></FormItemFactory>
      ))}
    </div>
  );
}
