import React from 'react';
interface AppProps{
  message:string;
}


const App = ({message}: AppProps) => {
  console.log(message);
  return <div>{message}</div>;
};

export default App;
