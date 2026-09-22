import "./App.css"
import Header from "./components/cabecalho";

export default function App() {
  const qtdPosts = 5;
  const possuiAssinatura = false;


  return (
    <main id="container">
    
      <Header
      habilitado={possuiAssinatura}
       quantidadePosts={qtdPosts} />

      <section>
        <h1> Nossos ultimos posts</h1>
        <article>
          <h1>corinthians 3x1 varmengo</h1>
          <p>Nos 45 do segundo tempo o protagonista encera o caixao</p>
        </article>
        <article>
          <h1>corinthians 3x1 varmengo</h1>
          <p>Nos 45 do segundo tempo o protagonista encera o caixao</p>
        </article>
        <article>
          <h1>corinthians 2x0 porcada</h1>
          <p>Nos 45 do segundo tempo o kaio cesar broca de fora da area</p>
        </article>
        <article>
          <h1>corinthians 3x1 varmengo</h1>
          <p>Nos 45 do segundo tempo o protagonista encera o caixao</p>
        </article>
        <article>
          <h1>porcada 0x2 estudiantes</h1>
          <p>Nos 45 do segundo tempo estudiantes broca mais um hahaha naverdadi</p>
        </article>
      </section>


    </main>

  )

}