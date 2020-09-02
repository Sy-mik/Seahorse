import React, { useState } from "react";
import { FormActions } from "../../../Constants/FormActions";
import GeneratedInputFormItem from "../GeneratedInputFormItem";
import GeneratedDynamicallyExtensibleFormItem from "../GeneratedDynamicallyExtensibleFormItem";

export default function FormItemFactory({ action, item }) {
  switch (action) {
    case FormActions.DynamicallyExtensibleForm:
      return (
          <GeneratedDynamicallyExtensibleFormItem
            item={item}
          ></GeneratedDynamicallyExtensibleFormItem>
      );

    case FormActions.TextInputForm:
      return (
          <GeneratedInputFormItem item={item}></GeneratedInputFormItem>
      );

    default:
      return <GeneratedInputFormItem item={item}></GeneratedInputFormItem>;
  }
}
