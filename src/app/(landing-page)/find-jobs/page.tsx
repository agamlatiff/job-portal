"use client";

import ExploreDataContainer from "@/app/containers/ExploreDataContainer";
import type { filterFormType } from "@/app/types";
import { CATEGORIES_OPTIONS } from "@/constants";
import { formFilterSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";

const FILTER_FORMS: filterFormType[] = [
  { name: "categories", label: "Categories", items: CATEGORIES_OPTIONS },
];

const FindJobsPage = () => {
  const formFIlter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    console.log(val);
  };

  return (
    <ExploreDataContainer
    filterForms={FILTER_FORMS}
      formFilter={formFIlter}
      onSubmitFilter={onSubmitFormFilter}
    />
  );
};

export default FindJobsPage;
