import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  const content = useRoutes(routes);

  return (
    <>
      <ThemeProvider theme={theme}>{content}</ThemeProvider>
    </>
  );
}

export default App;
