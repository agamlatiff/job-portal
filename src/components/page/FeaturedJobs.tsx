import React, { useMemo } from "react";
import TitleSection from "./TitleSection";
import JobItem from "./JobItem";
import useSWR from "swr";
import { fetcher, parsingJobs } from "@/lib/utils";
import type { JobType } from "@/app/types";

const FeaturedJobs = () => {
  const { data, isLoading, error } = useSWR("/api/job/featured", fetcher);

  const jobs = useMemo(
    () => parsingJobs(data, isLoading, error),
    [data, isLoading, error]
  );

  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8  mt-12">
        {jobs.map((item: JobType) => (
          <JobItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
