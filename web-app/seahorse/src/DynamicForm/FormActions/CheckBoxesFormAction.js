import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { IconName, AiOutlineForm } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { BsCheckBox } from "react-icons/bs";
import ActionFormContainer from "./ActionFormContainer";
import { InputFormTypes, FormTemplates } from "../../Constants/FormActions";

export default function CheckBoxFormAction({ item, onActionChanged }) {
  return (
    <ActionFormContainer
      item={item}
      onActionChanged={onActionChanged}
      type={InputFormTypes.CheckBox}
    ></ActionFormContainer>
  );
}
