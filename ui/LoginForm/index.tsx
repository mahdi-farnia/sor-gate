import { useCallback, useId, useRef } from 'react';
import PasswordInput from './PasswordInput';
import ShowPasswordButton from './ShowPasswordButton';
import styles from './styles.module.scss';

const LoginForm: React.FC = () => {
  const submit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);
  const inputRef = useRef<HTMLInputElement>(null);
  const describeId = useId();

  return (
    <section aria-describedby={describeId} className={styles.wrapper}>
      <h2 id={describeId}>Login</h2>
      <form method="POST" onSubmit={submit}>
        <div className={styles.formContent}>
          <PasswordInput inputRef={inputRef} />
          <ShowPasswordButton inputRef={inputRef} />
          <div className={styles.hint}>
            <span>
              I think you miss something: <b>Birthday + Full name Abbreviation</b>
            </span>
          </div>
        </div>
        <SubmitButton />
      </form>
    </section>
  );
};

const SubmitButton: React.FC = () => (
  <div className={styles.btnWrapper}>
    <button type="submit" className={`font-secondary ${styles.submitBtn}`}>
      Submit
    </button>
  </div>
);

export default LoginForm;
