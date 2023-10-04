import {
  LeftArrow,
  Plus,
  Star,
  RightArrow,
  Check,
  User,
  Search,
  Close,
  CircleClose,
  Error,
  Info,
  Warning,
  Success,
  ArrowDownFilled,
  DarkMode,
  LightMode,
  Notification,
  Grow,
  Logout,
} from '../components/atoms/SVG';

type Icon = 'leftArrow' | 'star' | 'plus';
export const useIcon = (icon: string) => {
  const icons = {
    leftArrow: LeftArrow,
    star: Star,
    plus: Plus,
    rightArrow: RightArrow,
    check: Check,
    user: User,
    search: Search,
    close: Close,
    circleClose: CircleClose,
    error: Error,
    info: Info,
    warning: Warning,
    success: Success,
    arrowDownFilled: ArrowDownFilled,
    darkMode: DarkMode,
    lightMode: LightMode,
    notification: Notification,
    grow: Grow,
    logout: Logout,
  };

  return icons[icon as Icon] || icons.leftArrow;
};
