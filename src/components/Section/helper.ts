export const getTextColor = (
  isDarkMode: boolean,
  lightColor: string,
  darkColor: string,
): string => {
  return isDarkMode ? lightColor : darkColor;
};

// Constants
export const defaultColors = {
  light: '#f8f9fa',
  dark: '#212529',
};
