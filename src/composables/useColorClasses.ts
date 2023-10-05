import type {BaseColor, BaseColorVariant} from "@/types/BaseTypes/ColorTypes";


export function useColorClasses(props: { color:BaseColor; variant: BaseColorVariant }) {
  const background = {
    default: 'bg-primary-main-100 dark:bg-primary-main-200',
    primary: 'bg-primary-main-100 dark:bg-primary-main-200',
    secondary: 'bg-secondary-main-100 dark:bg-secondary-main-200',
    success: 'bg-success-main-100 dark:bg-success-main-200',
    info: 'bg-info-main-100 dark:bg-info-main-200',
    warning: 'bg-warning-main-100 dark:bg-warning-main-200',
    error: 'bg-error-main-100 dark:bg-error-main-200',
    white: 'bg-white',
    black: 'bg-black',
    'custom-primary': 'bg-primary-ghost-100 dark:bg-primary-ghost-200',
    'custom-secondary': 'bg-secondary-ghost-100 dark:bg-secondary-ghost-200',
    'custom-success': 'bg-success-ghost-100 dark:bg-success-ghost-200',
    'custom-info': 'bg-info-ghost-100 dark:bg-info-ghost-200',
    'custom-warning': 'bg-warning-ghost-100 dark:bg-warning-ghost-200',
    'custom-error': 'bg-error-ghost-100 dark:bg-error-ghost-200',
    'custom-default': 'bg-primary-ghost-100 dark:bg-primary-ghost-200',
  };
  const text = {
    default: 'text-textCol-primary-100 dark:text-textCol-primary-200',
    other: 'text-textCol-secondary-100 dark:text-textCol-secondary-200',
    disabled: 'text-textCol-disabled-100 dark:text-textCol-disabled-200',
    primary: 'text-primary-main-100 dark:text-primary-main-200',
    secondary: 'text-secondary-main-100 dark:text-secondary-main-200',
    success: 'text-success-main-100 dark:text-success-main-200',
    info: 'text-info-main-100 dark:text-info-main-200',
    warning: 'text-warning-main-100 dark:text-warning-main-200',
    error: 'text-error-main-100 dark:text-error-main-200',
    white: 'text-white',
    black: 'text-black',
    'custom-primary': 'text-primary-ghost-100 dark:text-primary-ghost-200',
    'custom-secondary': 'text-secondary-ghost-100 dark:text-secondary-ghost-200',
    'custom-success': 'text-success-ghost-100 dark:text-success-ghost-200',
    'custom-info': 'text-info-ghost-100 dark:text-info-ghost-200',
    'custom-warning': 'text-warning-ghost-100 dark:text-warning-ghost-200',
    'custom-error': 'text-error-ghost-100 dark:text-error-ghost-200',
    'custom-default': 'text-primary-ghost-100 dark:text-primary-ghost-200',
  };
  const border = {
    default: 'border-primary-main-100 dark:border-primary-main-200',
    primary: 'border-primary-main-100 dark:border-primary-main-200',
    secondary: 'border-secondary-main-100 dark:border-secondary-main-200',
    success: 'border-success-main-100 dark:border-success-main-200',
    info: 'border-info-main-100 dark:border-info-main-200',
    warning: 'border-warning-main-100 dark:border-warning-main-200',
    error: 'border-error-main-100 dark:border-error-main-200',
    white: 'border-white',
    black: 'border-black',
    'resting-primary': 'border-primary-resting-100 dark:border-primary-resting-200',
    'resting-secondary': 'border-secondary-resting-100 dark:border-secondary-resting-200',
    'resting-success': 'border-success-resting-100 dark:border-success-resting-200',
    'resting-info': 'border-info-resting-100 dark:border-info-resting-200',
    'resting-warning': 'border-warning-resting-100 dark:border-warning-resting-200',
    'resting-error': 'border-error-resting-100 dark:border-error-resting-200',
    'resting-default': 'border-primary-resting-100 dark:border-primary-resting-200',
  };
  const fill = {
    default: 'fill-textCol-primary-100 dark:fill-textCol-primary-200',
    primary: 'fill-primary-main-100 dark:fill-primary-main-200',
    secondary: 'fill-secondary-main-100 dark:fill-secondary-main-200',
    success: 'fill-success-main-100 dark:fill-success-main-200',
    info: 'fill-info-main-100 dark:fill-info-main-200',
    warning: 'fill-warning-main-100 dark:fill-warning-main-200',
    error: 'fill-error-main-100 dark:fill-error-main-200',
    white: 'fill-white',
    black: 'fill-black',
    'custom-primary': 'fill-primary-ghost-100 dark:fill-primary-ghost-200',
    'custom-secondary': 'fill-secondary-ghost-100 dark:fill-secondary-ghost-200',
    'custom-success': 'fill-success-ghost-100 dark:fill-success-ghost-200',
    'custom-info': 'fill-info-ghost-100 dark:fill-info-ghost-200',
    'custom-warning': 'fill-warning-ghost-100 dark:fill-warning-ghost-200',
    'custom-error': 'fill-error-ghost-100 dark:fill-error-ghost-200',
    'custom-default': 'fill-primary-ghost-100 dark:fill-primary-ghost-200',
  };

  const classes = {
    background: background[props.color as keyof typeof background],
    text: text[props.color  as keyof typeof text],
    border: border[props.color  as keyof typeof border],
    fill: fill[props.color  as keyof typeof fill],
  };

  return classes[props.variant];
}
