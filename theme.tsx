// theme.ts

// 1. Import `extendTheme` function and `ThemeConfig` type directly
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Define a custom type that extends ThemeConfig and includes the additional properties
interface CustomThemeConfig extends ThemeConfig {
  initialColorMode: string;
  useSystemColorMode: boolean;
}

// 3. Define your color mode config
const config: CustomThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 4. Extend the theme
const theme = extendTheme({ config });

export default theme;
