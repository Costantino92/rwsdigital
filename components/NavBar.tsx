import style from "../styles/NavBar.module.css";
function NavBar() {
  return (
    <div className={style.flexNav}>
      <div className={style["navDivs"] + " " + style["selected"]}>
        <span>
          <b>FEATURES</b>
        </span>
        <span className={style.subTitle}>Apps & Components</span>
      </div>
      <div className={style.navDivs}>
        <span>
          <b>ACCOUNTING</b>
        </span>
        <span className={style.subTitle}>Finance & Reporting</span>
      </div>
      <div className={style.navDivs}>
        <span>
          <b>ECOMMERCE</b>
        </span>
        <span className={style.subTitle}>Orders & Delivery</span>
      </div>
      <div className={style.navDivs}>
        <span>
          <b>AUDIENCE</b>
        </span>
        <span className={style.subTitle}>Customers Directory</span>
      </div>
      <div className={style.navDivs}>
        <span>
          <b>AUDIT</b>
        </span>
        <span className={style.subTitle}>Activities & Logs</span>
      </div>
    </div>
  );
}
export default NavBar;
