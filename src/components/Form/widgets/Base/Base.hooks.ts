import { useFormStore } from "@/context/form";

const useBase = () => {
  const { setData } = useFormStore((state) => state);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ [name]: value });
  };

  return onChangeHandler;
};

export default useBase;
