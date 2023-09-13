import React, { useState } from "react";
import Topo from "./components/Topo";
import Footer from "./components/Footer";

function subimitHandle() {}

function App() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <>
      <Topo name={nome} lastname={sobrenome} />
      <form onSubmit={subimitHandle}>
        <label>Nome: </label>
        <input
          type="text"
          placeholder="Digite seu nome..."
          onChange={(e) => {
            setNome(e.target.value);
          }}
          value={nome}
        ></input>
        <br />
        <br />

        <label>Sobrenome:</label>
        <input
          type="text"
          placeholder="Digite seu sobrenome..."
          onChange={(e) => {
            setSobrenome(e.target.value);
          }}
        ></input>
        <br />
        <br />

        <label>Email: </label>
        <input
          type="email"
          placeholder="Digite seu nome..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        ></input>
        <br />
        <br />
        <textarea
          onChange={(e) => {
            setMensagem(e.target.value);
          }}
        >
          {mensagem}
        </textarea>
        <button type="submit">ENVIAR</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
