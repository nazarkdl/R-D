import Signup2Form from "@/components/signup2/Signup2Form";
import SectionTitle from "@/components/static/SectionTitle";
import React from "react";

// type Props = {};

const page = () => {
  return (
    <div className="gap-20">
      <SectionTitle classname="mt-20  mb-5" text="Who is eating ? " />
      <Signup2Form />
    </div>
  );
};

export default page;
