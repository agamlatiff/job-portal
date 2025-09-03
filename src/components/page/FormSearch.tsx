import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

const FormSearch = () => {
  return (
    <>
      <div className="mt-6 bg-background p-4 shadow-nd inline-flex items-center gap-4 relative w-max z-10">
        <div className="inline-flex gap-3 items-center">
          <AiOutlineSearch className="size-6" />
          <Input
            className="py-8 w-[300px] border-none"
            placeholder="Job title or keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <IoLocationSharp className="size-6" />
          <Select>
            <SelectTrigger className="w-[300px] text-gray-500 py-8 outline-none border-none">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="py-8 px-10 text-lg">Search my job</Button>
        </div>
      </div>
      <div>
        <div className="text-muted-foreground mt-3">
          Populer: UI Designer, UX Researcher, Android, Admin
        </div>
      </div>
    </>
  );
};

export default FormSearch;
