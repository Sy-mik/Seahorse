import React, { FunctionComponent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DynamicFormComponent from './DynamicFormComponent';

interface DynamicFormContainerProps {}

export const DynamicFormContainer: FunctionComponent<DynamicFormContainerProps> = () => {
  const [state, setState] = useState([]);

  function addItem(itemType: any): void {
    const uuid = uuidv4();
    const item = {
      id: uuid,
      actionType: itemType,
    };
    const joined = [...state, item];
    // setState([...joined]); TODO
  }

  return (
    <DynamicFormComponent
      state={state}
      setState={setState}
      addItem={addItem}
    ></DynamicFormComponent>
  );
};

export default DynamicFormContainer;
