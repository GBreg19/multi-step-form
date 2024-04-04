import { useFormStore } from "@/context/form";
import useBase from "./Base.hooks";

interface Props {
  errors: Record<string, string>;
}

const Base: React.FC<Props> = ({ errors }) => {
  const onChangeHandler = useBase();
  const { name, email, phone } = useFormStore((state) => state);
  return (
    <div className="flex flex-col md:gap-8 gap-5">
      <div>
        <h1 className="text-2xl md:text-3xl font-UbuntuBold text-primary-marineBlue mb-2">
          Personal info
        </h1>
        <p className="font-UbuntuReg text-neutral-coolGray">
          Please provide your name, email address, and phone number
        </p>
      </div>
      <div className="flex flex-col md:gap-5 gap-4 mb-14 text-primary-marineBlue">
        <span className="flex flex-col gap-1">
          <span className="flex justify-between items-center">
            <label className="font-UbuntuReg md:text-sm text-xs">Name</label>
            {errors.name && <p className="font-UbuntuMed text-primary-strawberryRed text-xs md:text-sm">{errors.name}</p>}
          </span>
          <input
            className="w-full md:py-[11px] py-[7px] outline-none border-[1px] border-gray-300 md:rounded-lg rounded-md text-sm md:text-md pl-4 font-UbuntuMed"
            placeholder="e.g. Stephen King"
            type="text"
            name="name"
            value={name}
            onChange={(e) => onChangeHandler(e)}
          />
        </span>
        <span className="flex flex-col gap-1">
        <span className="flex justify-between items-center">
          <label className="font-UbuntuReg md:text-sm text-xs">Email Address</label>
          {errors.email && <p className="font-UbuntuMed text-primary-strawberryRed text-xs md:text-sm">{errors.email}</p>}
          </span>
          <input
            className="w-full md:py-[11px] py-[7px] outline-none border-[1px] border-gray-300 md:rounded-lg rounded-md text-sm md:text-md pl-4 font-UbuntuMed"
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChangeHandler(e)}
          />
        </span>
        <span className="flex flex-col gap-1">
        <span className="flex justify-between items-center">
          <label className="font-UbuntuReg md:text-sm text-xs">Phone Number</label>
          {errors.phone && <p className="font-UbuntuMed text-primary-strawberryRed text-xs md:text-sm">{errors.phone}</p>}
          </span>
          <input
            className="w-full md:py-[11px] py-[7px] outline-none border-[1px] border-gray-300 md:rounded-lg rounded-md text-sm md:text-md pl-4 font-UbuntuMed"
            placeholder="e.g. +1 234 567 890"
            type="number"
            name="phone"
            value={phone}
            onChange={(e) => onChangeHandler(e)}
          />
        </span>
      </div>
    </div>
  );
};

export default Base;
