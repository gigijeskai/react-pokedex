import React, { FunctionComponent } from 'react';
import Header from './components/header';
import Main from './components/main';
import { Wallpaper } from './components/imageContainers/styles';

const App: FunctionComponent = () => {
  return (
    <div>
      <Wallpaper imageUrl="https://manybackgrounds.com/images/hd/pokemon-characters-acbjk9br1usgcb9t.jpg" >
      <Header />
      <Main />
      </Wallpaper>
    </div>
  );
}

export default App;
