import "./App.css";
import IrfanShah from "./Components/IRFANSHAH/IrfanShah";
import Testing from "./Components/KHWAJA/Testing";
import Sameer from "./Components/Sameer/Sameer";
import Mukassar from "./Components/MUKASSAR/Mukassar";
import Amena from "./Components/AMENA/Amena";
import AfrozSir from "./Components/AFROZ_SIR/AfrozSir";
import ResolveConflict from "./Components/ResolveConflict/ResolveConflict";
function App() {
  return (
    <div className="App">
      <Testing />
      <ResolveConflict/>
      <Sameer/>
      <Mukassar/>
      <IrfanShah />
      <Amena />
      <AfrozSir />
      

    </div>
  );
}
export default App;
