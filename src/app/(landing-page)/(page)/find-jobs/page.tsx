"use client";

import ExploreDataContainer from "@/app/containers/ExploreDataContainer";
import type { filterFormType, JobType } from "@/app/types";
import { CATEGORIES_OPTIONS } from "@/constants";
import { formFilterSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";

const FILTER_FORMS: filterFormType[] = [
  { name: "categories", label: "Categories", items: CATEGORIES_OPTIONS },
];

const dummyData: JobType[] = [
  {
    applicants: 5,
    categories: ["Marketing", "Design"],
    desc: "Lorem",
    image: "/images/company2.png",
    name: "Social Media Assistant",
    needs: 10,
    type: "Agency",
    jobType: "Full-Time",
    location: "Paris, France",
  },
];

const FindJobsPage = () => {
  const formFIlter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    console.log(val);
  };

  return (
    <ExploreDataContainer
      type="job"
      data={dummyData}
      title="dream job"
      subtitle="Find your next career at companies like HubSpot, Nike, and Dropbox"
      loading={false}
      filterForms={FILTER_FORMS}
      formFilter={formFIlter}
      onSubmitFilter={onSubmitFormFilter}
    />
  );
};

export default FindJobsPage;
