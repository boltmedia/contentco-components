import { defaultTheme } from 'evergreen-ui';

const theme = {
  ...defaultTheme,
  typography: {
    ...defaultTheme.typography,
    fontFamilies: {
      display:
        '"Cerebri Sans", "SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono:
        '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace"',
      ui:
        '"Cerebri Sans", "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
  }
};

export default theme;
