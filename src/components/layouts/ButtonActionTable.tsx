'use client'

import { type FC } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { MoreVertical } from "lucide-react";

interface ButtonActionTableProps {
  url: string;
}

const ButtonActionTable : FC<ButtonActionTableProps> = ({url}) => {
  const router = useRouter()
  
  return (
    <Button
      onClick={() => router.push(url)}
      size={"icon"}
      variant={"outline"}
    >
      <MoreVertical className="w-4 h-4" />
    </Button>
  );
};

export default ButtonActionTable;
