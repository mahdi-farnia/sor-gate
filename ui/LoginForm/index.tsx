import { useCallback, useId } from 'react';
import styles from './styles.module.scss';

const LoginForm: React.FC = () => {
  const submit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);
  const describeId = useId();

  return (
    <section aria-describedby={describeId} className={styles.wrapper}>
      <h2 id={describeId}>Login</h2>
      <form method="POST" onSubmit={submit} className={styles.form}>
        <label htmlFor="user-pass">
          <input type="password" name="password" id="user-pass" placeholder="TODO complete ui..." />
          <span className="font-secondary">Secret Password</span>
        </label>
      </form>
    </section>
  );
};

export default LoginForm;
