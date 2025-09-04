'use client'

import ExploreDataContainer from "@/app/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";


const FindJobsPage = () => {
  
  const formFIlter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema)
  })
  
  const onSubmitFormFilter = async (val : z.infer<typeof formFilterSchema>) =>{ 
    console.log(val)
  }
  
  return <ExploreDataContainer formFilter={formFIlter} onSubmitFilter={onSubmitFormFilter}/>
};

export default FindJobsPage;
