import React, { FunctionComponent } from 'react';
import { FormActions } from '../../../Constants/FormActions';
import InputFormAction from '../InputFormAction';
import ActionWrapperComponent from './ActionWrapperComponent';
import { CheckBoxFormAction } from '../CheckBoxesFormAction';

interface FormActionFactoryProps {
  action: FormActions;
  onDelete: (any: any) => void;
  provided: any;
  item: any;
  snapshot: any;
  index: number;
  onActionChanged: (any: any) => void;
}
export const FormActionFactory: FunctionComponent<FormActionFactoryProps> = ({
  action,
  onDelete,
  provided,
  item,
  snapshot,
  index,
  onActionChanged,
}) => {
  switch (action) {
    case FormActions.TEXT_INPUT_FORM:
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
};

export default FormActionFactory;
