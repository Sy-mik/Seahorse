import React from "react";
import { AiOutlineForm, AiOutlineUser } from "react-icons/ai";
import { GiCigarette, GiGears } from "react-icons/gi";
import { CgListTree } from "react-icons/cg";
import { BsCheckBox, BsCalendar } from "react-icons/bs";

export function IconsFactory({ iconName, iconSize }) {
  switch (iconName) {
    case AiOutlineForm:
      return <AiOutlineForm size={iconSize} />;
    case BsCheckBox:
      return <BsCheckBox size={iconSize} />;
    case BsCalendar:
      return <BsCalendar size={iconSize} />;
    case "Label":
      return <>Txt</>;
    case CgListTree:
      return <CgListTree size={iconSize} />;
    case AiOutlineUser:
      return <AiOutlineUser size={iconSize} />;
    case GiCigarette:
      return <GiCigarette size={iconSize} />;
    case GiGears:
      return <GiGears size={iconSize} />;
    default:
      return <AiOutlineForm size={iconSize} />;
  }
}
