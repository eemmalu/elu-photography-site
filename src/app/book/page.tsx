"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

import TextInput from "@/components/textinput";
import Button from "@/components/button";

type FormData = {
  name: string;
  email: string;
  dateType: string;
  shootType: string;
  people: number;
  duration: string;
  location: string;
  notes: string;
  questions: string;
  submitted: boolean;
};

export default function Book() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    dateType: "--",
    shootType: "--",
    people: 1,
    duration: "1 hour ($80)",
    location: "",
    notes: "",
    questions: "",
    submitted: false,
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

  const handleShootTypeChange = (newShootType: string) => {
    setFormData((prev) => ({ ...prev, shootType: newShootType }));
  };

  const handlePeopleChange = (newPeople: string) => {
    setFormData((prev) => ({ ...prev, people: parseInt(newPeople) }));
  };

  const handleDurationChange = (newDuration: string) => {
    setFormData((prev) => ({ ...prev, duration: newDuration }));
  };

  const handleLocationChange = (newLocation: string) => {
    setFormData((prev) => ({ ...prev, location: newLocation }));
  };

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "inquiries"), formData);
      console.log("Document written with ID: ", docRef.id);
      setFormData((prev) => ({ ...prev, submitted: true }));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  if (formData.submitted) {
    return (
      <div className="py-[20vh] px-[calc(5px+10vw)] bg-bg2">
        <h2>thanks for your inquiry!</h2>
        <h2>keep an eye out on your email</h2>
        <div className="flex font-bold primary">
          I WILL REACH OUT WITHIN 5 BUSINESS DAYS
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="py-[calc(12px+4vw)] px-[calc(5px+10vw)] bg-bg2">
          <h2>ready to book?</h2>
          <h2>fill out the inquiry below!</h2>
          <div className="flex font-bold primary">
            I WILL REACH OUT WITHIN 5 BUSINESS DAYS
          </div>
        </div>

        <div className="flex flex-col gap-6 py-[calc(12px+4vw)] px-[calc(5px+10vw)] bg-bg1">
          {/* Name */}
          <TextInput
            type="text"
            label="Name"
            value={formData.name}
            doChange={handleNameChange}
          />

          {/* Email */}
          <TextInput
            type="email"
            label="Email"
            value={formData.email}
            doChange={handleEmailChange}
          />

          {/* Date Type */}
          <div>
            <div className="font-semibold">Date:</div>
            <select
              onChange={(e) => handleDateTypeChange(e.target.value)}
              value={formData.dateType}
              className="border-1 rounded-sm p-1 w-full"
            >
              <option>--</option>
              <option>I have a date (or a few dates) in mind</option>
              <option>My dates are flexible</option>
            </select>
          </div>

          {/* Shoot Type */}
          <div>
            <div className="font-semibold">Type of shoot:</div>
            <select
              onChange={(e) => handleShootTypeChange(e.target.value)}
              value={formData.shootType}
              className="border-1 rounded-sm p-1 w-full"
            >
              <option>--</option>
              <option>Senior/Grad</option>
              <option>Prom</option>
              <option>Other (please specify!)</option>
            </select>
          </div>

          {/* People Count */}
          <TextInput
            label="Number of people (in the photos—any number of friends/fam is welcome to watch)"
            type="number"
            value={formData.people}
            doChange={handlePeopleChange}
          />

          {/* Duration */}
          <div>
            <div className="font-semibold">Duration:</div>
            <select
              onChange={(e) => handleDurationChange(e.target.value)}
              value={formData.duration}
              className="border-1 rounded-sm p-1 w-full"
            >
              <option>1 hour ($80)</option>
              <option>1.5 hours ($120)</option>
              <option>2 hours ($160)</option>
            </select>
            <div>
              *Please note that these are base prices and do not include
              additional transportation time or add-on packages
            </div>
          </div>

          {/* Location */}
          <TextInput
            label="Location (if one in mind)"
            type="text"
            value={formData.location}
            doChange={handleLocationChange}
          />

          {/* Notes */}
          <div>
            <div className="font-semibold">Additional notes:</div>
            <textarea
              className="border-1 rounded-sm py-1 px-2 m-0 w-full"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, notes: e.target.value }));
              }}
              value={formData.notes}
            ></textarea>
          </div>

          {/* Questions */}
          <div>
            <div className="font-semibold">Questions:</div>
            <textarea
              className="border-1 rounded-sm py-1 px-2 m-0 w-full"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, questions: e.target.value }));
              }}
              value={formData.questions}
            ></textarea>
          </div>

          <Button label="Submit" className="mt-2" onClick={handleSubmit} />
        </div>
      </>
    );
  }
}
