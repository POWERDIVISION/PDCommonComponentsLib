export type GroupButtonType = 'contained' | 'outlined' | 'text';

export type GroupButtonSize = 'small' | 'medium' | 'large';

export type GroupButtonProps = {
  name: string;
  isActive: boolean;
  clickHandler: () => void;
};

export interface GroupButtonInterface {
  type?: GroupButtonType;
  size?: GroupButtonSize;
  GroupButtonProps: GroupButtonProps[];
}
