import { RefObject, useCallback } from 'react';
import EyeIcon from '../Icons/EyeIcon';
import styles from './styles.module.scss';

interface ButtonProps {
  inputRef: RefObject<HTMLInputElement>;
}

const ShowPasswordButton: React.FC<ButtonProps> = ({ inputRef }) => {
  const onClick = useCallback(() => {
    const input = inputRef.current!;

    // TODO add alternative character showing...
    if (input.type === 'password') input.type = 'text';
    else input.type = 'password';
  }, [inputRef]);

  return (
    <button
      onClick={onClick}
      type="button"
      title="Toggle Password Visibility"
      className={styles.showPassBtn}
    >
      <EyeIcon />
    </button>
  );
};

export default ShowPasswordButton;
