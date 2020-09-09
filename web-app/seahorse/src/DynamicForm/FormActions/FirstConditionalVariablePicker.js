import React, { useState } from "react";
import { Button } from "react-bootstrap";
import TreeViewModalContainer from "../../FormTreeView/TreeViewModalContainer";
export function FirstConditionalVariablePicker({
  state,
  modalShow,
  setModalShow,
  pickedVariableName,
  onItemClick,
}) {
  return (
    <div>
      <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
        {pickedVariableName}
      </Button>
      <TreeViewModalContainer
        state={state}
        modalShow={modalShow}
        setModalShow={setModalShow}
        onItemClick={onItemClick}
      ></TreeViewModalContainer>
    </div>
  );
}
