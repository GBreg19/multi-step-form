import { useFormStore } from "@/context/form";
import { Dispatch, SetStateAction } from "react";
import { Operation } from "../../Form.hooks";

interface Props {
  setOperation: Dispatch<SetStateAction<Operation>>;
}

const Summary: React.FC<Props> = ({ setOperation }) => {
  const { plan, pricing, addons } = useFormStore((state) => state);
  const monthlyPlan = pricing === 'monthly'

  const totalPlanPrice = monthlyPlan ? parseFloat(plan.price.monthly) : parseFloat(plan.price.yearly);
  const totalAddonsPrice = addons.reduce((acc, addon) => {
    const addonPrice = monthlyPlan ? parseFloat(addon.pricing.monthly) : parseFloat(addon.pricing.yearly);
    return acc + addonPrice;
  }, 0);
  const totalPrice = totalPlanPrice + totalAddonsPrice;

  return (
    <div className="flex flex-col md:gap-8 gap-5">
      <div>
        <h1 className="text-2xl md:text-3xl font-UbuntuBold text-primary-marineBlue mb-2">
          Finishing up
        </h1>
        <p className="font-UbuntuReg text-neutral-coolGray">
          Double-check everything looks OK before confirming
        </p>
      </div>
      <div className='bg-neutral-lightGray bg-opacity-20 p-5 rounded-lg'>
        <div className="flex justify-between items-center border-b-[1px] pb-4">
          <span className="capitalize font-UbuntuMed text-sm md:text-md text-primary-marineBlue">
            {plan.title} ({pricing})
            <p
              className="text-sm text-neutral-coolGray underline cursor-pointer hover:text-primary-purplishBlue ease-in transition"
              onClick={() => setOperation("plan")}
            >
              change
            </p>
          </span>
          <span className="font-UbuntuBold text-sm md:text-md text-primary-marineBlue">
            {monthlyPlan ? `$${plan.price.monthly}/mo` : `$${plan.price.yearly}/yr`}
          </span>
        </div>
        <div className="pt-4">
          <ul className="flex flex-col gap-3">
            {addons &&
              addons.map((addon) => {
                return (
                  <li key={addon.title} className="flex justify-between items-center">
                    <span className="text-sm text-neutral-coolGray cursor-pointer font-UbuntuReg">{addon.title}</span>
                    <span className="text-sm">
                      {monthlyPlan
                        ? `+$${addon.pricing.monthly}/mo`
                        : `+$${addon.pricing.yearly}/yr`}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="px-5 flex items-center justify-between">
          <p className="text-sm text-neutral-coolGray cursor-pointer font-UbuntuReg">Total (per {monthlyPlan ? 'month' : 'year'})</p>
          <p className="text-md md:text-xl font-UbuntuBold text-primary-purplishBlue">{`${monthlyPlan ? `$${totalPrice}/mo` : `$${totalPrice}/yr`}`}</p>
      </div>
    </div>
  );
};

export default Summary;
