import Navbar from "../components/Navbar/Navbar";
import dynamic from "next/dynamic";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
const Graph = dynamic(import("../components/Graph/index"), { ssr: false });

export interface DataProps {
  data: Data[]
}

export interface Data {
  Month: string;
  Value: number;
}

export default function Dashboard(): JSX.Element {

    const [data, setData] = useState([{Month: 'Jan', Value: 33}, {Month: 'Feb', Value: 99}])
 useEffect(() => {
    async function fetchData() {
    const res = await fetch('https://space-coin.herokuapp.com/v1/spaceCoinDummyData')
    const data: Data[] = await res.json();
    setData(data)
    }
    fetchData()
 }, [])
  return (
    <>
      <Navbar />
      <Graph data={data} />
    </>
  );
}

// export const getServerSideProps: GetServerSideProps<DataProps> = async () => {
//   // ...  // Fetch data from external API
//   const res = await fetch(
//     `https://space-coin.herokuapp.com/v1/spaceCoinDummyData`
//   );
//   const data: Data[] = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// };
