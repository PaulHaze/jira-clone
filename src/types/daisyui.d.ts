declare module 'daisyui/src/theming' {
  type ThemeColors = {
    transparent: string;
    current: string;
    primary: string;
    'primary-content': string;
    secondary: string;
    'secondary-content': string;
    accent: string;
    'accent-content': string;
    neutral: string;
    'neutral-content': string;
    'base-100': string;
    'base-200': string;
    'base-300': string;
    'base-content': string;
    info: string;
    'info-content': string;
    success: string;
    'success-content': string;
    warning: string;
    'warning-content': string;
    error: string;
    'error-content': string;
  };
  const theming: ThemeColors;
  export default theming;
}
