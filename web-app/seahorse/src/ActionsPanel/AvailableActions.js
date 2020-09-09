import {
  FormTemplates,
  InputFormTypes,
  ActionCategory,
} from "../Constants/FormActions";
import { AiOutlineForm, AiOutlineUser } from "react-icons/ai";
import { BsCheckBox, BsCalendar } from "react-icons/bs";
import { CgListTree } from "react-icons/cg";
import { GiCigarette, GiGears } from "react-icons/gi";

export const AvailableActions = [
  {
    name: "Form",
    type: FormTemplates.TextInputForm,
    inputType: InputFormTypes.Text,
    defaultAmountOfGeneratedItems: 1,
    icon: AiOutlineForm,
    category: ActionCategory.AvailableActions,
  },
  {
    name: "Checkbox",
    type: FormTemplates.CheckBoxesForm,
    inputType: InputFormTypes.CheckBox,
    defaultAmountOfGeneratedItems: 1,
    icon: BsCheckBox,
    category: ActionCategory.AvailableActions,
  },
  {
    name: "Date",
    type: FormTemplates.DateForm,
    inputType: InputFormTypes.Date,
    defaultAmountOfGeneratedItems: 1,
    icon: BsCalendar,
    category: ActionCategory.AvailableActions,
  },
  {
    name: "Label",
    type: FormTemplates.LabelForm,
    inputType: InputFormTypes.Date,
    defaultAmountOfGeneratedItems: 1,
    icon: "Label",
    category: ActionCategory.AvailableActions,
  },
  {
    name: "Conditional",
    type: FormTemplates.ConditionalForm,
    inputType: InputFormTypes.Text,
    defaultAmountOfGeneratedItems: 0,
    icon: CgListTree,
    category: ActionCategory.AvailableActions,
  },
  {
    name: "Dynamic form",
    type: FormTemplates.DynamicallyExtensibleForm,
    inputType: InputFormTypes.Text,
    defaultAmountOfGeneratedItems: 1,
    icon: GiGears,
    category: ActionCategory.AvailableActions,
  },
  {
    name: "Personal data",
    type: FormTemplates.PersonalDataFormTemplate,
    inputType: InputFormTypes.Text,
    defaultAmountOfGeneratedItems: 0,
    icon: AiOutlineUser,
    category: ActionCategory.Templates,
  },
  {
    name: "Addictions",
    type: FormTemplates.AddictionsFormTemplate,
    inputType: InputFormTypes.Text,
    defaultAmountOfGeneratedItems: 0,
    icon: GiCigarette,
    category: ActionCategory.Templates,
  },
];
