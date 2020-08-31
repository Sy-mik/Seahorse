import React, { FunctionComponent, useState } from 'react';
import { FormActions } from '../../../Constants/FormActions';
import GeneratedInputFormItem from '../GeneratedInputFormItem';

interface FormItemFactoryProps {
  action: any;
  item: any;
}

export const FormItemFactory: FunctionComponent<FormItemFactoryProps> = ({
  action,
  item,
}) => {
  switch (action) {
    case FormActions.TEXT_INPUT_FORM:
      return <GeneratedInputFormItem item={item}></GeneratedInputFormItem>;
    default:
      return <GeneratedInputFormItem item={item}></GeneratedInputFormItem>;
  }
};

export default FormItemFactory;
