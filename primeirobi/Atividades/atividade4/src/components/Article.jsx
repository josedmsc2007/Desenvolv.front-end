function Article(props) {
  return (
    <article id={props.id}>
      <h3>{props.titulo}</h3>
      <p>Por {props.autor} em {props.data}</p>
      <p>{props.conteudo}</p>

      {props.video && (
        <div className="video">
          <iframe
            width="560"
            height="315"
            src={props.video}
            title="Carreira em Pauta - A tecnologia na minha carreira"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </article>
  )
}

export default Article