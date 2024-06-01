export default function Page({ params }: { params: { id: string } }) {
  return <h1>Capitulo {params.id}</h1>;
}
