import {moderateScale} from 'react-native-size-matters'

export default {
  colors: {
    purple: '#8284FA',
    purple_dark: '#5E60CE',
    blue: '#4EA8DE',
    blue_dark: '#1E6F9F',
    gray_100: '#F2F2F2',
    gray_200: '#D9D9D9',
    gray_300: '#808080',
    gray_400: '#333333',
    gray_500: '#262626',
    gray_600: '#1A1A1A',
    gray_700: '#0D0D0D',
    danger: '#E25858',
    transparent: 'transparent',
  },
  font_family: {
    body: 'Inter_400Regular',
    heding: 'Inter_700Bold',
  },
  font_size: {
    sm: moderateScale(12),
    md: moderateScale(14),
    lg: moderateScale(16),
    xlg: moderateScale(32),
  },
  paddind: {
    xs: moderateScale(4),
    sm: moderateScale(12),
    md: moderateScale(14),
    lg: moderateScale(16),
  },
  borderWidths: {
    '0': 0,
    '1': 1,
    '2': 2,
    '4': 4,
    '8': 8,
  },
} as const;
