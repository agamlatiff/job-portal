import type { FC } from "react";
import { Form } from "../ui/form";
import CheckboxForms from "./CheckboxForms";
import type { filterFormType } from "@/app/types";
import { Button } from "../ui/button";

interface FormFilterDynamicProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void> | undefined;
  filterForms: filterFormType[];
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
  formFilter,
  onSubmitFilter,
  filterForms,
}) => {
  return (
    <Form {...formFilter}>
      <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
        {filterForms.map((item: filterFormType, i: number) => (
          <CheckboxForms
            formFilter={formFilter}
            items={item.items}
            label={item.label}
            name="categories"
            key={i}
          />
        ))}
        <Button className="mt-5 w-full">Apply Filter</Button>
        <Button className="mt-3 w-full" variant={'outline'}>Reset Filter</Button>
      </form>
    </Form>
  );
};

export default FormFilterDynamic;
