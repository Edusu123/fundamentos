import Layout from "@/components/Layout";

export default function Jsx() {
  const a = 4;
  const b = 3;
  console.log(a * b);

  const titulo = <h1>JSX é um conceito central</h1>;

  function subtitulo() {
    return <h2> {"muito legal".toUpperCase()} </h2>;
  }

  return (
    <Layout titulo="Entendendo o JSX">
      <div>
        {titulo}
        {a * b} <br />
        {subtitulo()}
        <p>{JSON.stringify({ nome: "João", idade: 30 })}</p>
      </div>
    </Layout>
  );
}
