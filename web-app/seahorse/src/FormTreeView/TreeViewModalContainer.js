import React from "react";
import { Modal, Button } from "react-bootstrap";
import TreeViewModal from "./TreeViewModal";
import TreeViewComponent from "./TreeViewComponent";

export default function TreeViewModalContainer({
  state,
  name,
  modalShow,
  setModalShow,
  onItemClick,
}) {
  return (
    <TreeViewModal show={modalShow} onHide={() => setModalShow(false)}>
      <p>Pick value to compare</p>
      <TreeViewComponent
        onItemClick={onItemClick}
        formView={state}
      ></TreeViewComponent>
    </TreeViewModal>
  );
}
