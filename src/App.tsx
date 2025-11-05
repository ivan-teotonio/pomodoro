import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { Heading } from './components/Heading';
import { Footer } from './components/Footer';

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
  return (
    <>

    {/* <Heading>Número:  {numero}</Heading>
    <button onClick={handleClick}>Aumentar</button> */}

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput defaultValue='Valor Preenchido' placeholder='Digite algo' labelText='Task' type='text' id='input' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
             <DefaultButton icon={<PlayCircleIcon />}  />
          </div>
        </form>
      </Container>

      <Container>
      <Footer />
      </Container>
    </>
  );
}
