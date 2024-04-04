import { create } from "zustand";

export type Plan = "arcade" | "advanced" | "pro";
export type Pricing = "monthly" | "yearly";
type AddOns = "Online Service" | "Larger storage" | "Customizable profile";

export interface Addon  {
  title: AddOns,
  descr: string,
  pricing: { monthly: string; yearly: string }
}

interface InitialState {
  name: string;
  email: string;
  phone: string;
  plan: {
    title: Plan;
    price: {
      monthly: string;
      yearly: string;
    };
  };
  pricing: Pricing;
  addons: Addon[];
}

interface Actions {
  setData: (data: Partial<InitialState>) => void;
  setPlan: (plan: { title: Plan; price: { monthly: string; yearly: string } }) => void;
  setPricing: (pricing: Pricing) => void;
}

const initialState: InitialState = {
  name: "",
  email: "",
  phone: "",
  plan: {
    title: "arcade",
    price: {
      monthly: "9",
      yearly: "90",
    },
  },
  pricing: "monthly",
  addons: [],
};

export const useFormStore = create<InitialState & Actions>((set) => ({
  ...initialState,
  setData: (formData) => set((state) => ({ ...state, ...formData })),
  setPlan: (plan) =>
    set((state) => ({
      ...state,
      plan,
    })),
  setPricing: (pricing) =>
    set((state) => ({
      ...state,
      pricing,
    })),
}));
