import Navegador from '@/components/Navegador'

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Navegador cor='crimson' destino='/estiloso' texto='Estiloso'></Navegador>
      <Navegador cor='darkviolet' destino='/exemplo' texto='Exemplo'></Navegador>
      <Navegador destino='/jsx' texto='JSX'></Navegador>
      <Navegador cor='green' destino='/navegacao' texto='Navegação #01'></Navegador>
    </div>
  )
}
