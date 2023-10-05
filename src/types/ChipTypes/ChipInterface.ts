export type ChipType = 'filled' | 'outlined' | 'ghost';
export type ChipVariant = 'default' | 'removable' | 'thumbnail' | 'removable_thumbnail';
export type ChipColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
export type ChipSize = 'small' | 'medium';
export interface ChipProps {
  type: ChipType;
  variant?: ChipVariant;
  color?: ChipColor;
  size?: ChipSize;
  disabled?: boolean;
  icon?: string;
}
