import { Addon, useFormStore } from "@/context/form";

const useAddons = () => {
  const { addons, setData } = useFormStore((store) => store);
  const addonsData: Addon[] = [
    {
      title: "Online Service",
      descr: "Access to multiplayer games",
      pricing: {
        monthly: "1",
        yearly: "10",
      },
    },
    {
      title: "Larger storage",
      descr: "Extra 1TB of cloud save",
      pricing: {
        monthly: "2",
        yearly: "20",
      },
    },
    {
      title: "Customizable profile",
      descr: "Custom theme on your profile",
      pricing: {
        monthly: "2",
        yearly: "20",
      },
    },
  ];

  const checkBoxHandler = (addon: Addon) => {
    const isSelected = addons.some((a) => a.title === addon.title);
    const updatedAddons = isSelected
      ? addons.filter((a) => a.title !== addon.title)
      : [...addons, addon];
    setData({ addons: updatedAddons });
  };

  return { addonsData, checkBoxHandler };
};

export default useAddons;
