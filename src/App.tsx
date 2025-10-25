
import { Heading } from './components/Heading';
import { AlarmClock } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <>
           <Heading>
            Olá mundos 1 
            <button>
                <AlarmClock />
            </button>

           </Heading>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus temporibus id fuga itaque laudantium ea, pariatur 
            consectetur aspernatur repudiandae quod voluptatibus cupiditate
            nam officiis delectus dolore. Ratione totam cumque commodi!
            </p>
       </>
    )   
}





