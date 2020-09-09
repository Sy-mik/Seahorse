import React, { memo, useState, useEffect } from "react";
import { useSpring, a } from "react-spring";
import { useMeasure, usePrevious } from "./helpers";
import { Frame, Title, Content, toggle } from "./styles";
import * as Icons from "./icons";

const Tree = memo(({ children, name, style, defaultOpen = false, onClick }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  });
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Minus"}SquareO`];
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title onClick={onClick} style={style}>
        {name}
      </Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  );
});

const TreeViewComponent = ({ formView, onItemClick }) => {
  console.log(formView)
  return (
    <>
      {formView.map((el) => (
        <Tree key={el.id} name={el.actionType} defaultOpen>
          <Tree name={`Inputs:`} defaultOpen>
            {el.inputs?.map((formIput) => (
              <Tree
                key={formIput.key}
                name={`${formIput.name}`}
                style={{ color: "#37ceff", cursor: "pointer" }}
                onClick={() => onItemClick(formIput)}
              >
                <Tree name={`key: ${formIput.key}`} />
                <Tree name={`Type: ${formIput.type}`} />
                <Tree name={`Value: ${formIput.value}`} />
              </Tree>
            ))}
          </Tree>
        </Tree>
      ))}
    </>
  );
};
export default TreeViewComponent;
