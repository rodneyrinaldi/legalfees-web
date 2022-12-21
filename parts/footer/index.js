import Image from "next/image";

import styles from "../../styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <h2>https://legalfees.net.br</h2>
      <a href="http://dev.rodneyrinaldi.com">
        <p>https://dev.rodneyrinaldi.com</p>
        <Image
          src="/rr-logo-w.png"
          alt="confirm"
          width={28}
          height={28}
          className={styles.inputboxconfirm}
        />
      </a>
    </div>
  );
}

export default Footer;
