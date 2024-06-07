const FrameComponent2 = () => {
  return (
    <header className="w-[1071px] flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border gap-[37px] max-w-full text-left text-15xl text-limegreen-100 font-ui-16-semi mq700:gap-[18px]">
      <div className="w-[1015px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-22xl-9">
        <div className="w-[165px] relative font-extrabold inline-block shrink-0">
          LOGIN
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1.5 pr-0 pl-2 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
          <div className="w-[127px] relative font-medium inline-block">
            Email
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-[22.4px] px-[22.4px] pb-[20.6px] relative text-3xl-4 text-gray-03">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[11.18px] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/bg.svg"
            />
            <div className="relative font-medium inline-block min-w-[58px] z-[1]">
              Email
            </div>
            <div className="self-stretch w-[60px] relative font-medium text-green-primary text-right hidden z-[2]">
              Show
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
        <div className="w-[203px] flex flex-row items-start justify-start py-0 px-2 box-border">
          <div className="flex-1 relative font-medium">Password</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-[22.4px] px-[22.4px] pb-[20.6px] relative gap-[20px] text-base text-gray-03">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[11.18px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bg.svg"
          />
          <div className="w-[105px] relative font-medium inline-block z-[1]">
            Password
          </div>
          <div className="relative text-3xl-4 font-medium text-limegreen-100 text-right inline-block min-w-[60px] z-[1]">
            Show
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
