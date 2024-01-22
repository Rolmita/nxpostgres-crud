import Form from "@/components/FormProveedores"
import { sql } from '@vercel/postgres';
import { editProveedor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({searchParams}) {
  const [proveedores] = await sql`select * from proveedores where id = ${searchParams.id};`
  const proveedor = proveedores[0];

  return (
    <div>
        <h3>Editar proveedor {searchParams.id}</h3>
        <Form action={editProveedor} title='Editar proveedor' proveedor={proveedor} disabled={false}  />
    </div>
  )
}


export default page