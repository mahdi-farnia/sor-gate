import styles from './styles.module.scss';

const LoginTitle: React.FC = () => {
  return (
    <header className={`${styles.header} no-select`}>
      <div className={styles.wrapper}>
        <h1>Welcome SoR</h1>
        <p className="font-secondary">
          <span className={styles.description}>Enter your password to unlock</span>
        </p>
      </div>
    </header>
  );
};

export default LoginTitle;
