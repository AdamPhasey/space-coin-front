import Navbar from "../components/Navbar/Navbar";
import dynamic from "next/dynamic";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
const Graph = dynamic(import("../components/Graph/index"), { ssr: false });

export default function Dashboard({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <>
      <Navbar />
      <Graph data={data} />
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
