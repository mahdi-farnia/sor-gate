import styles from './styles.module.scss';
import Image from 'next/image';
import backgroundImage from '../../assets/login-bg.jpg';

const LoginBackground: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        layout="fill"
        draggable={!1}
        objectFit="cover"
        src={backgroundImage}
        alt="Login background"
      />
    </div>
  );
};

export default LoginBackground;
