import { jobFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";

const PostJobPage = () => {
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills : []
    }
  })
  
  const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
    
  }
  
  return <div>PostJobPage</div>;
};

export default PostJobPage;
