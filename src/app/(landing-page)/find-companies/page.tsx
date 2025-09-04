"use client";

import ExploreDataContainer from "@/app/containers/ExploreDataContainer";
import type { CompanyType, filterFormType } from "@/app/types";
import { CATEGORIES_OPTIONS } from "@/constants";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";

const FILTER_FORMS: filterFormType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES_OPTIONS,
  },
];

const dataDummy: CompanyType[] = [
  {
    image: "/images/company2.png",
    categories: "Marketing",
    description: "Lorem",
    name: "Twitter",
    totalJobs: 20,
  },
];

const FindCompaniesPage = () => {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const onSubmit = async (val: z.infer<typeof formFilterCompanySchema>) => {
    console.log(val);
  };

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmit}
      filterForms={FILTER_FORMS}
      title="dream companies"
      loading={false}
      subtitle="Find the dreams companies you dream work for"
      type="company"
      data={dataDummy}
    />
  );
};

export default FindCompaniesPage;
