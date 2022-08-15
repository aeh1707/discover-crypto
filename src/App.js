import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopCoins from './components/TopCoins';
import CoinInfo from './components/CoinInfo';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TopCoins />} />
          <Route path="/coininfo/:id" element={<CoinInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
