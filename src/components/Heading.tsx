import styles from './Heading.module.css';

type HeadingProps = {
    children: React.ReactNode;//aceita qualquer tipo de conteúdo
}

export function Heading({ children }: HeadingProps) {

    return <h1 className={styles.heading}>{children}</h1>

}