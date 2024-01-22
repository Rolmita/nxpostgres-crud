import Link from 'next/link'

export default async function Home() {

  return (
    <section>
      <h1>Página de inicio</h1>
      <hr />
      <ul>
        <li><Link href={"/articulos"}>Listado de artículos</Link> </li>
        <li><Link href={"/proveedores"}>Listado de proveedores</Link> </li>
      </ul>
    </section>
  )
}
