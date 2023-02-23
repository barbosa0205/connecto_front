import { useState } from "react";
import AuthContextProvider from "./context/AuthContextProvider";
import ChatContextProvider from "./context/ChatContextProvider";
import PushNotificationProvider from "./context/PushNotificationProvider";
import SocketContextProvider from "./context/SocketContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <PushNotificationProvider>
      <ChatContextProvider>
        <SocketContextProvider>
          <AuthContextProvider>
            <AppRouter />
          </AuthContextProvider>
        </SocketContextProvider>
      </ChatContextProvider>
    </PushNotificationProvider>
  );
}

export default App;
