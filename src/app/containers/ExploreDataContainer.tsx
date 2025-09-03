import Image from "next/image";
import type { FC } from "react";

interface ExploreDataContainerProps {
  formFilter: any;
  onSubmitFilter?: (val: any) => Promise<void>;
  filterForms: any;
}

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
  filterForms,
  onSubmitFilter,
  formFilter,
}) => {
  return (
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
        <div>Form Search</div>
      </div>
    </div>
  );
};

export default ExploreDataContainer;
