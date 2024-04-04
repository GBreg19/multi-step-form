import completeSvg from "@/assets/icons/icon-thank-you.svg";

const Confirmed = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-3 md:mt-28 mt-10">
      <img src={completeSvg} alt="complete icon" className="md:pb-5 pb-2 w-[60px] md:w-[80px]" />
      <h1 className="text-2xl md:text-4xl font-UbuntuBold text-primary-marineBlue">Thank you!</h1>
      <p className="font-UbuntuReg text-neutral-coolGray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Confirmed;
