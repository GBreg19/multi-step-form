import { useFormStore } from "@/context/form";
import usePlan from "./Plan.hooks";

const Plan = () => {
  const { plan, pricing, setPlan, setPricing } = useFormStore((state) => state);
  const { planData } = usePlan();
  return (
    <div className="flex flex-col md:gap-8 gap-5">
      <div>
        <h1 className="text-2xl md:text-3xl font-UbuntuBold text-primary-marineBlue mb-2">
          Select your plan
        </h1>
        <p className="font-UbuntuReg text-neutral-coolGray">
          You have the option of montly or yearly billing
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <ul className="md:h-44 flex md:flex-row flex-col md:gap-5 gap-3">
          {planData.map((data) => {
            const {
              icon,
              title,
              pricing: { monthly, yearly },
            } = data;
            return (
              <li
                key={title}
                className={`hover:border-primary-purplishBlue ease-in transition-all border-[1px] flex md:flex-col md:justify-between md:gap-0 gap-4 md:p-4 p-3 md:w-36 w-full rounded-xl cursor-pointer ${
                  plan.title === title
                    ? "border-primary-purplishBlue bg-gray-100"
                    : ""
                }`}
                onClick={() => setPlan({ title, price: { monthly, yearly } })}
              >
                <img src={icon} width={40} alt="arcade icon" />
                <span className="flex flex-col gap-[3px]">
                  <h2 className="font-UbuntuMed text-primary-marineBlue capitalize">
                    {title}
                  </h2>
                  <p className="font-UbuntuReg text-neutral-coolGray text-sm">
                    {pricing === "monthly" ? `$${monthly}/mo` : `$${yearly}/yr`}
                  </p>
                  {pricing === "yearly" && (
                    <p className="text-xs text-primary-marineBlue font-UbuntuReg">
                      2 months free
                    </p>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="bg-neutral-lightGray bg-opacity-20 rounded-lg flex items-center gap-5 py-3 justify-center">
          <span
            className={`font-UbuntuMed text-sm text-neutral-coolGray ${
              pricing === "monthly" ? "text-primary-marineBlue" : ""
            }`}
          >
            Monthly
          </span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={() =>
                setPricing(pricing === "yearly" ? "monthly" : "yearly")
              }
            />
            <div className="relative w-9 h-5 bg-primary-marineBlue rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
          </label>
          <span
            className={`font-UbuntuMed text-sm text-neutral-coolGray ${
              pricing === "yearly" ? "text-primary-marineBlue" : ""
            }`}
          >
            Yearly
          </span>
        </div>
      </div>
    </div>
  );
};

export default Plan;
