import React, { useEffect } from "react";
import {
  InputFormTypes,
  ConditionalOperators,
} from "../../Constants/FormActions";
import { Form } from "react-bootstrap";
export function SecondConditionalVariableValue({
  itemType,
  onChangeOperator,
  onChangeParameter,
  itemValue,
}) {
  useEffect(() => {
    console.log(`Conditional type ${itemType}`);
    switch (itemType) {
      case InputFormTypes.CheckBox:
        onChangeParameter(true);
        break;
      case InputFormTypes.Date:
        onChangeParameter(new Date());
        break;
      case InputFormTypes.Text:
        onChangeParameter("");
        break;
      default:
    }
  }, [itemType]);

  switch (itemType) {
    case InputFormTypes.CheckBox:
      return (
        <>
          <p style={{ padding: 5 }}> Is qual to </p>
          <Form.Control
            style={{ maxWidth: 120, marginLeft: 10 }}
            defaultValue={itemValue ? itemValue : true}
            onChange={(e) => onChangeParameter(e.target.value)}
            as="select"
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </Form.Control>
        </>
      );
    case InputFormTypes.Radio:
      return (
        <>
          <p style={{ padding: 5 }}> Is qual to </p>
          <Form.Control
            style={{ maxWidth: 120, marginLeft: 10 }}
            defaultValue={itemValue ? itemValue : true}
            onChange={(e) => onChangeParameter(e.target.value)}
            as="select"
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </Form.Control>
        </>
      );
    case InputFormTypes.Text:
      return (
        <>
          <p style={{ padding: 5 }}> Is qual to </p>
          <Form.Control
            style={{ maxWidth: 120, marginLeft: 10 }}
            onChange={(e) => onChangeParameter(e.target.value)}
            defaultValue={itemValue ? itemValue : ""}
            type="text"
            placeholder=""
          />
        </>
      );
    case InputFormTypes.Date:
      return (
        <>
          <p style={{ padding: 5 }}> Is qual to </p>
          <Form.Control
            style={{ maxWidth: 120, marginLeft: 10 }}
            onChange={(e) => onChangeParameter(e.target.value)}
            type="date"
            defaultValue={itemValue ? itemValue : ""}
          />
        </>
      );
    default:
      return <></>;
  }
}
