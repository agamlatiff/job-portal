"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { formApplySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import UploadField from "./UploadField";
import { useSession } from "next-auth/react";
import { string } from "zod";
import type { FC } from "react";

interface FormModalApplyProps {
  image: string | undefined;
  roles: string | undefined;
  location: string | undefined;
  jobType: string | undefined;
}

const FormModalApply: FC<FormModalApplyProps> = ({
  image,
  roles,
  location,
  jobType,
}) => {
  const form = useForm<z.infer<typeof formApplySchema>>({
    resolver: zodResolver(formApplySchema),
  });

  const onSubmit = (val: z.infer<typeof formApplySchema>) => {
    console.log(val);
  };

  const { data: session } = useSession();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {session ? (
          <Button size={"lg"} className="text-lg px-12 py-6">
            Apply
          </Button>
        ) : (
          <Button
            size={"lg"}
            variant={"outline"}
            disabled
            className="text-lg px-12 py-6"
          >
            Sign In First
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div>
          <div className="inline-flex items-center gap-4">
            <div>
              <Image
                src={image!!}
                alt="image"
                width={60}
                height={60}
              />
            </div>

            <div>
              <div className="text-lg font-semibold">
                {roles}
              </div>
              <div className="text-gray-500">
               {location} . {jobType}
              </div>
            </div>
          </div>

          <Separator className="my-5" />
          <div className="font-semibold text-lg">Submit your application</div>
          <div className="text-gray-500 text-sm mt-2">
            The following is required and will only be shared with Nomad
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your fullname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="previousJobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current of previous job title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What's your current or previous job"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator />
            <h2 className="font-semibold">LINKS</h2>

            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="linkedIn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Link to your linked URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="portfolio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Link to your portfolio URL"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add a cover letter or anything else you want to share"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <UploadField form={form} />

            <Button className="w-full">Submit Application</Button>

            <div></div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FormModalApply;
