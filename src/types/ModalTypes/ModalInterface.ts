export type ModalType = 'filled' | 'outlined' | 'ghost';
export type ModalMessageVariant = 'error' | 'success' | 'warning' | 'info';
export interface ModalProps {
  type?: ModalType;
  messageVariant: ModalMessageVariant;
  message: string;
  title: string;
  withActions?: boolean;
}
