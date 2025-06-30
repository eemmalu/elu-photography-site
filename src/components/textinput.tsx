import { ChangeEvent } from "react";

type TextInputProps = {
  label: string;
  value: string;
  doChange: (newValue: string) => void;
};

export default function TextInput({ label, value, doChange }: TextInputProps) {
  return (
    <>
      <div>{label}:</div>
      <input
        type="text"
        value={value}
        onChange={(e) => {doChange(e.target.value)}}
        className="border-1 rounded-sm p-1 mb-2"
      ></input>
    </>
  );
}
