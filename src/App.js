import React from "react";
import { Page } from "./components/Page";
import { Sidebar } from "./components/Sidebar";
export const DataContext = React.createContext(null) 

function App() {
  const [data, setData] = React.useState({})
  function dataHandler(value){
    setData(value);
  }
  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <Sidebar 
          onData={dataHandler}
          data={data}
        />
        <Page data={data}/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
