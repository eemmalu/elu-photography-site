type TextInputProps = {
  label: string;
  type: string;
  value: string;
  doChange: (newValue: string) => void;
};

export default function TextInput({ label, type, value, doChange }: TextInputProps) {
  return (
    <>
      <div>{label}:</div>
      <input
        type={type}
        value={value}
        onChange={(e) => {doChange(e.target.value)}}
        className="border-1 rounded-sm p-1 mb-2"
      ></input>
    </>
  );
}
