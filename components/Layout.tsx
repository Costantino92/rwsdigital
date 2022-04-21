import style from "../styles/Layout.module.css";
function Layout({ children }: any) {
  return <div className={style.centered}>{children}</div>;
}

export default Layout;
