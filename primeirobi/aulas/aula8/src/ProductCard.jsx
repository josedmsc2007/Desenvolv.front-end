export default function ProductCard({ produto }) {
  return (
    <div key={produto.id}>
      <p>Nome: {produto.nome}</p>
      <p>Preço: R${produto.preco}</p>
    </div>
  )
}