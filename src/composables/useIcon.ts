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
  Download,
  Mappack,
  Solution,
  DTC,
  Minus,
  Settings,
  EyeOff,
  Eye,
  MenuOpenSVG,
} from '../../src/components/atoms/SVG';

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
    download: Download,
    mappack: Mappack,
    solution: Solution,
    dtc: DTC,
    minus: Minus,
    settings: Settings,
    eye: Eye,
    eyeOff: EyeOff,
    menuOpen: MenuOpenSVG,
  };

  return icons[icon as Icon] || icons.leftArrow;
};

export const useTypedIcon = (val: string) => {
  const temp = val.toLowerCase();

  if (temp.includes('dtc')) {
    return useIcon('dtc');
  } else if (temp.includes('mappack')) {
    return useIcon('mappack');
  } else if (temp.includes('solution')) {
    return useIcon('solution');
  } else {
    return useIcon('dtc');
  }
};
