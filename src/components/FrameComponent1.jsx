const FrameComponent1 = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full text-left text-15xl text-limegreen-100 font-ui-16-semi">
      <div className="relative font-medium mq450:text-xl mq950:text-8xl">
        Username
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full text-3xl-4 text-gray-03">
        <div className="flex-1 flex flex-row items-start justify-start pt-[22.4px] px-[22.4px] pb-[20.6px] box-border relative max-w-full">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[11.18px] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/bg.svg"
          />
          <div className="relative font-medium inline-block min-w-[63px] z-[1] mq450:text-lg">
            Name
          </div>
          <div className="self-stretch w-[60px] relative font-medium text-green-primary text-right hidden z-[2] mq450:text-lg">
            Show
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[16px]">
        <div className="w-[109px] relative font-medium inline-block mq450:text-xl mq950:text-8xl">
          Email
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-[22.4px] px-[22.4px] pb-[20.6px] relative text-3xl-4 text-gray-03">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[11.18px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bg.svg"
          />
          <div className="relative font-medium inline-block min-w-[58px] z-[1] mq450:text-lg">
            Email
          </div>
          <div className="self-stretch w-[60px] relative font-medium text-green-primary text-right hidden z-[2] mq450:text-lg">
            Show
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="w-[173px] relative font-medium inline-block mq450:text-xl mq950:text-8xl">
          Password
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-[22.4px] px-[22.4px] pb-[20.6px] relative gap-[20px] text-base text-gray-03 mq450:flex-wrap">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[11.18px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bg.svg"
          />
          <div className="w-[105px] relative font-medium inline-block z-[1]">
            Password
          </div>
          <div className="relative text-3xl-4 font-medium text-limegreen-100 text-right inline-block min-w-[60px] z-[1] mq450:text-lg">
            Show
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
