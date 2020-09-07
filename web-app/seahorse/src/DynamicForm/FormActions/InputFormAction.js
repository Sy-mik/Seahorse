import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { AiOutlineForm } from "react-icons/ai";
import { InputFormTypes } from "../../Constants/FormActions";
import ActionFormContainer from "./ActionFormContainer";

export default function InputFormAction({ item, onActionChanged }) {
  return (
      <ActionFormContainer
        item={item}
        onActionChanged={onActionChanged}
        type={InputFormTypes.Text}
      ></ActionFormContainer>
  );
}
