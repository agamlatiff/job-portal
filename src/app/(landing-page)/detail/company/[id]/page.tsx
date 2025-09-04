import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React, { type FC } from "react";
import { AiOutlineFire } from "react-icons/ai";

interface DetailCompanyPageProps {}

const DetailCompanyPage: FC<DetailCompanyPageProps> = () => {
  return (
    <div>
      <div className="bg-slate-100 px-32 pt-16 pb-14">
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
          </Link>
        </div>

        <div>
          <div className="mt-10 inlinef-lex gap-6 items-start">
            <Image
              src={"/images/company2.png"}
              alt="company"
              width={150}
              height={150}
            />
            <div>
              <div className="inline-flex gap-4 items-center">
                <span className="text-4xl font-semibold">Twitter</span>
                <Badge>10 Jobs</Badge>
              </div>
              <div className="mt-2">
                <Link href={"/"} className="font-semibold text-primary">
                  https://twitter.com
                </Link>
              </div>
              <div className="inline-flex items-center gap-10 mt-6">
                <div className="inline-flex items-center gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <AiOutlineFire className="size-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Founded</div>
                    <div className="font-semibold">March, 06 2023</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <AiOutlineFire className="size-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Founded</div>
                    <div className="font-semibold">March, 06 2023</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <AiOutlineFire className="size-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Founded</div>
                    <div className="font-semibold">March, 06 2023</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <AiOutlineFire className="size-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Founded</div>
                    <div className="font-semibold">March, 06 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCompanyPage;
