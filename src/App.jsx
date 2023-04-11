import { createContext, useState } from 'react';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { TeamContext } from './components/TeamContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [caughtPokemon, setCaughtPokemon] = useState([]);

    return (
        <>
            <TeamContext.Provider value={{ caughtPokemon, setCaughtPokemon }}>
                <Header />
                <div className="content">
                    <Outlet />
                </div>
            </TeamContext.Provider>
        </>
    );
}

export default App;
