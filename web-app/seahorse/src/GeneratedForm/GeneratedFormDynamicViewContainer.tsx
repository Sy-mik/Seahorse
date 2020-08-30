import React, { useState, useEffect, FunctionComponent } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import FormItemFactory from './GeneratedFormItem/helpers/FormItemFactory';

interface GeneratedFormDynamicViewContainerProps {
  state: any[];
}
export const GeneratedFormDynamicViewContainer: FunctionComponent<GeneratedFormDynamicViewContainerProps> = ({
  state,
}) => {
  return (
    <div>
      {state.map((item) => (
        <FormItemFactory
          key={item.id}
          action={item.actionType}
          item={item}
        ></FormItemFactory>
      ))}
    </div>
  );
};
export default GeneratedFormDynamicViewContainer;
