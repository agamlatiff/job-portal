import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCategory } from "react-icons/bi";

interface DetailJobPageProps {}

const DetailJobPage = () => {
  return (
    <>
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
            <Image
              src={"/images/compan2.png"}
              alt="company"
              width={80}
              height={80}
            />
            <div className="text-2xl font-semibold">Social Media Assistant</div>
            <div className="text-muted-foreground">
              Agency . Paris France . Full-Time
            </div>
          </div>
          <Button size={"lg"} className="text-lg px-12 py-6">
            Apply
          </Button>
        </div>
      </div>

      <div className="px-32 py-16 flex flex-row items-start gap-10">
        <div className="w-3/4">
          <div className="mb-16">
            <div className="text-3xl font-semibold">Description</div>
            <div className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              rem omnis laboriosam repellendus alias fuga, voluptate amet
              eligendi officiis officia ipsa optio, incidunt nulla cupiditate
              voluptatum reprehenderit maiores! Numquam, optio?
            </div>
          </div>
          <div className="mb-16">
            <div className="text-3xl font-semibold">Responsibilities</div>
            <div className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              rem omnis laboriosam repellendus alias fuga, voluptate amet
              eligendi officiis officia ipsa optio, incidunt nulla cupiditate
              voluptatum reprehenderit maiores! Numquam, optio?
            </div>
          </div>
          <div className="mb-16">
            <div className="text-3xl font-semibold">Who You Are</div>
            <div className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              rem omnis laboriosam repellendus alias fuga, voluptate amet
              eligendi officiis officia ipsa optio, incidunt nulla cupiditate
              voluptatum reprehenderit maiores! Numquam, optio?
            </div>
          </div>
          <div className="mb-16">
            <div className="text-3xl font-semibold">Nice-To-Haves</div>
            <div className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              rem omnis laboriosam repellendus alias fuga, voluptate amet
              eligendi officiis officia ipsa optio, incidunt nulla cupiditate
              voluptatum reprehenderit maiores! Numquam, optio?
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div>
            <div className="text-3xl font-semibold">About this role</div>

            <div className="mt-6 p-4 bg-slate-50">
              <div className="mb-2">
                <span className="font-semibold">5 Applied</span>{" "}
                <span className="text-gray-600">of 10 capacity</span>
              </div>
              <Progress value={50} />
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Apply Before</div>

                <div className="font-semibold ">July 32 m 2023</div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Posted On</div>

                <div className="font-semibold ">July 32 m 2023</div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Type</div>

                <div className="font-semibold ">Full-Time</div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Salary</div>

                <div className="font-semibold ">$75k-$85k</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div>
          <div className="text-3xl font-semibold">Category</div>
          <div className="my-10 inline-flex gap-4">
            <Badge>Marketing</Badge>
          </div>
        </div>

        <Separator className="my-10" />

        <div>
          <div className="text-3xl font-semibold">Required Skills</div>
          <div className="my-10 inline-flex gap-4">
            {[0, 1, 2].map((item: number) => (
              <Badge key={item} variant={"outline"}>
                Marketing
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="px-32 pb-16">
        <Separator className="mb-14" />
        <div className="mb-6">
          <div className="font-semibold text-3xl">Perks & Benefits</div>
          <div className="text-gray-500 mt-1">
            This job comes with several perks and benefits
          </div>
        </div>

        <div className="grid grid-cols-5 gap-5">
          {[0, 1, 2].map((item: number) => (
            <div key={item}>
              <BiCategory className="size-12 text-primary " />
              <div className="font-semibold text-xl mt-6">Full Healtcare</div>
              <div className="mt-3 text-sm text-gray-500">
                We believe in thriving communities and that starts wth our team
                being happy and healthy.
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailJobPage;
