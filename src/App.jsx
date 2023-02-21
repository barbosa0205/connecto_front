import { useState } from "react";
import AuthContextProvider from "./context/AuthContextProvider";
import ChatContextProvider from "./context/ChatContextProvider";
import SocketContextProvider from "./context/SocketContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChatContextProvider>
      <SocketContextProvider>
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
      </SocketContextProvider>
    </ChatContextProvider>
  );
}

export default App;
