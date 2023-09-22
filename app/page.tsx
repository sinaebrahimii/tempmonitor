"use client";
import { Inter } from "next/font/google";
import Card from "./components/Card";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
type zone = {
  _id: string;
  name: string;
  updatedAt?: string;
  isOn: string;
  temp: number;
};
export default function Home() {
  const [zones, setZones] = useState<zone[]>([]);
  useEffect(() => {
    fetch("https://zonesiot.iran.liara.run/zone")
      .then((res) => res.json())
      .then((json) => setZones(json.data));
  }, []);
  console.log(zones);
  return (
    <main className="">
      <nav className="bg-gradient-to-r from-madison-900 to-madison-600">
        <div className=" container mx-auto  flex flex-col items-center justify-center py-8">
          <h1 className="mb-5 text-4xl font-semibold text-white">
            Temp monitor
          </h1>
          <p className="text-madison-200">version 1</p>
        </div>
      </nav>
      <section className="flex flex-col items-center py-7">
        {zones.map((zone) => {
          return (
            <Card
              key={zone._id}
              name={zone.name}
              temp={zone.temp}
              isOn={zone.isOn}
              updatedAt={zone.updatedAt}
              id={zone._id}
            ></Card>
          );
        })}
      </section>
    </main>
  );
}
