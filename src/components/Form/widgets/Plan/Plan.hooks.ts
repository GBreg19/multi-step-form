import arcadeSvg from "@/assets/icons/icon-arcade.svg";
import advancedSvg from "@/assets/icons/icon-advanced.svg";
import proSvg from "@/assets/icons/icon-pro.svg";
import { Plan } from "@/context/form";

interface PlanType {
  icon: string;
  title: Plan;
  pricing: { monthly: string; yearly: string };
}

const usePlan = () => {
    
  const planData: PlanType[] = [
    {
      icon: arcadeSvg,
      title: "arcade",
      pricing: {
        monthly: "9",
        yearly: "90",
      },
    },
    {
      icon: advancedSvg,
      title: "advanced",
      pricing: {
        monthly: "12",
        yearly: "120",
      },
    },
    {
      icon: proSvg,
      title: "pro",
      pricing: {
        monthly: "15",
        yearly: "150",
      },
    },
  ];

  return { planData };
};

export default usePlan;
