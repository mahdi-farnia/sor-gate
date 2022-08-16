import styles from './styles.module.scss';
import Image from 'next/image';
import AnimatedTitle from '../../assets/animated-title.gif';
import { useCallback, useEffect, useRef } from 'react';

const LoginTitle: React.FC = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const imageLoad = useCallback(() => {
    const { current: header } = headerRef;

    if (!header) return;

    header.classList.add('loaded');
  }, [headerRef]);

  useEffect(() => {
    const { current: para } = paraRef;
    if (!para) return;

    const animEnd = () => para.classList.add('anim-ended');

    para.addEventListener('animationend', animEnd, { once: !0 });
    return () => para.removeEventListener('animationend', animEnd);
  }, [paraRef]);

  return (
    <header className={`${styles.header} no-select`} ref={headerRef}>
      <div className={styles.wrapper}>
        <h1>
          <span className={styles.hiddenTitle}>Welcome SoR</span>
          <Image
            src={AnimatedTitle}
            alt="SoR Animated Title"
            layout="fill"
            unselectable="on"
            onLoad={imageLoad}
          />
        </h1>
        <p className="font-secondary" ref={paraRef}>
          <span className={styles.description}>Enter your password to unlock</span>
        </p>
      </div>
    </header>
  );
};

export default LoginTitle;
