const RouteSearch = () => {
  return (
    <div className="self-stretch [backdrop-filter:blur(14px)] rounded-mini bg-gray-700 flex flex-row flex-wrap items-start justify-start pt-[29.1px] pb-[34.9px] pr-[69.9px] pl-[109px] box-border relative gap-[52px] max-w-full z-[3] text-left text-11xl text-white font-roboto mq850:gap-[26px] mq850:pl-[27px] mq850:box-border mq1225:pl-[54px] mq1225:pr-[35px] mq1225:box-border">
      <div className="h-[214.1px] w-[1251px] relative [backdrop-filter:blur(14px)] rounded-mini bg-gray-700 hidden max-w-full z-[0]" />
      <img
        className="h-[144.2px] w-[51px] relative z-[1]"
        loading="lazy"
        alt=""
        src="/travel-icon.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[630px] max-w-full mq1525:min-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-[16.7px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12.8px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="w-[426px] relative inline-block shrink-0 max-w-[calc(100%_-_31px)] z-[1] mq450:text-lg mq850:text-5xl">
                Your location
              </div>
              <div className="flex flex-col items-start justify-start pt-[14.8px] px-0 pb-0">
                <img
                  className="w-[11px] h-[31.4px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/ellipses.svg"
                />
              </div>
            </div>
            <div className="w-[929.6px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
              <img
                className="h-[9.3px] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/line.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="w-[805.8px] flex flex-col items-start justify-start pt-[13.6px] px-0 pb-0 box-border max-w-[calc(100%_-_27px)]">
              <div className="self-stretch h-[46.5px] relative whitespace-pre-wrap inline-block shrink-0 z-[1] mq450:text-lg mq850:text-5xl">
                Near Dry-Zones
              </div>
            </div>
            <img
              className="h-[33px] w-[7px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/swap-icon@2x.png"
            />
          </div>
        </div>
      </div>
      <img
        className="h-[296px] w-[329px] absolute !m-[0] right-[-174px] bottom-[-295.9px] object-contain z-[4]"
        loading="lazy"
        alt=""
      />
    </div>
  );
};

export default RouteSearch;
