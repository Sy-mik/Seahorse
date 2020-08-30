import React, { useState } from 'react';
import { FormActions } from '../../../Constants/FormActions';
import GeneratedInputFormItem from '../GeneratedInputFormItem';

export default function FormItemFactory({ action, item }) {
  switch (action) {
    case FormActions.TextInputForm:
      return <GeneratedInputFormItem item={item}></GeneratedInputFormItem>;
    default:
      return <GeneratedInputFormItem item={item}></GeneratedInputFormItem>;
  }
}
