import "./App.css";

import { Outlet } from "react-router-dom";
import { getCurrentUser } from "./utils/currentUser";
import { Header } from "./Components/Header/Header";

function App() {
  const currentUser = getCurrentUser();

  return (
    <>
      <Header currentUser={currentUser} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
