import { useFormStore } from "@/context/form";
import { FormEvent, useState } from "react";

export type Operation = "base" | "plan" | "addons" | "summary" | "confirmed";

interface StepsDataType {
  button: string;
  step: string;
  title: string;
  operation: Operation;
}

const useForm = () => {
  const stepsData: StepsDataType[] = [
    {
      button: "1",
      step: "step 1",
      title: "your info",
      operation: "base",
    },
    {
      button: "2",
      step: "step 2",
      title: "select plan",
      operation: "plan",
    },
    {
      button: "3",
      step: "step 3",
      title: "add-ons",
      operation: "addons",
    },
    {
      button: "4",
      step: "step 4",
      title: "summary",
      operation: "summary",
    },
  ];

  const { name, email, phone } = useFormStore((state) => state);
  const state = useFormStore()

  const [operation, setOperation] = useState<Operation>("base");
  const [baseErrors, setbaseErrors] = useState<Record<string, string>>({});
  const [isConfirmed, setIsConfirmed] = useState(false);

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\+?\d{0,3}[\s-]?\d{3,}$/;
    return phoneRegex.test(phone);
  };

  const checkBaseErrors = () => {
    const newBaseErrors: Record<string, string> = {};
    if (!name) {
      newBaseErrors.name = "Name is required";
    } else if (name.length < 3) {
      newBaseErrors.name = "Name should be at least 3 characters";
    }
    if (!email) {
      newBaseErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newBaseErrors.email = "Invalid email format";
    }
    if (!phone) {
      newBaseErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(phone)) {
      newBaseErrors.phone = "Invalid phone number format";
    }

    if (Object.keys(newBaseErrors).length > 0) {
      setbaseErrors(newBaseErrors);
      return;
    }

    setbaseErrors({});
    setOperation("plan");
  };

  const onNextStepHandler = () => {
    if (operation === "base") {
      checkBaseErrors();
    }

    if (operation === "plan") {
      setOperation("addons");
    }

    if (operation === "addons") {
      setOperation("summary");
    }
  };

  const onGoBackHandler = () => {
    if (operation === "plan") {
      setOperation("base");
    }
    if (operation === "addons") {
      setOperation("plan");
    }
    if (operation === "summary") {
      setOperation("addons");
    }
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (isConfirmed) {
      setOperation("confirmed");
    }
  };

  return {
    stepsData,
    operation,
    onNextStepHandler,
    onGoBackHandler,
    onSubmitHandler,
    baseErrors,
    setOperation,
    setIsConfirmed,
  };
};
export default useForm;
