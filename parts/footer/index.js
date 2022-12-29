import Image from "next/image";
import { useRouter } from "next/router";
import PViews from "../pviews";

import styles from "../../styles/footer.module.css";

function Footer() {
  const router = useRouter();
  const wapp =
    "https://api.whatsapp.com/send?phone=" +
    (process.env.PHONE_WA ? process.env.PHONE_WA : "+5511999999999") +
    "&text=(Legal fees) Olá, como posso ajudar? " +
    "A tecnologia e o direito integrados são minhas áreas de atuação especializadas. " +
    "Disponível para consultoria e desenvolvimento, sensível a parcerias.";

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
      <a href="http://rodneyrinaldi.com" target="_blank" rel="noreferrer">
        <Image
          src="/rr-logo-w.png"
          alt="confirm"
          width={28}
          height={28}
          className={styles.iconlink}
        />
      </a>
      <a href={wapp} target="_blank" rel="noreferrer">
        <Image
          src="/whatsapp.png"
          alt="whatsapp"
          width={28}
          height={28}
          className={styles.iconlink}
        />
      </a>
    </div>
  );
}

export default Footer;
