import styles from './styles.module.scss';
import src from '../../assets/sor-font-logo-animation.gif';
import Image from 'next/image';

const LoginTitle: React.FC = () => {
  return (
    <header className={`${styles.header} no-select`}>
      <div className={styles.wrapper}>
        <h1>
          Welcome
          <Image src={src} alt="JJ" layout="intrinsic" />
        </h1>
        <p className="font-secondary">
          <span className={styles.description}>Enter your password to unlock</span>
        </p>
      </div>
    </header>
  );
};

export default LoginTitle;
