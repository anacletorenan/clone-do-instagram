
var xicara = {
    nome: 'Xícara',
    preco: 10.00
}

export default function TextMenu(props) {
  return (
    <li className='text-menu'>
        {props.icone}
        {props.nome}
      
    </li>
  );
}