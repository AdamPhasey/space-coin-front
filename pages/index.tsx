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
import { Button } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const { user, error, isLoading } = useUser();
  return (
    <>
      {!user && (
        <div>
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-[5vmax] text-white flex justify-center">
              SPACECOIN
            </h1>
            <div className="flex flex-row">
              <Button variant="outlined">
                <Link href="/api/auth/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {user && (
        <>
          <Navbar />
          <Graph data={data} />
        </>
      )}
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
