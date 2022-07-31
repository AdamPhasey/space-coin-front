import type {
  GetServerSidePropsResult,
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Graph = dynamic(import("../components/Graph/index"), { ssr: false });
function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('https://space-coin.herokuapp.com/v1/spaceCoinDummyData')
  //     const data = await response.json();
  //     setData(data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      <h1 className="text-9xl text-white flex flex-row justify-center">
        SPACECOIN
      </h1>
      <Graph data={data}/>
    </>
  );
}

export interface DataProps {
  data: Data[];
  }

export interface Data {
  Month: string;
  Value: number;
}

export const getServerSideProps: GetServerSideProps<DataProps> = async () => {
  // ...  // Fetch data from external API
  const res = await fetch(
    `https://space-coin.herokuapp.com/v1/spaceCoinDummyData`
  );
  const data: Data[] = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default Home;
