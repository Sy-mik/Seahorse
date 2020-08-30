import React, { useState } from 'react';
import { FormActions } from '../../../Constants/FormActions';
import InputFormAction from '../InputFormAction';
import ActionWrapperComponent from './ActionWrapperComponent';
import CheckBoxFormAction from '../CheckBoxesFormAction';

export default function FormActionFactory({
  action,
  onDelete,
  provided,
  item,
  snapshot,
  index,
  onActionChanged,
}) {
  switch (action) {
    case FormActions.TextInputForm:
      return (
        <ActionWrapperComponent
          index={index}
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
    default:
      return (
        <ActionWrapperComponent
          index={index}
          onDelete={onDelete}
          provided={provided}
          snapshot={snapshot}
        >
          <CheckBoxFormAction item={item}></CheckBoxFormAction>
        </ActionWrapperComponent>
      );
  }
}
