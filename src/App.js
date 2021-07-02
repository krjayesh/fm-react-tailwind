import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import LPodcasts from './components/LatestPodcasts';

const App = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <LPodcasts />
    </>
  ) 
}

export default App;

