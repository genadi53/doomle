import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import DataMapper from "./components/dataMapper/DataMapper";
import Content from "./components/content/Content";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Content>
          <Routes>
            <Route
              path="/"
              element={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                  }}
                >
                  <Menu />
                </div>
              }
            />
            <Route path="/display/:type" element={<DataMapper />} />
          </Routes>
        </Content>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
