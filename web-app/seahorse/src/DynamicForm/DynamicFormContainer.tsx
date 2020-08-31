import React, { FunctionComponent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DynamicFormComponent from './DynamicFormComponent';

interface DynamicFormContainerProps {}
const DynamicFormContainer: FunctionComponent<DynamicFormContainerProps> = () => {
  const [state, setState] = useState<any>([]);

  function addItem(itemType: any) {
    const uuid = uuidv4();
    const item = {
      id: uuid,
      actionType: itemType,
    };
    const joined = [...state, item];
    setState([...joined]);
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
