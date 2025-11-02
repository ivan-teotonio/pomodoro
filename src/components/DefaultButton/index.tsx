import styles from './style.module.css';

type DefaultButtonProps = {
 icon: React.ReactNode;
 color?: 'green' | 'red';//só pode colcoar color ou red
} & React.ButtonHTMLAttributes<HTMLButtonElement>; //permite que tenha todos ostipos de button

export function DefaultButton({
   icon,
   color = 'green', //padrão green
   ...props //pega todos os props do button
  }: DefaultButtonProps) {
  return (
    <>
      {/* Se labelText existir, renderiza a label feito interpolação */}
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} */}
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
