export interface RadioButtonOption {
  id: string;
  label: string;
}

export interface RadioButtonsProps {
  title: string;
  checkedId: string;
  options: RadioButtonOption[];
  onChange: (id: string) => void;
}
