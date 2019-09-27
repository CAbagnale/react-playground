import React from 'react';
import './App.css';
import './composition/Split.css';
import Tooltip from './composition/Tooltip';
/* import Split from './composition/Split';
import Messages from './composition/Messages'; */
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

/* SPLITS
function App() {
  return (
    <main className='App'>
      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>
      <Split className='left' flexBasis='2'>
        Content for the left `Split`. Lorem {firstTooltip} ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        Content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
}

*/

function App() {
  return (
    <main className='App'>
      <HelloWorld />
      <Bomb />
      <RouletteGun />
    </main>
  );
}

export default App;