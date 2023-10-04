type Color =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'white'
  | 'black'
  | 'ghostCol-primary'
  | 'ghostCol-secondary'
  | 'ghostCol-success'
  | 'ghostCol-info'
  | 'ghostCol-warning'
  | 'ghostCol-error'
  | 'ghostCol-default'
  | 'ghostCol-primary-100'
  | 'ghostCol-secondary-100'
  | 'ghostCol-success-100'
  | 'ghostCol-info-100'
  | 'ghostCol-warning-100'
  | 'ghostCol-error-100';
type Variant = 'background' | 'text' | 'border' | 'fill';
export function useColorClasses(props: { color: string; variant: Variant }) {
  const background = {
    default: 'bg-gray-100',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    info: 'bg-info',
    warning: 'bg-warning',
    error: 'bg-error',
    white: 'bg-white',
    black: 'bg-black',
    'ghostCol-primary': 'bg-ghostCol-primary-50',
    'ghostCol-primary-100': 'bg-ghostCol-primary-100',
    'ghostCol-secondary': 'bg-ghostCol-secondary-50',
    'ghostCol-secondary-100': 'bg-ghostCol-secondary-100',
    'ghostCol-success': 'bg-ghostCol-success-50',
    'ghostCol-success-100': 'bg-ghostCol-success-100',
    'ghostCol-info': 'bg-ghostCol-info-50',
    'ghostCol-info-100': 'bg-ghostCol-info-100',
    'ghostCol-warning': 'bg-ghostCol-warning-50',
    'ghostCol-warning-100': 'bg-ghostCol-warning-100',
    'ghostCol-error': 'bg-ghostCol-error-50',
    'ghostCol-error-100': 'bg-ghostCol-error-100',
    'ghostCol-default': 'bg-gray-50',
  };
  const text = {
    default: 'text-gray-300',
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    info: 'text-info',
    warning: 'text-warning',
    error: 'text-error',
    white: 'text-white',
    black: 'text-black',
    'ghostCol-primary': 'text-ghostCol-primary-50',
    'ghostCol-primary-100': 'text-ghostCol-primary-100',
    'ghostCol-secondary': 'text-ghostCol-secondary-50',
    'ghostCol-secondary-100': 'text-ghostCol-secondary-100',
    'ghostCol-success': 'text-ghostCol-success-50',
    'ghostCol-success-100': 'text-ghostCol-success-100',
    'ghostCol-info': 'text-ghostCol-info-50',
    'ghostCol-info-100': 'text-ghostCol-info-100',
    'ghostCol-warning': 'text-ghostCol-warning-50',
    'ghostCol-warning-100': 'text-ghostCol-warning-100',
    'ghostCol-error': 'text-ghostCol-error-50',
    'ghostCol-error-100': 'text-ghostCol-error-100',
    'ghostCol-default': 'text-gray-50',
  };
  const border = {
    default: 'border-gray-100',
    primary: 'border-primary',
    secondary: 'border-secondary',
    success: 'border-success',
    info: 'border-info',
    warning: 'border-warning',
    error: 'border-error',
    white: 'border-white',
    black: 'border-black',
    'ghostCol-primary': 'border-ghostCol-primary-50',
    'ghostCol-primary-100': 'border-ghostCol-primary-100',
    'ghostCol-secondary': 'border-ghostCol-secondary-50',
    'ghostCol-secondary-100': 'border-ghostCol-secondary-100',
    'ghostCol-success': 'border-ghostCol-success-50',
    'ghostCol-success-100': 'border-ghostCol-success-100',
    'ghostCol-info': 'border-ghostCol-info-50',
    'ghostCol-info-100': 'border-ghostCol-info-100',
    'ghostCol-warning': 'border-ghostCol-warning-50',
    'ghostCol-warning-100': 'border-ghostCol-warning-100',
    'ghostCol-error': 'border-ghostCol-error-50',
    'ghostCol-error-100': 'border-ghostCol-error-100',
    'ghostCol-default': 'border-gray-50',
  };
  const fill = {
    default: 'fill-default',
    primary: 'fill-primary',
    secondary: 'fill-secondary',
    success: 'fill-success',
    info: 'fill-info',
    warning: 'fill-warning',
    error: 'fill-error',
    white: 'fill-white',
    black: 'fill-black',
    'ghostCol-primary': 'fill-ghostCol-primary-50',
    'ghostCol-primary-100': 'fill-ghostCol-primary-100',
    'ghostCol-secondary': 'fill-ghostCol-secondary-50',
    'ghostCol-secondary-100': 'fill-ghostCol-secondary-100',
    'ghostCol-success': 'fill-ghostCol-success-50',
    'ghostCol-success-100': 'fill-ghostCol-success-100',
    'ghostCol-info': 'fill-ghostCol-info-50',
    'ghostCol-info-100': 'fill-ghostCol-info-100',
    'ghostCol-warning': 'fill-ghostCol-warning-50',
    'ghostCol-warning-100': 'fill-ghostCol-warning-100',
    'ghostCol-error': 'fill-ghostCol-error-50',
    'ghostCol-error-100': 'fill-ghostCol-error-100',
    'ghostCol-default': 'fill-gray-50',
  };
  const classes = {
    background: background[props.color as Color],
    text: text[props.color as Color],
    border: border[props.color as Color],
    fill: fill[props.color as Color],
  };

  return classes[props.variant];
}
