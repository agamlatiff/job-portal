import type { JobType } from "@/app/types";
import Image from "next/image";
import type { FC } from "react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface LatestJobItemProps extends JobType {}

const LatestJobItem: FC<LatestJobItemProps> = ({
  categories,
  image,
  jobType,
  location,
  name,
  type,
}) => {
  return (
    <div className="border border-border p-8 flex flex-row items-start gap-6 cursor-pointer">
      <div>
        <Image src={image} width={64} height={64} alt={image} />
      </div>
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="stext-sm text-muted-foreground mb-2">
          {type} . {location}
        </div>
        <div className="h-5 inline-flex gap-2 items-center">
          <Badge variant={"secondary"}>{jobType}</Badge>
          <Separator orientation="vertical" />
          {categories.map((item: string, i: number) => (
            <Badge
              key={i}
              variant={"outline"}
              className="rounded border-primary bg-primary/5 text-pimary"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestJobItem;
