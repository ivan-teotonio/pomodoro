


import { Home } from './pages/Home';

import './styles/theme.css';    
import './styles/global.css';

export function App() {
  // Que todos os componentes que usan numero
  // saibam das mudanças em seu valor
  //sempre que eu usar useState, não vou usar atribuição diretamente
  // const [numero, setNumero] = useState(() => {
  //   console.log('Executou')
  //   return 0;
  // });
  // const [numero, setNumero] = useState(0);

  // function handleClick() {
  //   //se quiser utilizar o valor anterior, precisa do callback
  //    //setNumero((prevState) => prevState + 1);

  //    //se não vai utilizar o valor anterior, não precisa do callback
  //    setNumero(1);
  // }
  return <Home />;
    
}
