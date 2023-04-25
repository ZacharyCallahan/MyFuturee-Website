import Image from "next/image";
import pfp from "../public/future.jpg";
import Link from "next/link";

export default function Home() {
  return (
      <main className="bg-future-dark h-screen">
          <div class="h-full flex flex-col items-center justify-center text-center text w-5/6 m-auto gap-6">
              <h1 className="text-gradient text-3xl sm:text-5xl md:text-7xl font-bold">
                  Welcome!
              </h1>
              <h2 className="text-gradient text-3xl sm:text-5xl md:text-7xl font-bold mb-5">
                  A creation by Zachary Callahan...
              </h2>
              <p className="text-white sm:text-2xl md:text-3xl">
                  "If something's important enough, you should try. Even if -
                  the probable outcome is failure." - Elon Musk
              </p>
          </div>
      </main>
  );
}
