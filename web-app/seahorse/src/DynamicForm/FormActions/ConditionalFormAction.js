import React, { useRef, useState, useEffect } from "react";
import { FirstConditionalVariablePicker } from "./FirstConditionalVariablePicker";
import { InputFormTypes } from "../../Constants/FormActions";
import { Button } from "react-bootstrap";
import FormNameContainer from "./helpers/FormNameContainer";
import { ConditionalFormActionContent } from "./ConditionalFormActionContent";
import { SecondConditionalVariableValue } from "./SecondConditionalVariableValue";
export default function ConditionalFormAction({
  state,
  item,
  onActionChanged,
}) {
  const [modalShow, setModalShow] = useState(false);

  const [pickedVariable, setPickedVariable] = useState({
    xParameterName: "Variable",
    xParameterValue: "Variable",
    yParameterName: "",
    yPrameterValue: true,
    type: InputFormTypes.Text,
    xParameterId: "",
    yParameterId: "",
    operator: "",
  });

  const [
    isConditionalContentVisible,
    setIsConditionalContentVisible,
  ] = useState(false);

  useEffect(() => {
    if (item.conditional) {
      setPickedVariable(item.conditional);
    }
  }, [item, state]);

  function pickXVariable(x) {
    const picked = pickedVariable;
    picked.xParameterName = x.name;
    picked.xParameterId = x.key;
    picked.type = x.type;
    item.conditional = picked;
    setPickedVariable(picked);
    setIsConditionalContentVisible(true);
    setModalShow(false);
    onActionChanged();
  }

  function changeSecondParameter(value) {
    pickedVariable.yPrameterValue = value;
    item.conditional = pickedVariable;
    console.log(`changing parameter to ${value}`);
    setPickedVariable(pickedVariable);
    onActionChanged();
  }

  function changeOperator(operator) {
    pickedVariable.operator = operator;
    item.conditional = pickedVariable;
    setPickedVariable(pickedVariable);
    onActionChanged();
  }
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ padding: 5 }}> If </p>
        <FirstConditionalVariablePicker
          modalShow={modalShow}
          setModalShow={setModalShow}
          pickedVariableName={pickedVariable.xParameterName}
          onItemClick={pickXVariable}
          state={state}
        ></FirstConditionalVariablePicker>

        <SecondConditionalVariableValue
          itemValue={item?.conditional?.yPrameterValue}
          itemType={pickedVariable.type}
          onChangeOperator={changeOperator}
          onChangeParameter={changeSecondParameter}
        ></SecondConditionalVariableValue>
      </div>
      <ConditionalFormActionContent
        item={item}
        state={state}
        isVisible={isConditionalContentVisible}
        onActionChanged={onActionChanged}
      ></ConditionalFormActionContent>
    </div>
  );
}
