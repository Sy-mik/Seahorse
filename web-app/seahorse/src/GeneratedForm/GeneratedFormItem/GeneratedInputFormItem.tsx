import React, { useState, useEffect, FunctionComponent } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { InputFormAction } from '../../Constants/FormActions';

interface GeneratedInputFormItemProps {
  item: any;
}

export const GeneratedInputFormItem: FunctionComponent<GeneratedInputFormItemProps> = ({
  item,
}) => {
  useEffect(() => {
    console.log(`item input type ${item.inputType}`);
  }, [item]);
  return (
    <div>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label className="text-center">{item.labelName}</Form.Label>
          <Form.Control type={item.inputType} placeholder="User input" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default GeneratedInputFormItem;
