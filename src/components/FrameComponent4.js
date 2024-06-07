const FrameComponent = () => {
  return (
    <header className="self-stretch bg-limegreen-100 flex flex-row items-start justify-between pt-[33px] pb-[19px] pr-[43px] pl-12 box-border max-w-full gap-[20px] text-left text-31xl text-gray-01 font-poppins mq1350:pl-6 mq1350:pr-[21px] mq1350:box-border">
      <div className="h-32 w-[1920px] relative bg-limegreen-100 hidden max-w-full" />
      <h1 className="m-0 w-[593px] relative text-inherit font-extrabold font-inherit inline-block shrink-0 max-w-full z-[1]">
        <p className="m-0">WORKERS</p>
      </h1>
      <div className="w-[344px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-[60px] w-[60px] relative overflow-hidden shrink-0 min-h-[60px] z-[1]"
            loading="lazy"
            alt=""
            src="/flowbitehomesolid.svg"
          />
          <img
            className="h-[60px] w-[60px] relative overflow-hidden shrink-0 min-h-[60px] z-[1]"
            loading="lazy"
            alt=""
            src="/iconamoonprofilefill.svg"
          />
          <img
            className="h-[60px] w-[60px] relative overflow-hidden shrink-0 min-h-[60px] z-[1]"
            loading="lazy"
            alt=""
            src="/uilsignout.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
