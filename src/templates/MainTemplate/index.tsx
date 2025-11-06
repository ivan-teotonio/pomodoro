import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';


type MainTemplatesProps = {
  children: React.ReactNode;
}

export function MainTemplate({ children }: MainTemplatesProps) {
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

       {children}   

      <Container>
        <Footer />
      </Container>
    </>
  );
}
