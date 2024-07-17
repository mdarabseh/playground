import Image from "next/image";
import { Inter } from "next/font/google";
import Counter from "@/components/Counter/index.js";
import Todo from "@/components/Todos/index.js";
import Supermarket from "@/components/Supermarket/index.js";
import TicTacTeo from "@/components/Tic-tac-toe/index.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="relative flex place-items-center ">
        {/* <Counter /> */}
        {/* <Todo /> */}
        <Supermarket />
        {/* <TicTacTeo /> */}
      </div>

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div> */}
    </main>
  );
}
