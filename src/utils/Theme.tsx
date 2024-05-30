import React from "react"
import { ThemeProvider, createTheme } from "@mui/material"
import { green, purple } from "@mui/material/colors";

type Props = {
  children: React.ReactNode
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
