import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./providers/ContextProvider";
import RouterConfigs from "./routes/route-config";
import { AuthProvider } from "./context/useAuth";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AuthProvider>
          <RouterConfigs />
        </AuthProvider>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
