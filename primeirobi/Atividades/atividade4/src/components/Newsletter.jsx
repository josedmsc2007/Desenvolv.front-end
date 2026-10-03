function Newsletter() {
  return (
    <section id="newsletter">
      <h2>Assine a newsletter</h2>
      <p>Receba dicas sobre vagas e carreira por e-mail.</p>

      <form action="#" method="post">
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" required minLength="3" />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="nascimento">Data de nascimento</label>
          <input type="date" id="nascimento" name="nascimento" />
        </div>

        <div className="form-group">
          <label htmlFor="experiencia">Anos de experiência</label>
          <input type="number" id="experiencia" name="experiencia" min="0" max="50" />
        </div>

        <div className="form-group">
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            pattern="[A-Za-zÀ-ÿ\s]+"
            title="Apenas letras"
          />
        </div>

        <div className="form-group">
          <label>Frequência de envio</label>
          <label htmlFor="freq-semanal">
            <input type="radio" id="freq-semanal" name="frequencia" value="semanal" defaultChecked /> Semanal
          </label>
          <label htmlFor="freq-mensal">
            <input type="radio" id="freq-mensal" name="frequencia" value="mensal" /> Mensal
          </label>
        </div>

        <div className="form-group">
          <label>Áreas de interesse</label>
          <label htmlFor="int-dev">
            <input type="checkbox" id="int-dev" name="interesses" value="dev" /> Desenvolvimento
          </label>
          <label htmlFor="int-dados">
            <input type="checkbox" id="int-dados" name="interesses" value="dados" /> Dados
          </label>
        </div>

        <button type="submit" className="btn">Enviar</button>
      </form>
    </section>
  )
}

export default Newsletter