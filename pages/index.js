import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-green-500 font-bold">
        Welcome to Personal Portfolio
      </h1>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/assetTypes">AssetTypes</Link>
        </li>
        <li>
          <Link href="/assetLocation">AssetLocation</Link>
        </li>
        <li>
          <Link href="/assetNames">AssetName</Link>
        </li>
        <li>
          <Link href="/myPortfolio">My Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}
