import type { FC } from "react";
import { BiCategory } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface CategoryItemProps {
  name: string
  totalJobs: number
}

const CategoryItem : FC<CategoryItemProps> = ({name, totalJobs}) => {
  return (
    <div
      className="border border-border p-8 cursor-pointer transition-colors group-hover:border-primary hover:bg-primary hover:text-white"
    >
      <BiCategory className="size-12 text-primary group-hover:text-white" />
      <div className="mt-7">
        <div className="text-2xl font-semibold">{name}</div>
        <div className="text-muted-foreground inline-flex items-center gap-1 mt-1 group-hover:text-white">
          <span>{totalJobs} jobs available</span>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
