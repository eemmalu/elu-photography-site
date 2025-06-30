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
        <TextInput label="Name" value={formData.name} doChange={handleNameChange}/>
        <TextInput label="Email" value={formData.email} doChange={handleEmailChange}/>
      </div>
    </>
  );
}
