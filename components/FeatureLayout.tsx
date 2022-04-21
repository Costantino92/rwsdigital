import style from "../styles/FeatureLayout.module.css";
function FeatureLayout({ children }: any) {
  return <div className={style.layoutFeature}>{children}</div>;
}

export default FeatureLayout;
