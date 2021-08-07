export interface NumericInputProps {
  id: string;
  value: number | '';
  label: string;
  disabled?: boolean;
  onChange: (value: number) => void;
  range: readonly [number, number];
  step?: number;
  integer?: boolean;
}
