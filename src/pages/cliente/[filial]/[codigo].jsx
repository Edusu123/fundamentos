import { useRouter } from 'next/router'
import Layout from "@/components/Layout";

export default function ClientePorCodigo() {
  const router = useRouter()

  return (
    <Layout titulo='Navegação Dinâmica'>
      <div>Filial = {router.query.filial}</div>
      <div>Código = {router.query.codigo}</div>
    </Layout>
  )
}
