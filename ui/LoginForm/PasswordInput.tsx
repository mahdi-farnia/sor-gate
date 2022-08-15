import { useId, type RefObject } from 'react';
import styles from './styles.module.scss';

interface InputProps {
  inputRef: RefObject<HTMLInputElement>;
}

const PasswordInput: React.FC<InputProps> = ({ inputRef }) => {
  const inputId = useId();

  return (
    <label htmlFor={inputId}>
      <input type="password" name="password" id={inputId} ref={inputRef} required />
      <span className={`font-secondary ${styles.placeholder}`}>Secret Password</span>
    </label>
  );
};

export default PasswordInput;
