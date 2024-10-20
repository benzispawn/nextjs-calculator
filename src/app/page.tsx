import Image from "next/image";
import styles from "./page.module.css";
import Calculator from "@/app/components/Calculator";

export default function Home() {
  return (
    <div>
      <Calculator />
    </div>
  );
}
