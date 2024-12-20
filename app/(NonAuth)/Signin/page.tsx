import SignupForm from "@/components/signup/SignupForm";
import AuthLink from "@/components/static/AuthLink";
import SectionTitle from "@/components/static/SectionTitle";
import React from "react";

// type Props = {};

const Signin = () => {
  return (
    <div>
      <SectionTitle classname="mt-20  mb-5" text="Welcome back !" />
      <SignupForm mode="Signin" />
      <AuthLink
        text="Don't have an account yet ?"
        href="Signup"
        signinup="Signup"
        classname=" mt-8"
      />
    </div>
  );
};

export default Signin;
