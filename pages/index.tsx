import type {
  GetServerSidePropsResult,
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Profile from "../components/Profile";
const Graph = dynamic(import("../components/Graph/index"), { ssr: false });
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const { user, error, isLoading } = useUser();
  return (
    <>
      {!user &&
      <Link href="/api/auth/login">Login</Link>}
      <br />
      <Link href="/api/auth/logout">Logout</Link>
      {user && 
      <Profile />}
      <h1 className="text-[5vmax] text-white flex flex-row justify-center">
        SPACECOIN
      </h1>
      {user && <Graph data={data} />}
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
