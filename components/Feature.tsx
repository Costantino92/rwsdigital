import style from "../styles/Feature.module.css";
function Feature({ children }: any) {
  return (
    <>
      <div className={style.navBar}>
        <div className={style.leftMenu}>
          <div className={style.selected}>Dashboards</div>
          <div>Crafted</div>
          <div>Apps</div>
          <div>Resources</div>
          <div>Mega Menu</div>
        </div>
        <div>
          <div className={style.rightMenu}>Docs & Components</div>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
export default Feature;
