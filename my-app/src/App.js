import logo from './logo.svg';
import './App.css';
import output from "./output.json"
import tokens from "./tokens.json"
import {Button, ConfigProvider} from "antd";
import ContainerContent from "./ContainerContent";
function App() {

console.log(output)
console.log(tokens.token)

  return (
    <div className="App">
        <ConfigProvider theme={{token:tokens.token}}>
           <ContainerContent />
        </ConfigProvider>
    </div>
  );
}

export default App;
