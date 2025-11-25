import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GreetingInSomali from "./components/GreetingInSomali";
import GreetingInEnglish from "./components/GreetingInEnglish";
import { Tiriye } from "./components/counter";
import ToggleTheme from "./components/ThemeSwitcher";
import Clicker from "./components/Clicker";
import Inputer from "./components/Inputer";
import WelcomeMessage from "./components/WelcomeMessage";
import DashBoard from "./components/DashBoard";
import Notification from "./components/Notification";
import NameList from "./components/NameList";
import NameForm from "./components/NameForm";
import UncontrolledComponent from "./components/UncontrolledComponent";
function App() {
  return (
    <>
      <NameForm/>
      <ToggleTheme/>
      <h1 style={{ color: "yellow" }}>
        This is Sumeya's first React Application.
      </h1>
      <UncontrolledComponent />
      <NameList/>
      <WelcomeMessage isLoggedIn={true} />
      <DashBoard isLoggedIn={true} />
      <Notification hasNewMessages={true} />

      <Inputer />
      <GreetingInSomali />
      <GreetingInEnglish />
      <Tiriye />
      <Clicker />

      <h1 style={{ color: "black", backgroundColor: "white", padding: "20px" }}>
        This is Sumeya's first React Application.
      </h1>
    </>
  );
}

export default App;
