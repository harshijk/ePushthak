import './App.css';
import { Allrouter } from './routers/Allrouter';
import { Header , Footer } from './components';

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header/>
      <Allrouter/>
      <Footer/>
    </div>
  );
}

export default App;
