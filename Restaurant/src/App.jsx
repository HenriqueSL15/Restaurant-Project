import { useState } from 'react';
import Hashtaurante from './assets/hashtaurante.webp'
import './App.css';
import { Navegacao } from './Navegacao.jsx';
import { ItemCardapio } from './item-cardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

export function App(){
  // Arrays guardando todas os tipos de pratos
  const paginasMenu = [pratosPrincipais,sobremesas,bebidas]

  // Array usando useState(0) para alternar seus valores(uma forma mais correta)
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return <>
    {/* Para usar uma variável em REACT se usa {} */}
    <img src={Hashtaurante} alt="" className='capa'/>
    
    {/* Chama o "pacote" Navegacao que cria os botões e ao mesmo tempo chama a função para alterar os valores dinamicamente */}
    <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
    <div className='menu'>
    {/* Verifica cada item dentro do "pacote" ItemCardapio e atribui seus devidos valores de forma dinâmica */}
    {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem} />)}
    </div>
  </>
}