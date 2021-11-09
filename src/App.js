import styled from "styled-components";
import { BrowserRouter } from 'react-router-dom'
import RouterComponent from "components/RouterComponent";
import {Loader} from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 0 20px;
`

const App = () => {
  return (
    <div className="App">
      <AppContainer>
          <BrowserRouter>
              <ErrorBoundary>
                <RouterComponent />
              </ErrorBoundary>
          </BrowserRouter>
      </AppContainer>
    </div>
  );
}

export default App;
