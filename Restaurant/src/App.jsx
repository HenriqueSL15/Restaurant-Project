import Hashtaurante from './assets/hashtaurante.webp'
import './App.css';
import { Navegacao } from './Navegacao.jsx';
import { ItemCardapio } from './item-cardapio';


export function App(){
  return <>
    <img src={Hashtaurante} alt="" className='capa'/>
    <h1>Título da Minha Página em REACT</h1>
    <Navegacao />
    <div className='menu'>
      <ItemCardapio />
      <ItemCardapio />
      <ItemCardapio />
      <ItemCardapio />
      <ItemCardapio />
      <ItemCardapio />
    </div>
  </>
}