import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string()
    .nonempty({ message: "Job Title is requried" })
    .min(3, { message: "Job Title must be at least 3 characters" }),
  jobType: z.enum(JOBTYPES, { message: "You need to select to a job type" }),
  salaryFrom: z.string({ message: "Salary From is required" }),
  salaryTo: z.string({ message: "Salary To is required" }),
  categoryId: z.string({ message: "You need to select a category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required Skill must be at least 1 skill" }),
  jobDescription: z
    .string({ message: "Job Description is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
  responsibility: z
    .string({ message: "Responsibility is required" })
    .min(10, { message: "Responsibility must be at least 10 characters" }),
  whoYouAre: z
    .string({ message: "Who You Are is required" })
    .min(10, { message: "Who You Are must be at least 10 characters" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be at least 1 benefit" }),
});

export const overviewFormSchema = z.object({
  image: z
    .any()
    .refine((item: any) => item.name, { message: "Image is required" }),
  name: z.string({ message: "Name is requried" }),
  website: z.string({ message: "Website is requried" }),
  location: z.string({ message: "Location is requried" }),
  employee: z.string({ message: "Employee is requried" }),
  industry: z.string({ message: "Industry is requried" }),
  dateFounded: z.date({ message: "Date Founded is requried" }),
  techStack: z
    .string({message: 'Tech stack is required'})
    .array()
    .nonempty({ message: "Tech stack must be at least 1 data" }),
  description: z.string({ message: "Description is required" }),
});
