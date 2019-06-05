/**
 * @Author: harsha
 * @Date:   2019-05-13T22:46:53+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T08:55:19+05:30
 */

import React from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import LunchViewComponent from "./components/LunchViewComponent/LunchViewComponent";

function App() {
  return (
    <div className="App">
      <header className="Branch-header">
        <Container>
          <h1 className="Branch-title">LunchPlace</h1>
        </Container>
      </header>
      <LunchViewComponent />
    </div>
  );
}

export default App;
