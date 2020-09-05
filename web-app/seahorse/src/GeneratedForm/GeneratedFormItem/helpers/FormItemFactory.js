import React, { useState } from "react";
import { FormTemplates } from "../../../Constants/FormActions";
import GeneratedInputFormItem from "../GeneratedInputFormItem";
import GeneratedDynamicallyExtensibleFormItem from "../GeneratedDynamicallyExtensibleFormItem";

export default function FormItemFactory({ action, item }) {
  switch (action) {
    case FormTemplates.DynamicallyExtensibleForm:
      return (
          <GeneratedDynamicallyExtensibleFormItem
            item={item}
          ></GeneratedDynamicallyExtensibleFormItem>
      );

    case FormTemplates.TextInputForm:
      return (
          <GeneratedInputFormItem item={item}></GeneratedInputFormItem>
      );

    default:
      return <GeneratedInputFormItem item={item}></GeneratedInputFormItem>;
  }
}
