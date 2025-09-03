import React from "react";
import TitleSection from "./TitleSection";
import JobItem from "./JobItem";

const FeaturedJobs = () => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8  mt-12">
        {[0, 1, 2].map((item: number) => (
          <JobItem
            categories={["Marketing", "Design"]}
            key={item}
            image="/images/company.png"
            jobType="Full Time"
            name="Email Marketing"
            type="Agency"
            location="Paris, France"
            desc="        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestiae saepe, at officiis ut aliquam illum nemo sed inventore, fugit aspernatur quas ipsam, aut nisi necessitatibus voluptates eveniet placeat error!
"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
