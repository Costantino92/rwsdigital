import Head from "next/head";
import Image from "next/image";
import Search from "../components/Search";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Feature from "../components/Feature";
import Appointments from "../components/appointments";
import Layout from "../components/Layout";
import FeatureLayout from "../components/FeatureLayout";
import LatestTrends from "../components/LatestTrends";
import Activities from "../components/Activities";
import LatestTechTrends from "../components/LatestTechTrends";

const Home = (data: any) => {
  // console.log(data);
  return (
    <>
      <Layout>
        <Search />
        <NavBar />
        <FeatureLayout>
          <Feature>
            <Appointments data={data} />
            <div className={styles.trendsDiv}>
              <div className={styles.singleTrendDiv}>
                <LatestTrends />
              </div>
              <div className={styles.singleTrendDiv}>
                <Activities />
              </div>
              <div className={styles.singleTrendDiv}>
                <LatestTechTrends />
              </div>
            </div>
          </Feature>
        </FeatureLayout>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/appointments");
  const data = await res.json();
  return { props: { data } };
}

export default Home;
