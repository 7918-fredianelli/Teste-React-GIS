import './App.css';
import React, {useState} from "react";
import Router from "./Router/index"
import {client} from "./Clients/index"
import ClientsContext from "./Contexts/ClientsContext";


function App() {
  const [clientsList, setClientsList] = useState(client)

  return (
    <div className="App">
      <ClientsContext.Provider value={{clientsList: clientsList, setClientsList: setClientsList}}>
        <Router/>
      </ClientsContext.Provider>
    </div>
  );
}

export default App;
