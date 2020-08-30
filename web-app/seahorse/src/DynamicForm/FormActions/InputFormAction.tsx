import React, { FunctionComponent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { AiOutlineForm } from 'react-icons/ai';
import { InputFormTypes } from '../../Constants/FormActions';

interface InputFormActionProps {
  item: any;
  onActionChanged: (any?: any) => void;
}

export const InputFormAction: FunctionComponent<InputFormActionProps> = ({
  item,
  onActionChanged,
}) => {
  function onTypeChange(e: any) {
    item.inputType = e.target.value;
    onActionChanged();
  }

  function onNameChange(e: any) {
    item.labelName = e.target.value;
    onActionChanged(e);
  }

  // @ts-ignore
  return (
    <div>
      <AiOutlineForm size={20} onClick={() => {}} />
      <Form>
        <Form.Group as={Row} controlId="formName">
          <Form.Label className="text-center" column sm={3}>
            Name
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              onChange={(e) => onNameChange(e)}
              type="text"
              placeholder="Label name"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formType">
          <Form.Label className="text-center" size="sm" column sm={3}>
            Type
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              onChange={(e) => onTypeChange(e)}
              as="select"
              defaultValue="Choose..."
            >
              <option>{InputFormTypes.Text}</option>
              <option>{InputFormTypes.Date}</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
export default InputFormAction;
