import styles from './style.module.css';

type DefaultInputProps = {
  id: string; //o input só vai aceitar o tipo text
  labelText: string; //pode ou não ter label
} & React.InputHTMLAttributes<HTMLInputElement>; //permite que tenha todos ostipos de input

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* Se labelText existir, renderiza a label feito interpolação */}
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} */}
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input}  id={id} type={type} {...rest} />
    </>
  );
}
