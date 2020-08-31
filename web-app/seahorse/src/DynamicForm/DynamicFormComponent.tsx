import React, { FunctionComponent } from 'react';
import AvailableActionsContainer from '../ActionsPanel/AvailableActionsContainer';
import GeneratedFormDynamicViewContainer from '../GeneratedForm/GeneratedFormDynamicViewContainer';
import { Colors } from '../Constants/Theme';
import DroppableAreaContainer from './DroppableAreaContainer';
import './DynamicFormComponent.css';

interface DynamicFormComponentProps {
  state: any;
  setState: (state: any) => void;
  addItem: (item: any) => void;
}

export const DynamicFormComponent: FunctionComponent<DynamicFormComponentProps> = ({
  state,
  setState,
  addItem,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
      }}
    >
      <div style={{ flex: 4 }}>
        <DroppableAreaContainer
          state={state}
          setState={setState}
        ></DroppableAreaContainer>
      </div>

      <div className="generated-form-dynamic-view-container ">
        <GeneratedFormDynamicViewContainer
          state={state}
        ></GeneratedFormDynamicViewContainer>
      </div>
      <div style={{ flex: 3 }}>
        <AvailableActionsContainer
          onClick={addItem}
        ></AvailableActionsContainer>
      </div>
    </div>
  );
};
export default DynamicFormComponent;
