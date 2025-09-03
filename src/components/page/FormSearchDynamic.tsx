import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "../ui/input";
import { IoLocationSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const FormSearchDynamic = () => {
  return (
    <div className="mx-auto w-max">
      <div className="bg-background p-4 shadow-nd inline-flex items-center gap-4 relative w-max z-10 text-center">
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
          <Button>Search</Button>
        </div>
      </div>
      <div>
        <div className="text-muted-foreground mt-3">
          Populer: UI Designer, UX Researcher, Android, Admin
        </div>
      </div>
    </div>
  );
};

export default FormSearchDynamic;
