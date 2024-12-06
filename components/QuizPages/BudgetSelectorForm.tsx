"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "../ui/slider";
import SectionTitle from "../static/SectionTitle";
import Link from "next/link";
import { useQuiz } from "@/context/QuizContext";

const BudgetSelectorForm = () => {
  const [range, setRange] = useState([20, 40]);
  const { bitStrings, updateBitStrings } = useQuiz();
  const [currentBudgetBitString, setCurrentBudgetBitString] = useState("");

  const getBudgetBitString = (max: number): string => {
    // Map the max value to a budget bit string
    if (max === 0) return "010000"; // Free
    if (max < 20) return "001000"; // Inexpensive
    if (max < 40) return "000100"; // Moderate
    if (max < 60) return "000010"; // Expensive
    if (max <= 100) return "000001"; // Very Expensive
    return "100000"; // Fallback, should not occur
  };

  useEffect(() => {
    const budgetBitString = getBudgetBitString(range[1]); // Use the upper range value

    // Only update context if the value changes
    if (budgetBitString !== currentBudgetBitString) {
      setCurrentBudgetBitString(budgetBitString);
      updateBitStrings("budget", budgetBitString);
      console.log("Updated budget bit string:", budgetBitString);
    }
  }, [range]);

  const handleRangeChange = (values: number[]) => {
    setRange(values);
  };

  return (
    <div className="w-full">
      <SectionTitle text="What's your budget?" classname=" mt-2 mb-8" />

      <div className="mb-12">
        <Slider
          defaultValue={[20, 40]}
          min={0}
          max={100}
          step={1}
          value={range}
          onValueChange={handleRangeChange}
          className="my-8"
        />

        <div className="flex justify-between mt-4">
          <div>
            <p className="text-sm text-gray-600">From:</p>
            <p className="text-lg font-medium">€ {range[0]}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">To:</p>
            <p className="text-lg font-medium">€ {range[1]}</p>
          </div>
        </div>
      </div>
      <Link href="/Completed">
        <Button>Next</Button>
      </Link>
    </div>
  );
};

export default BudgetSelectorForm;
