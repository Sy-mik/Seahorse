import React, { FunctionComponent } from 'react';
import { AiOutlineForm } from 'react-icons/ai';
import { BsCheckBox } from 'react-icons/bs';
import './AvailableActionsContainer.css';

import { Button } from 'react-bootstrap';
import { Colors } from '../Constants/Theme';
import { FormActions } from '../Constants/FormActions';

interface AvailableActionsProps {
  onClick: any;
}

export const AvailableActionsContainer: FunctionComponent<AvailableActionsProps> = (
  onClick
) => {
  const spaceBetweenItems = 5;

  return (
    //   ugly as hell
    <div>
      <div style={{ background: Colors.containerBackground, padding: 20 }}>
        <h1>Available Actions</h1>

        <div
          style={{
            display: 'flex',
            marginLeft: spaceBetweenItems,
            flexWrap: 'wrap',
          }}
        >
          <div className="flex-item">
            <Button
              variant="outline-primary"
              size="lg"
              type="button"
              onClick={() => onClick(FormActions.TextInputForm)}
            >
              <AiOutlineForm size={25} />
            </Button>
            <h6 style={{ paddingTop: 5 }}>Input form</h6>
          </div>

          <div className="flex-item">
            <Button
              variant="outline-primary"
              size="lg"
              type="button"
              onClick={() => onClick(null)}
            >
              <BsCheckBox size={25} />
            </Button>
            <h6 style={{ paddingTop: 5 }}>Checkboxes</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AvailableActionsContainer;
