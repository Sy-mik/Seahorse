import React, { useState, useRef } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";

function FirstConditionelPopoverPicker() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button
        variant="outline-secondary"
        onClick={handleClick}
      >
        Variable
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">Existing variables</Popover.Title>
          <Popover.Content>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
export default function ConditionalFormAction({
  state,
  item,
  onActionChanged,
}) {
  return (
    <div>
      <div style={{display:'flex'}}>
        <p style={{padding:5}}> If </p>
        <FirstConditionelPopoverPicker></FirstConditionelPopoverPicker>
      </div>
    </div>
  );
}
