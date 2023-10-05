export type SelectboxType = 'standard' | 'outlined' | 'text'
export type SelectboxSize = 'small' | 'medium'
export type SelecboxItem = {
  id:string,
  value:string | number,
}
export interface SelectboxProps {
  modelValue: SelecboxItem[] | [];
  type:SelectboxType,
  items:SelecboxItem[],
  single?:boolean,
  size?:SelectboxSize,
  placeholder?:string,
  label?:string,
  disable?: boolean;
}
