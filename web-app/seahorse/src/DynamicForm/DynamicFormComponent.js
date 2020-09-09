import React from "react";
import AvailableActionsContainer from "../ActionsPanel/AvailableActionsContainer";
import GeneratedFormViewComponent from "../GeneratedForm/GeneratedFormViewComponent";
import { Colors } from "../Constants/Theme";
import DroppableAreaContainer from "./DroppableAreaContainer";
import TreeViewComponent from "../FormTreeView/TreeViewComponent";
import { Tabs, Tab } from "react-bootstrap";

export default function DynamicFormComponent({
  state,
  setState,
  addItem,
  onDataRefreshed,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: 20,
        paddingLeft: 20,
      }}
    >
      <div style={{ flex: 3, marginRight: 20 }}>
        <AvailableActionsContainer
          onClick={addItem}
        ></AvailableActionsContainer>
      </div>

      <div style={{ flex: 4 }}>
        <DroppableAreaContainer
          state={state}
          onDataRefreshed={onDataRefreshed}
          setState={setState}
        ></DroppableAreaContainer>
      </div>

      <div
        style={{
          flex: 4,
          marginRight: 20,
          marginLeft: 20,
          backgroundColor: Colors.backgroundColor,
        }}
      >
        <Tabs defaultActiveKey="formView" id="uncontrolled-tab-example">
          <Tab eventKey="formView" title="Form">
            <GeneratedFormViewComponent
              onDataRefreshed={onDataRefreshed}
              state={state}
            ></GeneratedFormViewComponent>
          </Tab>
          <Tab eventKey="treeView" title="Tree">
            <TreeViewComponent formView={state}></TreeViewComponent>{" "}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
