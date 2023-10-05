import type {BaseColor} from "@/types/BaseTypes/ColorTypes";

export type BaseButtonVariant =
  | 'default'
  | 'left_icon'
  | 'right_icon'
  | 'fab_extended'
  | 'fab_round'
  | 'icon_button';

export type VariantButtonType = 'outlined' | 'text';
export type VariantButtonVariant = 'default' | 'left_icon' | 'right_icon';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface BaseButtonProps {
  variant?: BaseButtonVariant;
  color?: BaseColor
  size?: ButtonSize;
  disabled?: boolean;
  icon?: string;
}
export interface VariantButtonProps {
  type: VariantButtonType;
  variant?: VariantButtonVariant;
  color?: BaseColor;
  size?: ButtonSize;
  disabled?: boolean;
  icon?: string;
}
