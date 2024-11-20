import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="relative h-screen">
          <Image
            src="/images/bg.jpg"
            alt=""
            width={4608}
            height={3072}
            className="absolute top-0 transition ease-in duration-200 image"
          />
        </div>
      </div>
    </div>
  );
}
