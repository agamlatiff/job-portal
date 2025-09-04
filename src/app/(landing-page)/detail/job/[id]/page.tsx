import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DetailJobPageProps {}

const DetailJobPage = () => {
  return (
    <div className="bg-slate-100 px-32 pt-10 pb-14">
      <div className="inline-flex gap-3 text-sm text-muted-foreground">
        <Link href={"/"} className="hover:underline hover:text-black">
          Home
        </Link>{" "}
        /{" "}
        <Link
          href={"/find-companies"}
          className="hover:underline hover:text-black"
        >
          Companies
        </Link>{" "}
        /{" "}
        <Link
          href={"/detail-company/1"}
          className="hover:underline hover:text-black"
        >
          Twitter
        </Link>{" "}
        /{" "}
        <Link
          href={"/detail-job/1"}
          className="hover:underline hover:text-black"
        >
          Social Media Assistant
        </Link>{" "}
        /{" "}
      </div>

      <div className="bg-white shadow mt-10 p-5 w-11/12 mx-auto flex flex-row justify-between items-center">
        <div className="inline-flex items-center gap-5">
          <Image src={'/images/compan2.png'} alt="company" width={80} height={80}/>
          <div className="text-2xl font-semibold">
            Social Media Assistant
          </div>
          <div className="text-muted-foreground">Agency . Paris France . Full-Time</div>
        </div>
        <Button size={'lg'} className="text-lg px-12 py-6">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default DetailJobPage;
