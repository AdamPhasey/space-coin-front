import { Button } from "@mui/material";
import Link from "next/link";
import FadeMenu from "../BurgerMenu/BurgerMenu";
import Profile from "../Profile";

export default function Navbar(): JSX.Element {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl pt-4">SPACECOIN</h1>
        <br />
        <div>
          <FadeMenu />
        </div>
      </div>
    </>
  );
}
