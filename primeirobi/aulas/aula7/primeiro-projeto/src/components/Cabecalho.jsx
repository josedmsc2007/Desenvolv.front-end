export default function Header(props) {
    return (

        <header>
            <h1 className={`${props.habilitado ? "ativo" : "inativo"}`}>Cabecalho show!
            </h1>
            <p> Quantidade de posts: {props.quantidadePosts}</p>
        </header>

    )
}
