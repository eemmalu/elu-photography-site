"use client";
import { useState } from "react";
import TextInput from "@/components/textinput";

type Shoots =
  | undefined
  | { kind: "Senior/Grad" }
  | { kind: "Engagement" }
  | { kind: "Prom" }
  | { kind: "Other"; details: string };

type FormData = {
  name: string;
  email: string;
  dateType: string;
  dateFlexible: boolean | undefined;
  shootType: Shoots;
  people: number;
  duration: number;
  notes: string;
  questions: string;
};

export default function Book() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    dateType: "",
    dateFlexible: undefined,
    shootType: undefined,
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
    if (newDateType == "--") {
      setFormData((prev) => ({ ...prev, dateFlexible: undefined }));
    } else if (newDateType == "I have a date (or a few dates) in mind!") {
      setFormData((prev) => ({ ...prev, dateFlexible: false }));
    } else if (newDateType == "My dates are flexible!") {
      setFormData((prev) => ({ ...prev, dateFlexible: true }));
    }
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
          label="Name"
          value={formData.name}
          doChange={handleNameChange}
        />
        <TextInput
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
      </div>
    </>
  );
}
