type TextInputProps = {
  label: string;
  type: string;
  value: string | number;
  doChange: (newValue: string) => void;
};

export default function TextInput({ label, type, value, doChange }: TextInputProps) {
  return (
    <div>
      <div className="font-semibold">{label}:</div>
      <input
        type={type}
        value={value}
        onChange={(e) => {doChange(e.target.value)}}
        className="border-1 rounded-sm py-1 px-2 m-0 w-full bg-bg1"
      ></input>
    </div>
  );
}
