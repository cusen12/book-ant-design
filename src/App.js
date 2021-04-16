import logo from './logo.svg';
import './App.css';
import { Typography } from 'antd';

const { Title } = Typography;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title type="secondary">Hello Antd Design</Title>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
