import React, { useState } from "react";
import { FormTemplates } from "../../../Constants/FormActions";
import InputFormAction from "../InputFormAction";
import ActionWrapperComponent from "./ActionWrapperComponent";
import CheckBoxFormAction from "../CheckBoxesFormAction";
import DynamicallyExtensibleFormInputAction from "../DynamicallyExtensibleFormInputAction";

export default function FormActionFactory({
  action,
  onDelete,
  provided,
  item,
  snapshot,
  index,
  onActionChanged,
}) {
  function onFormNameChange(name) {
    item.formName = name;
    onActionChanged();
  }

  switch (action) {
    case FormTemplates.TextInputForm:
      return (
        <ActionWrapperComponent
          index={index}
          onFormNamechange={onFormNameChange}
          onDelete={onDelete}
          provided={provided}
          snapshot={snapshot}
        >
          <InputFormAction
            item={item}
            onActionChanged={onActionChanged}
          ></InputFormAction>
        </ActionWrapperComponent>
      );

    case FormTemplates.DynamicallyExtensibleForm:
      return (
        <ActionWrapperComponent
          index={index}
          onDelete={onDelete}
          onFormNamechange={onFormNameChange}
          provided={provided}
          snapshot={snapshot}
        >
          <DynamicallyExtensibleFormInputAction
            item={item}
            onActionChanged={onActionChanged}
          ></DynamicallyExtensibleFormInputAction>
        </ActionWrapperComponent>
      );

    default:
      return (
        <ActionWrapperComponent
          index={index}
          onDelete={onDelete}
          onFormNamechange={onFormNameChange}
          provided={provided}
          snapshot={snapshot}
        >
          <CheckBoxFormAction item={item}></CheckBoxFormAction>
        </ActionWrapperComponent>
      );
  }
}
