import styles from './style.module.css';



export function Footer() {
    return <footer className={styles.footer}>
        <a href="">Entenda como funciona o Pomodoro</a>
        <a href="">Chromes Pomodoro &copy; {new Date().getFullYear()}</a>
        </footer>
}