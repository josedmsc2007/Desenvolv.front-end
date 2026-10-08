import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  const [listaProdutos, setListaProdutos] = useState([
    { id: 1, nome: "teste",  valor: 20.00 },
    { id: 2, nome: "teste2", valor: 30.00 },
    { id: 3, nome: "teste3", valor: 40.00 },
    { id: 4, nome: "teste4", valor: 50.00 },
  ]);
  const [produto, setProduto] = useState("");
  const [valorProduto, setValorProduto] = useState("");

  function incrementar() {
    setContador(contador + 1);
  }

  function adicionar() {
    const novoProduto = {
      id: listaProdutos.length + 1,
      nome: produto,
      valor:(valorProduto),
    }

    setListaProdutos([...listaProdutos, novoProduto]);
    setProduto("");
    setValorProduto("");
  }

  return (
    <main>
      <div className="container">
        <h1>contador</h1>
        <h3>{contador}</h3>
        <button onClick={incrementar}>Incrementar</button>

        {listaProdutos.length > 0 && (
          <div>
            <h3>Lista de Compras</h3>
            <ul>
              {listaProdutos.map(item => (
                <li key={item.id}>
                  Nome: {item.nome} | Valor: {item.valor}
                </li>
              ))}
            </ul>
          </div>
        )}

        <br /><br />

        <label htmlFor="produto">Produto:</label>
        <input
          id="produto"
          type="text"
          value={produto}
          onChange={e => setProduto(e.target.value)}
        />
        <br />

        <label htmlFor="valorProduto">Valor:</label>
        <input
          id="valorProduto"
          type="number"
          value={valorProduto}
          onChange={e => setValorProduto(e.target.value)}
        />
        <br />

        <button onClick={adicionar}>Adicionar</button>
      </div>
    </main>
  );
}