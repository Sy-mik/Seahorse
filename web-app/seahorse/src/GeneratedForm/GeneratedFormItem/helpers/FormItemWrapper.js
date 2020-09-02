import React, { useState } from "react";

export default function FormItemWrapper({ item, ...props }) {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>{item.formName}</h1>
      {props.children}
      <hr></hr>
    </div>
  );
}
