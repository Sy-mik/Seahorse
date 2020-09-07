import React, { useState } from "react";
import { FormTemplates } from "../../../Constants/FormActions";
import GeneratedInputFormItem from "../GeneratedInputFormItem";
import GeneratedDynamicallyExtensibleFormItem from "../GeneratedDynamicallyExtensibleFormItem";
import ConditionalFormItem from "../ConditionalFormItem";

export default function FormItemFactory({
  state,
  action,
  item,
  onDataRefreshed,
}) {
  switch (action) {
    case FormTemplates.ConditionalForm:
      return (
        <ConditionalFormItem
          key={item.id}
          state={state}
          item={item}
          onDataRefreshed={onDataRefreshed}
        ></ConditionalFormItem>
      );
    case FormTemplates.LabelForm:
      return (
        <h4 style={{textAlign:'center', padding:5}}>{item.formName}</h4>
        );

    default:
      return (
        <GeneratedDynamicallyExtensibleFormItem
          key={item.id}
          onDataRefreshed={onDataRefreshed}
          item={item}
        ></GeneratedDynamicallyExtensibleFormItem>
      );
  }
}
