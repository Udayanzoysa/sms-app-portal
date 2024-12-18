import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./providers/ContextProvider";
import RouterConfigs from "./routes/route-config";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <RouterConfigs />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
