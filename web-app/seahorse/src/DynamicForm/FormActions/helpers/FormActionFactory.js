import React, { useState } from "react";
import { FormTemplates, InputFormTypes } from "../../../Constants/FormActions";
import InputFormAction from "../InputFormAction";
import ActionWrapperComponent from "./ActionWrapperComponent";
import CheckBoxFormAction from "../CheckBoxesFormAction";
import DynamicallyExtensibleFormInputAction from "../ExtensibleFormInputAction";
import ConditionalFormAction from "../ConditionalFormAction";
import ActionFormContainer from "../ActionFormContainer";
import FormNameContainer from "./FormNameContainer";

export default function FormActionFactory({
  action,
  onDelete,
  provided,
  item,
  snapshot,
  index,
  state,
  onDataRefreshed,
}) {
  function onFormNameChange(name) {
    item.formName = name;
    onDataRefreshed();
  }

  switch (action) {
    case FormTemplates.TextInputForm:
      return (
        <ActionWrapperComponent
          index={index}
          onDelete={onDelete}
          onFormNamechange={onFormNameChange}
          provided={provided}
          snapshot={snapshot}
          name="Text form"
          item={item}
        >
          <ActionFormContainer
            item={item}
            onActionChanged={onDataRefreshed}
            type={InputFormTypes.Text}
          ></ActionFormContainer>
        </ActionWrapperComponent>
      );

    case FormTemplates.LabelForm:
      return (
        <ActionWrapperComponent
          index={index}
          onDelete={onDelete}
          onFormNamechange={onFormNameChange}
          provided={provided}
          snapshot={snapshot}
          name="Label"
          item={item}
        >
          <FormNameContainer
            name={item.formName}
            onFormNamechange={onFormNameChange}
          ></FormNameContainer>
        </ActionWrapperComponent>
      );

    case FormTemplates.CheckBoxesForm:
      return (
        <ActionWrapperComponent
          index={index}
          onDelete={onDelete}
          onFormNamechange={onFormNameChange}
          provided={provided}
          snapshot={snapshot}
          name="Checkbox"
          item={item}
        >
          <ActionFormContainer
            item={item}
            onActionChanged={onDataRefreshed}
            type={InputFormTypes.CheckBox}
          ></ActionFormContainer>
        </ActionWrapperComponent>
      );

    case FormTemplates.DateForm:
      return (
        <ActionWrapperComponent
          index={index}
          onDelete={onDelete}
          onFormNamechange={onFormNameChange}
          provided={provided}
          snapshot={snapshot}
          name="Date"
          item={item}
        >
          <ActionFormContainer
            item={item}
            onActionChanged={onDataRefreshed}
            type={InputFormTypes.Date}
          ></ActionFormContainer>
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
          name="Dynamic"
          item={item}
        >
          <DynamicallyExtensibleFormInputAction
            item={item}
            onActionChanged={onDataRefreshed}
          ></DynamicallyExtensibleFormInputAction>
        </ActionWrapperComponent>
      );

    case FormTemplates.ConditionalForm:
      return (
        <ActionWrapperComponent
          index={index}
          onDelete={onDelete}
          onFormNamechange={onFormNameChange}
          provided={provided}
          snapshot={snapshot}
          item={item}
          name="Conditional"
          hideInputName={true}
        >
          <ConditionalFormAction
            item={item}
            onActionChanged={onDataRefreshed}
            onFormNamechange={onFormNameChange}
            state={state}
          ></ConditionalFormAction>
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
          item={item}
          hideInputName={true}
        ></ActionWrapperComponent>
      );
  }
}
