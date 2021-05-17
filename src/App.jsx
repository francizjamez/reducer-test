import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
//modules
import styled from "styled-components";
//context
import { CounterContextProvider } from "./contexts/CounterStore";

function App() {
  return (
    <CounterContextProvider>
      <Appdiv className="flex-col">
        <Navbar />
        <Container className="flex flex-1">
          <Sidebar>
            <p>hey</p>
            <p>wazzup</p>
            <p>yow</p>
            <p>bruv</p>
          </Sidebar>
          <Content />
        </Container>
      </Appdiv>
    </CounterContextProvider>
  );
}

const Appdiv = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  overflow: hidden;
`;

export default App;
