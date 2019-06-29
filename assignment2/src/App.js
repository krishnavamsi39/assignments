import React from 'react';

import './App.css';
import Strike from './components/strike'
import Circle ,{Rounded,Normal} from './components/images'
import All from './components/allmessages'
import Greet from './components/Greet'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Dropdown from './components/Dropdown'
import Disable from './components/Disable'
import Stopwatch from './components/Stopwatch'
import Comments from './components/Comments'
function App() {
  return (
   <>
  <Strike />
   <Normal />
      <Circle />
      <Rounded />
     <All />
      <Greet />
      <Radio />
    <Checkbox />
    <Dropdown />
    <Disable />
    <Stopwatch />
    <Comments />
    </>
  );
}

export default App;
