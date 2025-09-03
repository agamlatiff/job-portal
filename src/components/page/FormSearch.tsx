import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "../ui/input";

const FormSearch = () => {
  return <div className="mt-6 bg-white p-4 shadow-sm inline-flex items-center gap-4 relative w-max z-10">
    <div className="inline-flex gap-3 items-center">
      <AiOutlineSearch className="size-6"/>
      <Input className="py-8 w-[300px] border-none" placeholder="Job title or keyword"/>
    </div>
  </div>;
};

export default FormSearch;
