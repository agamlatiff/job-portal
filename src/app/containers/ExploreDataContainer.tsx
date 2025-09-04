import FormFilterDynamic from "@/components/page/FormFilterDynamic";
import FormSearchDynamic from "@/components/page/FormSearchDynamic";
import Image from "next/image";
import type { FC } from "react";
import type { filterFormType } from "../types";
import JobCard from "@/components/page/JobCard";

interface ExploreDataContainerProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void>;
  filterForms: filterFormType[];
}

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
  filterForms,
  onSubmitFilter,
  formFilter,
}) => {
  return (
    <>
      <div className="bg-gray-200 px-32 pt-16 pb-14">
        <div className="mb-10">
          <div className="mx-auto mb-11 text-center flex justify-center gap-2">
            <span className="text-5xl font-semibold">Find Your</span>
            <div className="relative">
              <span className="text-5xl font-semibold text-primary">
                dream job
              </span>
              <div className="absolute top-10 w-[220px] h-10">
                <Image
                  src={"/images/pattern2.png"}
                  alt="pattern"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500">
            Find your next career at companies like HubSpot, Nike, and DropBox
          </div>
        </div>
        <div>
          <FormSearchDynamic/>
        </div>
      </div>

      <div className="mt-20 mb-16 px-32 flex flex-row items-start gap-10">
        <div className="w-1/5">
        <FormFilterDynamic formFilter={formFilter} filterForms={filterForms} onSubmitFilter={onSubmitFilter}/>  
        </div>
        <div className="w-4/5">
          <div className="mb-5">
            <div className="text-3xl font-semibold">All Jobs</div>
            <div className="text-muted-foreground">Showing 73 Result</div>
          </div>
          <div className="grid grid-cols-1 gap-7">
            <JobCard applicants={5} categories={['Marketing', 'Design']} desc="lorem" image="/images/company2.png" jobType="Full-Time" location="Paris, France" name="Social Media Assistant" type="Agency" needs={10}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreDataContainer;
