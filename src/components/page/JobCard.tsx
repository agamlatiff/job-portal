import type { JobType } from "@/app/types";
import Image from "next/image";
import type { FC } from "react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

interface JobCardProps extends JobType {}

const JobCard: FC<JobCardProps> = ({
  applicants,
  categories,
  desc,
  image,
  jobType,
  location,
  name,
  needs,
  type,
}) => {
  return (
    <div className="w-full border mb-5 p-6 border-border flex flex-row justify-between items-center">
      <div className="flex flex-row items-start gap-6">
        <div>
          <Image src={image} alt={image} width={64} height={64} />
        </div>
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground mb-2">
            {type} . {location}
          </div>
          <div className="h-5 inline-flex gap-2 items-center">
            <Badge variant={"secondary"}>{jobType}</Badge>
            <Separator orientation="vertical" />
            {categories.map((item: string, i: number) => (
              <Badge key={i}>{item}</Badge>
            ))}
          </div>

          <div className="w-[200px]">
            <Button className="w-full" size={"lg"}>
              Apply
            </Button>
            <Progress className="mt-2" value={applicants / needs * 100} />
            <div className="text-gray-500 text-sm text-center mt-2">
              <span className="text-black  font-semibold">{applicants}</span> of{" "}
              {needs} capacity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
