"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ChangeEvent, type FC } from "react";

interface CustomUploadProps {
  form: any;
  name: string;
}

const CustomUpload: FC<CustomUploadProps> = ({ form, name }) => {
  const [previewImg, setPreviewImg] = useState<string>("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPreviewImg(URL.createObjectURL(e.target.files[0]));
      form.setValue(name, e.target.files[0]);
    }
  };

  const handleUploadFile = () => {
    inputRef.current?.click();
  };

  // useEffect(() => {
  //   async function getImage() {
  //     const urlImg = await supabaseGetPublicUrl(
  //       form.getValues(name),
  //       "company"
  //     );
  //     setPreviewImg(urlImg);
  //   }

  //   if(form.getValues(name) !== '') {
  //     getImage()
  //   }
  // }, []);

  return (
    <div className="inline-flex items-center gap-8">
      <div>
        {previewImg !== "" && (
          <Image height={120} width={120} src={previewImg} alt={previewImg} />
        )}
      </div>
      <div
        className="py-6 px-10 border-2 cursor-pointer border-bluePrimary border-dashed w-max rounded-sm"
        onClick={handleUploadFile}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-bluePrimary mx-auto mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16"
          />
        </svg>
        <div className="text-center">
          <span className="text-bluePrimary font-semibold">
            CLick to replace
          </span>
          <span className="text-gray-500">or drag and drop</span>
        </div>
        <div className="text-gray-600 text-sm">
          PNG, JPG, JPEG, (max. 400 X 400px)
        </div>
      </div>
      <input
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/jpg"
        ref={inputRef}
      />
    </div>
  );
};

export default CustomUpload;
