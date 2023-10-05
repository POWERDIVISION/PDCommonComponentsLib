export type InputFieldType = 'number' | 'text' | 'password'
export type InputType = 'standard' | 'outlined' | 'text'
export type InputSize = 'small' | 'medium'
export interface InputProps {
  type?:InputType,
  fieldType:InputFieldType,
  size?:InputSize,
  modelValue: string | number | null;
  placeholder?:string,
  label?:string,
  disable?: boolean;
}
