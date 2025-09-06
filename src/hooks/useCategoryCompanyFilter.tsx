import type { filterFormType } from "@/app/types";
import { fetcher, parsingCategoriesToOptions } from "@/lib/utils";
import { useMemo } from "react";
import useSWR from "swr";

const useCategoryCompanyFilter = () => {
  const { data, isLoading, error } = useSWR("/api/company/categories", fetcher);
  
  const categories = useMemo(() => parsingCategoriesToOptions(data, isLoading, error) , [data, isLoading, error])
  
  const filters = useMemo
  (() => {
    return [
      {
        name: 'industry',
        label: 'Industry',
        items: categories
      }
    ] as filterFormType[]
  }, [categories])
  
  return {
    filters
  }
};

export default useCategoryCompanyFilter;
