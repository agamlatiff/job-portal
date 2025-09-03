import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import FieldInput from "./FieldInput";
import DialogAddTeam from "./DialogAddTeam";
import type { CompanyTeam } from "@prisma/client";
import type { FC } from "react";

interface TeamFormProps {
  teams: CompanyTeam[] | undefined;
}

const TeamForm: FC<TeamFormProps> = ({ teams }) => {
  return (
    <FieldInput
      title="Basic Information"
      subtitle="Add team members of your company"
    >
      <div className="w-[65%] mb-5">
        <div className="flex flex-row justify-between items-center">
          <div className="text-lg font-semibold">{teams?.length} Members</div>
          <DialogAddTeam />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-6 ">
          {teams?.map((item: CompanyTeam) => (
            <div key={item.id} className="p-3 shadow text-center">
              <div className="size-14 rounded-full bg-gray-300 mx-auto"></div>
              <div className="mt-4 font-semibold">{item.name}</div>
              <div className="text-sm text-gray-500">{item.position}</div>
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
