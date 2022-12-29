import Image from "next/image";
import PViews from "../pviews";

import styles from "../../styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <h2>https://legalfees.rrs.net.br</h2>
      <div className={styles.footer}>
        <a href="http://adv.rodneyrinaldi.com">
          <p>https://adv.rodneyrinaldi.com</p>
        </a>
        <a href="http://dev.rodneyrinaldi.com">
          <p>https://dev.rodneyrinaldi.com</p>
        </a>
      </div>
      <p>
        versão 0.1.0 - visitas{" "}
        <span>
          <PViews />
        </span>
      </p>
      <Image
        src="/rr-logo-w.png"
        alt="confirm"
        width={28}
        height={28}
        className={styles.inputboxconfirm}
      />
    </div>
  );
}

export default Footer;
