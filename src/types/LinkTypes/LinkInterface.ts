export interface LinkGroupProps {
  label?: string;
  links: LinkProps[];
}
export interface LinkProps {
  name: string;
  path: string;
  icon?: string;
  children?: LinkProps[];
}
