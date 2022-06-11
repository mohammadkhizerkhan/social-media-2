import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819",
  },
};
const borderRadius = {
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
}
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
// const breakpoints = {
//   sm: '550px',
//   md: '768px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// }

const theme = extendTheme(
  {
    colors,
    config,
    borderRadius,
    // breakpoints,
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components:["checkbox"]
  })
);

export default theme;
