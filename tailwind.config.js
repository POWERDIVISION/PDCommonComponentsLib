export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      // colors

      // 100 - for light mode
      // 200 - for dark mode

      // base common colors
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      // base colors
      primary: {
        main: { 100: '#CE2026', 200: '#CE2026' },
        'alter-light': { 100: '#DF393E', 200: '#DF393E' },
        'alter-dark': { 100: '#870B0F', 200: '#870B0F' },
        'hover-bg': { 100: '#CE2026', 200: '#CE2026' },
        ghost: { 100: '#CE202614', 200: '#CE202614' },
        resting: { 100: '#CE202680', 200: '#CE202680' },
      },
      secondary: {
        main: { 100: '#8A8D93', 200: '#8A8D93' },
        'alter-light': { 100: '#9C9FA4', 200: '#9C9FA4' },
        'alter-dark': { 100: '#4D5056', 200: '#4D5056' },
        'hover-bg': { 100: '#777B82', 200: '#777B82' },
        ghost: { 100: '#8A8D9314', 200: '#8A8D9314' },
        resting: { 100: '#8A8D9380', 200: '#8A8D9380' },
      },
      info: {
        main: { 100: '#16B1FF', 200: '#16B1FF' },
        'alter-light': { 100: '#32BAFF', 200: '#32BAFF' },
        'alter-dark': { 100: '#0E71A3', 200: '#0E71A3' },
        'hover-bg': { 100: '#139CE0', 200: '#139CE0' },
        ghost: { 100: '#32BAFF14', 200: '#32BAFF14' },
        resting: { 100: '#32BAFF80', 200: '#32BAFF80' },
      },
      success: {
        main: { 100: '#56CA00', 200: '#56CA00' },
        'alter-light': { 100: '#6AD01F', 200: '#6AD01F' },
        'alter-dark': { 100: '#378100', 200: '#378100' },
        'hover-bg': { 100: '#4CB200', 200: '#4CB200' },
        ghost: { 100: '#56CA0014', 200: '#56CA0014' },
        resting: { 100: '#56CA0080', 200: '#56CA0080' },
      },
      warning: {
        main: { 100: '#FFB400', 200: '#FFB400' },
        'alter-light': { 100: '#FFB547', 200: '#FFB547' },
        'alter-dark': { 100: '#A37300', 200: '#A37300' },
        'hover-bg': { 100: '#E09E00', 200: '#E09E00' },
        ghost: { 100: '#FFB40014', 200: '#FFB40014' },
        resting: { 100: '#FFB40080', 200: '#FFB40080' },
      },
      error: {
        main: { 100: '#FF4C51', 200: '#FF4C51' },
        'alter-light': { 100: '#FF6166', 200: '#FF6166' },
        'alter-dark': { 100: '#A33134', 200: '#A33134' },
        'hover-bg': { 100: '#E04347', 200: '#E04347' },
        ghost: { 100: '#FF4C5114', 200: '#FF4C5114' },
        resting: { 100: '#FF4C5180', 200: '#FF4C5180' },
      },
      //   text
      textCol: {
        primary: {
          100: '#3A3541DE',
          200: '#FFFFFFDE',
        },
        secondary: {
          100: '#3A3541AD',
          200: '#FFFFFFDE',
        },
        disabled: {
          100: '#3A354161',
          200: '#FFFFFFDE',
        },
      },
      //   actions
      actions: {
        active: {
          100: '#3A35418A',
          200: '#E7E3FC8A',
        },
        hover: {
          100: '#3A35410A',
          200: '#E7E3FC0A',
        },
        selected: {
          100: '#3A354114',
          200: '#E7E3FC14',
        },
        disabled: {
          100: '#3A354142',
          200: '#E7E3FC42',
        },
        'disabled-bg': {
          100: '#3A35411F',
          200: '#E7E3FC1F',
        },
        focus: {
          100: '#3A35411F',
          200: '#E7E3FC1F',
        },
      },
      // backgrounds
      bgCol: {
        main: {
          100: '#F4F5FA',
          200: '#222222',
        },
        surface: {
          100: '#FFFFFF',
          200: '#333333',
        },
        top: {
          100: '#F9FAFC',
          200: '#444444',
        },
      },
      //   other
      other: {
        divider: {
          100: '#3A35411F',
          200: '#E7E3FC1F',
        },
        'outline-border': {
          100: '#3A35413B',
          200: '#E7E3FC3B',
        },
        'input-line': {
          100: '#3A354138',
          200: '#E7E3FC38',
        },
        overlay: {
          100: '#3A354180',
          200: '#AB2025DE',
        },
        'snackbar-bg': {
          100: '#212121',
          200: '#FFFFFF',
        },
        'body-bg': {
          100: '#F4F5FA',
          200: '#222222',
        },
        card: {
          100: '#FFFFFF',
          200: '#151515',
        },
      },
      // custom BG
      custom: {
        primary: {
          100: '#F3F3F3',
          200: '#3D3260',
        },
        secondary: {
          100: '#F1F1F2',
          200: '#3C3954',
        },
        info: {
          100: '#E4F2FE',
          200: '#2F3A5F',
        },
        success: {
          100: '#EAF5EA',
          200: '#343D4C',
        },
        warning: {
          100: '#FDEDE1',
          200: '#4A3D42',
        },
        error: {
          100: '#FEE8E7',
          200: '#483048',
        },
      },
      gradient: {
        primary: {
          100: '#F28589',
          200: '#2E1819',
        },
      },
    },

    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'serif'],
      mons: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
