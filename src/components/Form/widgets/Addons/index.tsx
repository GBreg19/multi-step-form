import { useFormStore } from "@/context/form";
import useAddons from "./Addons.hooks";

const Addons = () => {
  const { addonsData, checkBoxHandler } = useAddons();
  const { pricing, addons } = useFormStore((store) => store);
  return (
    <div className="flex flex-col md:gap-8 gap-5">
      <div>
        <h1 className="text-2xl md:text-3xl  font-UbuntuBold text-primary-marineBlue mb-2">
          Pick add-ons
        </h1>
        <p className="font-UbuntuReg text-neutral-coolGray">
          Add-ons help enhance your gaming experience
        </p>
      </div>
      <ul className="flex flex-col gap-4">
        {addonsData.map((addon) => {
          const {
            title,
            descr,
            pricing: { monthly, yearly },
          } = addon;
          const isSelected = addons.some((a) => a.title === title);
          return (
            <li
              key={title}
              className={`flex items-center justify-between border-[1px] border-gray-300 md:p-4 p-3 rounded-lg ${
                isSelected ? "border-primary-purplishBlue bg-gray-100" : ""
              }`}
            >
              <span className="flex md:gap-10 gap-4">
                <input
                  type="checkbox"
                  className="w-5 border-[1px] border-neutral-coolGray cursor-pointer"
                  checked={isSelected}
                  onChange={() => checkBoxHandler(addon)}
                />
                <span>
                  <h3 className="text-sm md:text-md font-UbuntuMed text-primary-marineBlue">
                    {title}
                  </h3>
                  <p className="font-UbuntuReg md:text-sm text-xs text-neutral-coolGray">
                    {descr}
                  </p>
                </span>
              </span>
              <p className="md:text-sm text-xs font-UbuntuReg text-primary-purplishBlue">
                {pricing === "monthly" ? `+$${monthly}/mo` : `+$${yearly}/yr`}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Addons;
