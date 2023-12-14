
import './App.css';

import AppRoutes from './routes/AppRoutes.jsx';
import CountProvider from './counterContext/CountProvider.jsx'
function App() {


  return (
    <div className="App-header">
    <CountProvider> 
    <AppRoutes/>
    </CountProvider>
    </div>
  );
}

export default App;
