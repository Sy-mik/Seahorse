import React, { useState } from "react";

export default function FormItemWrapper({ item, ...props }) {
  return (
    <div>
      {props.children}
      <hr></hr>
    </div>
  );
}
