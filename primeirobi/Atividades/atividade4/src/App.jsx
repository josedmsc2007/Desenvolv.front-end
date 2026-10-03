import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const post1 = {
    id: 'tendencias',
    titulo: 'Tendências do mercado',
    autor: 'Seu Nome',
    data: '05/09/2026',
    conteudo:
      'Empresas buscam profissionais que sabem trabalhar em equipe e se comunicar bem, além de ter conhecimento técnico. Vagas remotas e híbridas continuam comuns. Participar de projetos práticos na faculdade já conta como experiência. Vale registrar tudo que você construiu.',
    video: 'https://www.youtube.com/embed/5Gj9PaoC-WQ',
  }

  const post2 = {
    id: 'curriculo',
    titulo: 'Currículo',
    autor: 'Seu Nome',
    data: '05/09/2026',
    conteudo:
      'Use os mesmos termos da vaga no seu currículo e descreva resultados, não só tarefas. Troque "responsável por" por números e exemplos concretos.',
  }

  const post3 = {
    id: 'entrevistas',
    titulo: 'Entrevistas',
    autor: 'Seu Nome',
    data: '05/09/2026',
    conteudo:
      'Em entrevista técnica, explique seu raciocínio em voz alta. Revise o básico antes: lógica, estrutura de dados e banco de dados.',
  }

  return (
    <div>
      <div className="topo">
        <div className="container">
          <Header />
          <Navigation />
        </div>
      </div>

      <main className="container">
        <section className="intro">
          <h2>Carreira e mercado de trabalho</h2>
          <p>
            O mercado muda rápido. Aqui você encontra dicas sobre tendências,
            currículo e entrevistas para quem está começando ou trocando de área.
          </p>
        </section>

        <div className="content">
          <Article
            id={post1.id}
            titulo={post1.titulo}
            autor={post1.autor}
            data={post1.data}
            conteudo={post1.conteudo}
            video={post1.video}
          />
          <Article
            id={post2.id}
            titulo={post2.titulo}
            autor={post2.autor}
            data={post2.data}
            conteudo={post2.conteudo}
          />
          <Article
            id={post3.id}
            titulo={post3.titulo}
            autor={post3.autor}
            data={post3.data}
            conteudo={post3.conteudo}
          />
          <Sidebar />
        </div>

        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}

export default App