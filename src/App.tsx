import './App.css';

import TopButton from './component/Topbutton';
import Contents from './layout/Contents';
import { useState } from 'react';
import Toolbar from './layout/LeftToolbar';


function App() {
  const [isClose, setIsClose] = useState(false);

  return (
    <div className="App">
      {isClose ? '' :
        <div>
          <TopButton closeEvent={setIsClose} />
          <Toolbar />
        </div>}

      <div className='App-contents'>
        <Contents closeEvent={setIsClose} isClosed={isClose} />
      </div>
    </div >
  );
}

export default App;
