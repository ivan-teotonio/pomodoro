import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import styles from './style.module.css';
import { useState, useEffect } from 'react';


type AvailableThemes = 'dark' | 'light'

export function Menu() {

  const [theme, setTheme] = useState<AvailableThemes>(() => {
        // ...existing code...
    const storageTheme = (localStorage.getItem('theme') as AvailableThemes) ?? null;
    const st = storageTheme ?? 'light';
    return st;
    // ...existing code...
  });

  function handleThemeChage(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
     setTheme(prevTheme => {
       const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
       return nextTheme;
     });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    return () => {
      console.log('Olha, este componente será atualizado')
    }
  }, [theme]);//array de dependências, so executa quando o tema muda

  //   useEffect(() => {
  //   console.log('useEffect sem dependências', Date.now());
  // });//executa todas vez que o componente é renderizado na tela

  //   useEffect(() => {// bom para api 
  //   console.log('useEffect sem dependências unica', Date.now());
  // }, []);//executa apenas uma vez, pela primeira vez que o componente é renderizado na tela

  const nextTheme = {
    dark: <SunIcon size={64} aria-label='Mudar Tema' />,
    light: <MoonIcon size={64} aria-label='Mudar Tema' />
  }

  return (
    <nav className={styles.menu}>
      <a href='#' className={styles.menuLink} title='Ir para a Home'>
        <HouseIcon size={64} aria-label='Ir para a Home' />
      </a>
      <a href='#' className={styles.menuLink} title='Ir para o histórico'>
        <HistoryIcon size={64} aria-label='Ir para o histórico' />
      </a>
      <a href='#' className={styles.menuLink} title='Ir para as configurações'>
        <SettingsIcon size={64} aria-label='Ir para as configurações' />
      </a>
      <a href='#' className={styles.menuLink} title='Mudar Tema' 
         onClick={handleThemeChage}>
        {nextTheme[theme]}
      </a>
    </nav>
  );
}
