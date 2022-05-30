import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";

import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    // <div className="App">
    //   <Login />
    // </div>
  );
}

export default App;
