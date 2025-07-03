"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

import Button from "@/components/button";

type FormData = {
  name: string;
  email: string;
  date: { kind: string; details: string };
  shootType: { kind: string; other: string };
  people: number;
  duration: string;
  location: string;
  notes: string;
  questions: string;
  incompleteMsg: string;
  submitted: boolean;
};

export default function Book() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    date: { kind: "--", details: "" },
    shootType: { kind: "--", other: "" },
    people: 1,
    duration: "1 hour ($80)",
    location: "",
    notes: "",
    questions: "",
    incompleteMsg: "",
    submitted: false,
  });

  // Submitting the inquiry
  const handleSubmit = async () => {
    if (formData.name == "") {
      setFormData((prev) => ({
        ...prev,
        incompleteMsg: "Please provide a name",
      }));
      return;
    } else if (formData.email == "") {
        setFormData((prev) => ({
        ...prev,
        incompleteMsg: "Please provide an email",
      }));
      return;
    } else if (formData.date.kind == "--" || formData.date.details == "") {
        setFormData((prev) => ({
        ...prev,
        incompleteMsg: "Please specify date",
      }));
      return;
    } else if (formData.shootType.kind == "--" || (formData.shootType.kind == "Other" && formData.shootType.other == "")) {
        setFormData((prev) => ({
        ...prev,
        incompleteMsg: "Please specify shoot type",
      }));
      return;
    }


    try {
      const docRef = await addDoc(collection(db, "inquiries"), formData);
      console.log("Document written with ID: ", docRef.id);
      setFormData((prev) => ({ ...prev, submitted: true }));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Conditional render for date details
  let dateDetails;
  if (formData.date.kind === "I have a date (or a few dates) in mind") {
    dateDetails = (
      <div>
        <div className="font-semibold">
          Please list the dates (month/day/year) with available time ranges:
        </div>
        <input
          type="text"
          value={formData.date.details}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              date: { kind: formData.date.kind, details: e.target.value },
            }));
          }}
          className="border-1 rounded-sm py-1 px-2 m-0 w-full bg-bg1"
        ></input>
      </div>
    );
  } else if (formData.date.kind === "My dates are flexible") {
    dateDetails = (
      <div>
        <div className="font-semibold">
          Please provide available days of the week and the time ranges + any
          additional details:
        </div>
        <textarea
          value={formData.date.details}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              date: { kind: formData.date.kind, details: e.target.value },
            }));
          }}
          className="border-1 rounded-sm py-1 px-2 m-0 w-full bg-bg1"
        ></textarea>
      </div>
    );
  } else {
    dateDetails = null;
  }

  // Conditional render for shoot type
  let shootDetails;
  if (
    formData.shootType.kind != "--" &&
    formData.shootType.kind != "Senior/Grad" &&
    formData.shootType.kind != "Prom"
  ) {
    shootDetails = (
      <div>
        <div className="font-semibold">Please specify:</div>
        <input
          type="text"
          value={formData.shootType.other}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              shootType: {
                kind: formData.shootType.kind,
                other: e.target.value,
              },
            }));
          }}
          className="border-1 rounded-sm py-1 px-2 m-0 w-full bg-bg1"
        ></input>
      </div>
    );
  } else {
    shootDetails = null;
  }

  // Already submitted
  if (formData.submitted) {
    return (
      <div className="py-[20vh] px-[calc(5px+10vw)]">
        <h2>thanks for your inquiry!</h2>
        <h2>keep an eye out on your email</h2>
        <div className="flex font-bold primary">
          I WILL REACH OUT WITHIN 5 BUSINESS DAYS
        </div>
      </div>
    );
  }

  // Not submitted - show form
  else {
    return (
      <>
        <div className="py-[calc(12px+4vw)] px-[calc(5px+10vw)]">
          <h2>ready to book?</h2>
          <h2>fill out the inquiry below!</h2>
          <div className="flex font-bold primary">
            I WILL REACH OUT WITHIN 5 BUSINESS DAYS
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-[calc(12px+4vw)] px-[calc(5px+10vw)]">
          {/* Name */}
          <div>
            <div className="font-semibold">Name:</div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, name: e.target.value }));
              }}
              className="border-1 rounded-sm py-1 px-2 m-0 w-full bg-bg1"
            ></input>
          </div>

          {/* Email */}
          <div>
            <div className="font-semibold">Email:</div>
            <input
              type="text"
              value={formData.email}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
              }}
              className="border-1 rounded-sm py-1 px-2 m-0 w-full bg-bg1"
            ></input>
          </div>

          {/* Date Type */}
          <div>
            <div className="font-semibold">Date:</div>
            <select
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  date: {
                    kind: e.target.value,
                    details: "",
                  },
                }))
              }
              value={formData.date.kind}
              className="border-1 rounded-sm p-1 w-full bg-bg1"
            >
              <option>--</option>
              <option>I have a date (or a few dates) in mind</option>
              <option>My dates are flexible</option>
            </select>
          </div>

          {/* Date Details */}
          {dateDetails}

          {/* Shoot Type */}
          <div>
            <div className="font-semibold">Type of shoot:</div>
            <select
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  shootType: {
                    kind: e.target.value,
                    other: "",
                  },
                }))
              }
              value={formData.shootType.kind}
              className="border-1 rounded-sm p-1 w-full bg-bg1"
            >
              <option>--</option>
              <option>Senior/Grad</option>
              <option>Prom</option>
              <option>Other</option>
            </select>
          </div>

          {/* Shoot Details */}
          {shootDetails}

          {/* People Count */}
          <div>
            <div className="font-semibold">Number of people:</div>
            <input
              type="number"
              value={formData.people}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  people: parseInt(e.target.value),
                }));
              }}
              className="border-1 rounded-sm py-1 px-2 m-0 w-full bg-bg1"
            ></input>
            <div>
              (Participating in the photos—any number of friends/fam is welcome
              to watch)
            </div>
          </div>

          {/* Duration */}
          <div>
            <div className="font-semibold">Duration:</div>
            <select
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  duration: e.target.value,
                }))
              }
              value={formData.duration}
              className="border-1 rounded-sm p-1 w-full bg-bg1"
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
          <div>
            <div className="font-semibold">Location (if one in mind):</div>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  location: e.target.value,
                }));
              }}
              className="border-1 rounded-sm py-1 px-2 m-0 w-full bg-bg1"
            ></input>
          </div>

          {/* Notes */}
          <div>
            <div className="font-semibold">Additional notes:</div>
            <textarea
              className="border-1 rounded-sm py-1 px-2 m-0 w-full bg-bg1"
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
              className="border-1 rounded-sm py-1 px-2 m-0 w-full bg-bg1"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, questions: e.target.value }));
              }}
              value={formData.questions}
            ></textarea>
          </div>

          <Button label="Submit" className="mt-2" onClick={handleSubmit} />
          {formData.incompleteMsg != "" ? (
            <div>**{formData.incompleteMsg}</div>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}
