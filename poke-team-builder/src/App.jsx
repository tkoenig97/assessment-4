import { Header } from './components/Header';
import { Outlet } from "react-router-dom";
import './App.css';
import Container from "react-bootstrap/Container";

function App() {

    return (
        <Container className="App">
          <Header />
            <Outlet />
        </Container>
      );
}

export default App;
