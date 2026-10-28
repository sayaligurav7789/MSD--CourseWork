import { createTheme } from "@mui/material/styles";

// Design tokens — kept in one place so the palette/type scale can be tuned
// without touching component code.
const tokens = {
  navy950: "#061527",
  navy900: "#0b2545",
  navy800: "#123056",
  navy700: "#1b3d68",
  gold600: "#a9772e",
  gold500: "#b8862b",
  gold100: "#f1e4c8",
  paper: "#f6f4ee",
  paper2: "#efeae0",
  ink: "#1a1d23",
  inkSoft: "#4a5364",
  line: "#dedacd",
  lineStrong: "#c9c3b2",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: tokens.navy900, dark: tokens.navy950, light: tokens.navy700, contrastText: "#fff" },
    secondary: { main: tokens.gold500, dark: tokens.gold600, light: tokens.gold100, contrastText: tokens.navy950 },
    background: { default: tokens.paper, paper: "#ffffff" },
    text: { primary: tokens.ink, secondary: tokens.inkSoft },
    divider: tokens.line,
  },
  shape: { borderRadius: 3 },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: { fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, letterSpacing: "-0.01em" },
    h2: { fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, letterSpacing: "-0.01em" },
    h3: { fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, letterSpacing: "-0.01em" },
    h4: { fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600, letterSpacing: "-0.01em" },
    h5: { fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600 },
    h6: { fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 2, padding: "12px 24px" },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
      },
    },
  },
});

export default theme;
export { tokens };
