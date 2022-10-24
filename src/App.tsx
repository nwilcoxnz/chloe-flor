import "./App.css";
import Logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-teal-300 to-lime-300 h-screen">
      <div className="flex items-center justify-center h-screen flex-col">
        <img src={Logo} className="h-16 sm:h-32" alt="Chloe Flor Logo" />
        <div>Coming soon</div>
      </div>
    </div>
  );
};

export default App;
