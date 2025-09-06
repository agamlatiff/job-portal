'use client'

import TitleSection from "./TitleSection";

import CategoryItem from "./CategoryItem";
import useSWR from "swr";
import { fetcher, parsingCategories } from "@/lib/utils";
import { useMemo } from "react";

const Category = () => {
  
  const {data, isLoading, error} = useSWR('/api/job/categories', fetcher)
  
  const categories = useMemo(() => {
    parsingCategories(data, isLoading, error)
  } , [data, isLoading, error])
  
  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {[0, 1, 2, 3, 4].map((item: number) => (
          <CategoryItem key={item} name="Category" totalJobs={100} />
        ))}
      </div>
    </div>
  );
};

export default Category;
