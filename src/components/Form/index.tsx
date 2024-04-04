import { Addons, Base, Confirmed, Plan, Summary } from "./widgets";
import useForm from "./Form.hooks";

const Form = () => {
  const {
    stepsData,
    operation,
    onNextStepHandler,
    onGoBackHandler,
    onSubmitHandler,
    baseErrors,
    setOperation,
    setIsConfirmed,
  } = useForm();

  return (
    <div className="md:w-1/2 w-full h-[550px] md:mt-[170px] m-auto rounded-lg md:shadow-xl md:p-4 relative md:static md:bg-neutral-white md:flex-row flex flex-col gap-20">
      <div
        className={`bg-center bg-no-repeat bg-cover md:w-[30%] w-full md:h-full md:rounded-lg md:bg-desktop bg-mobile`}
      >
        <ul className="md:ml-8 m-auto flex md:flex-col gap-5 md:pt-7 pt-10 pb-24 justify-center">
          {stepsData.map((data) => {
            const { button, step, title, operation: operationStep } = data;
            return (
              <li key={button} className="uppercase flex items-center gap-5">
                <button
                  className={`font-UbuntuMed border-[1px] text-sm w-8 h-8 rounded-full  ${
                    operation === operationStep
                      ? "bg-primary-lightBlue text-gray-900 border-transparent"
                      : "text-white border-white bg-transparent"
                  }`}
                >
                  {button}
                </button>
                <div className="flex-col hidden md:flex">
                  <p className="font-UbuntuReg text-gray-300 text-xs">{step}</p>
                  <h2 className="text-white font-UbuntuBold text-[14px]">
                    {title}
                  </h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="md:h-full md:flex md:flex-col md:justify-between md:pt-5 md:pb-2 md:w-[500px]">
          <div className="w-[90%] absolute left-1/2 -translate-x-1/2 bg-white px-6 py-10 rounded-lg md:block md:pt-0 md:pb-0 md:w-[500px] top-28 md:top-0 md:static md:left-0 md:-translate-x-0">
            {operation === "base" ? (
              <Base errors={baseErrors} />
            ) : operation === "plan" ? (
              <Plan />
            ) : operation === "addons" ? (
              <Addons />
            ) : operation === "summary" ? (
              <Summary setOperation={setOperation} />
            ) : operation === "confirmed" ? (
              <Confirmed />
            ) : null}
          </div>
          {operation !== "confirmed" && (
            <div
              className={`md:static absolute -bottom-[220px] md:bg-transparent bg-white w-full md:p-0 p-5 ${
                operation !== "base" && "flex items-center justify-between"
              }`}
            >
              {operation !== "base" && (
                <button
                  className="text-neutral-coolGray text-sm md:text-md font-UbuntuMed"
                  onClick={onGoBackHandler}
                >
                  Go back
                </button>
              )}
              {operation === "summary" ? (
                <button
                  type="submit"
                  className="md:px-7 md:py-3 px-4 py-2 bg-primary-purplishBlue text-white rounded-lg float-end"
                  onClick={() => setIsConfirmed(true)}
                >
                  Confirm
                </button>
              ) : (
                <button
                  type="button"
                  className="md:px-7 py-3 px-4 text-sm md:text-md bg-primary-marineBlue text-white md:rounded-lg rounded-md float-end"
                  onClick={onNextStepHandler}
                >
                  Next Step
                </button>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
