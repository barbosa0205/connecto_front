import { useState } from "react";
import AuthContextProvider from "./context/AuthContextProvider";
import SocketContextProvider from "./context/SocketContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <SocketContextProvider>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </SocketContextProvider>
  );
}

export default App;
