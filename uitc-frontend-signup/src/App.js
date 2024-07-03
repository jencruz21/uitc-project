import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header'
import SignUpComponent from './components/SignUpComponent';

function App() {
  return (
    <div style={{margin: 0}}>
      <Header />
      <SignUpComponent />
    </div>
  );
}

export default App;
