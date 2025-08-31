"use client";

import { overviewFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import TitleForm from "./TitleForm";
import { Separator } from "../ui/separator";

const OverviewForm = () => {
  const form = useForm<z.infer<typeof overviewFormSchema>>({
    resolver: zodResolver(overviewFormSchema),
  });

  const onSubmit = (val: z.infer<typeof overviewFormSchema>) => {};

  return (
    <div>
      <div className="my-5">
        <TitleForm
          title="Basic Information"
          subtitle="This is company information that you can update anytime"
        />
      </div>
      <Separator/>
    </div>
  );
};

export default OverviewForm;
