"use client";
import { useState } from "react";
import TextInput from "@/components/textinput";
import Button from "@/components/button";

type FormData = {
  name: string;
  email: string;
  dateType: string;
  shootType: string;
  people: number;
  duration: number;
  notes: string;
  questions: string;
};

export default function Book() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    dateType: "--",
    shootType: "--",
    people: 0,
    duration: 0,
    notes: "",
    questions: "",
  });

  const handleNameChange = (newName: string) => {
    setFormData((prev) => ({ ...prev, name: newName }));
  };

  const handleEmailChange = (newEmail: string) => {
    setFormData((prev) => ({ ...prev, email: newEmail }));
  };

  const handleDateTypeChange = (newDateType: string) => {
    setFormData((prev) => ({ ...prev, dateType: newDateType }));
  };

  return (
    <>
      <div className="py-[calc(12px+4vw)] px-[calc(5px+10vw)] bg-bg2">
        <h2>ready to book?</h2>
        <h2>fill out the inquiry below!</h2>
        <div className="flex font-bold primary">
          I WILL REACH OUT WITHIN 5 BUSINESS DAYS
        </div>
      </div>
      <div className="flex flex-col py-[calc(12px+4vw)] px-[calc(5px+10vw)] bg-bg1">
        <TextInput
          type="text"
          label="Name"
          value={formData.name}
          doChange={handleNameChange}
        />
        <TextInput
          type="email"
          label="Email"
          value={formData.email}
          doChange={handleEmailChange}
        />
        <div>Date:</div>
        <select
          onChange={(e) => handleDateTypeChange(e.target.value)}
          value={formData.dateType}
          className="border-1 rounded-sm p-1 mb-2"
        >
          <option>--</option>
          <option>I have a date (or a few dates) in mind!</option>
          <option>My dates are flexible!</option>
        </select>
        <Button label="Submit"/>
      </div>
    </>
  );
}
