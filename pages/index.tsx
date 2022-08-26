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
import Link from "next/link";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import anime from "animejs";

function Home():JSX.Element {

  useEffect(() => {
    anime({
      targets: "#spacecoin path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 100;
      },
      direction: "alternate",
      loop: false,
    });
  }, []);

  return (
    <>
          <div className="flex flex-col justify-center items-center h-screen">
            <svg
              width={"50vmax"}
              id="spacecoin"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 191.83 21"
            >
              <defs>
                <style>
                  .cls-1
                  {
                    "{fill:none;stroke:#006837;stroke-miterlimit:10;stroke-width:0.75px;{"
                  }
                </style>
              </defs>
              <path
                className="cls-1"
                d="M155.13,71V73.5a1.8,1.8,0,0,0,.49,1.28,1.56,1.56,0,0,0,1.19.52h11.74a3.42,3.42,0,0,1,2.59,1.16,3.91,3.91,0,0,1,1.08,2.77v3.42a3.87,3.87,0,0,1-1.08,2.76,3.44,3.44,0,0,1-2.59,1.14H156.36a3.38,3.38,0,0,1-2.57-1.14,3.89,3.89,0,0,1-1.06-2.76v-.3h2.4a1.9,1.9,0,0,0,.56,1.16,1.55,1.55,0,0,0,1.12.46H168.1a1.62,1.62,0,0,0,1.21-.52,1.81,1.81,0,0,0,.5-1.28V79.71a1.85,1.85,0,0,0-.5-1.29,1.6,1.6,0,0,0-1.21-.54H156.36a3.36,3.36,0,0,1-2.57-1.15A4,4,0,0,1,152.73,74V70.56a3.93,3.93,0,0,1,1.06-2.77,3.37,3.37,0,0,1,2.57-1.16h12.19a3.42,3.42,0,0,1,2.59,1.16,3.91,3.91,0,0,1,1.08,2.77v.27h-2.44a1.7,1.7,0,0,0-.53-1.15,1.59,1.59,0,0,0-1.15-.47H156.81a1.55,1.55,0,0,0-1.19.54A1.84,1.84,0,0,0,155.13,71Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M192,66.3a3.42,3.42,0,0,1,2.58,1.14,3.87,3.87,0,0,1,1.08,2.76v6A3.93,3.93,0,0,1,194.54,79,3.39,3.39,0,0,1,192,80.13H179.29v6.42h-2.4V66.3Zm1.26,9.42v-5a1.81,1.81,0,0,0-.51-1.29,1.57,1.57,0,0,0-1.2-.54H179.29v8.7h12.22a1.57,1.57,0,0,0,1.2-.54A1.81,1.81,0,0,0,193.22,75.72Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M212.23,66.3,221,86.55h-2.77l-1.84-4.23H203.7l-1.84,4.23h-2.77L207.9,66.3ZM204.71,80h10.71l-5.37-12.27Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M228.59,68.85a1.55,1.55,0,0,0-1.19.54,1.88,1.88,0,0,0-.49,1.29V82.17a1.84,1.84,0,0,0,.49,1.28,1.56,1.56,0,0,0,1.19.52h11a1.56,1.56,0,0,0,1.19-.52,2,2,0,0,0,.52-1.28h2.4v.48a3.9,3.9,0,0,1-1.07,2.76A3.44,3.44,0,0,1,240,86.55H228.14a3.4,3.4,0,0,1-2.57-1.14,3.89,3.89,0,0,1-1.06-2.76V70.2a3.89,3.89,0,0,1,1.06-2.76,3.4,3.4,0,0,1,2.57-1.14H240a3.44,3.44,0,0,1,2.59,1.14,3.9,3.9,0,0,1,1.07,2.76v.45h-2.4a1.94,1.94,0,0,0-.52-1.27,1.57,1.57,0,0,0-1.19-.53Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M265.14,68.55H250.82v6.57h11.91v2.61H250.82V84.3h14.32v2.25H248.36V66.3h16.78Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M273.89,68.85a1.56,1.56,0,0,0-1.19.54,1.88,1.88,0,0,0-.49,1.29V82.17a1.84,1.84,0,0,0,.49,1.28,1.58,1.58,0,0,0,1.19.52h11a1.56,1.56,0,0,0,1.19-.52,1.92,1.92,0,0,0,.52-1.28H289v.48a3.9,3.9,0,0,1-1.07,2.76,3.44,3.44,0,0,1-2.59,1.14H273.44a3.4,3.4,0,0,1-2.57-1.14,3.89,3.89,0,0,1-1.06-2.76V70.2a3.89,3.89,0,0,1,1.06-2.76,3.4,3.4,0,0,1,2.57-1.14h11.89a3.44,3.44,0,0,1,2.59,1.14A3.9,3.9,0,0,1,289,70.2v.45h-2.4a1.89,1.89,0,0,0-.52-1.27,1.57,1.57,0,0,0-1.19-.53Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M309.49,66.3a3.44,3.44,0,0,1,2.59,1.14,3.9,3.9,0,0,1,1.07,2.76V82.65a3.9,3.9,0,0,1-1.07,2.76,3.44,3.44,0,0,1-2.59,1.14H297.3a3.4,3.4,0,0,1-2.58-1.14,3.94,3.94,0,0,1-1.06-2.76V70.2a3.94,3.94,0,0,1,1.06-2.76,3.4,3.4,0,0,1,2.58-1.14Zm1.26,15.87V70.68a1.85,1.85,0,0,0-.5-1.29,1.6,1.6,0,0,0-1.21-.54H297.75a1.53,1.53,0,0,0-1.19.54,1.84,1.84,0,0,0-.49,1.29V82.17a1.8,1.8,0,0,0,.49,1.28,1.55,1.55,0,0,0,1.19.52H309a1.62,1.62,0,0,0,1.21-.52A1.81,1.81,0,0,0,310.75,82.17Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M320.23,86.55h-2.41V66.3h2.41Z"
                transform="translate(-152.35 -65.93)"
              />
              <path
                className="cls-1"
                d="M341.4,66.3h2.4V86.55h-4.05L327.33,68V86.55h-2.4V66.3h4.36l12.11,18Z"
                transform="translate(-152.35 -65.93)"
              />
            </svg>
                  <br/>
            <Button variant="outlined">
              <Link href="/api/auth/login">Login</Link>
            </Button>
            <br/>
            <Button variant="outlined">
              <Link href="/dashboard">Continue As Guest</Link>
            </Button>
          </div>

    </>
  );
}



export default Home;
