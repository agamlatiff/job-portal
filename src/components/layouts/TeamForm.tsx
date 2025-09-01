import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import FieldInput from "./FieldInput";

const TeamForm = () => {
  return (
    <FieldInput
      title="Basic Information"
      subtitle="Add team members of your company"
    >
      <div className="w-[65%] mb-5">
        <div className="flex flex-row justify-between items-center">
          <div className="text-lg font-semibold">2 Members</div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-6 ">
          {[0, 1, 2].map((item: number) => (
            <div key={item} className="p-3 shadow text-center">
              <div className="size-14 rounded-full bg-gray-300 mx-auto"></div>
              <div className="mt-4 font-semibold">Agam</div>
              <div className="text-sm text-gray-500">CEO</div>
              <div className="mt-5 mx-auto inline-flex gap-3 text-gray-500">
                <AiFillInstagram className="size-4" />
                <AiFillLinkedin className="size-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
};

export default TeamForm;
