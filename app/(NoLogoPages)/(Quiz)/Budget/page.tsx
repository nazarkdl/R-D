"use client";

import React from "react";
import QuizHeader from "@/components/QuizPages/QuizHeader";
import BudgetSelectorForm from "@/components/QuizPages/BudgetSelectorForm";
import { QuizTransition } from "@/components/QuizPages/QuizTransition";
import SvgWave2 from "@/components/QuizPages/SvgWave2";

const Budget = () => {
  return (
    <div>
      <QuizHeader progress={88} returnLink="/Dessert" />
      <QuizTransition>
        <div className="flex justify-center">
          <BudgetSelectorForm />
        </div>
      </QuizTransition>
    </div>
  );
};

export default Budget;
