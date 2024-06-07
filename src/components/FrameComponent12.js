import ContentMarketBlock from "./ContentMarketBlock";

const FrameComponent1 = () => {
  return (
    <footer className="w-[1887.6px] flex-1 overflow-x-auto flex flex-row items-end justify-start gap-[32.7px] max-w-full text-left text-9xl-4 text-gray-01 font-ui-16-semi mq850:gap-[16px]">
      <ContentMarketBlock />
      <ContentMarketBlock />
      <ContentMarketBlock />
      <ContentMarketBlock />
      <ContentMarketBlock />
      <ContentMarketBlock />
      <ContentMarketBlock />
      <div className="self-stretch w-[223.1px] shrink-0 flex flex-col items-start justify-end pt-0 px-0 pb-[1.1px] box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 pb-[0.5px] pr-px pl-0 gap-[16.7px]">
          <div className="self-stretch flex-1 relative rounded-[16.22px] bg-gray-01" />
          <div className="self-stretch h-[68px] relative inline-block mq450:text-4xl">
            <p className="m-0">Item #1 Name</p>
            <p className="m-0">Goes Here</p>
          </div>
          <div className="w-[95px] h-[34px] relative font-semibold inline-block whitespace-nowrap mq450:text-4xl">
            $19.99
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent1;
