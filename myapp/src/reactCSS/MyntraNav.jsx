import styles from "./myntranav.module.css";

const MyntraNav = () => {
  console.log(styles);

  return (
    <nav id={styles.nav}>
      <aside className={styles.logo}>logo</aside>
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Home&Living</li>
        <li>Beauty</li>
        <li>
          Studio<sup>new</sup>
        </li>
      </ul>
    </nav>
  );
};
export default MyntraNav;
