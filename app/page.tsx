import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="bg-gradient-to-tr from-madison-700 to-madison-500">
        <nav className=" container mx-auto  flex flex-col items-center justify-center py-8">
          <h1 className="mb-5 text-4xl font-semibold text-white">
            Temp monitor
          </h1>
          <p className="text-madison-200">version 1</p>
        </nav>
      </div>
    </main>
  );
}
