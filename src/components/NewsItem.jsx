import GroupComponent from "./GroupComponent";

const NewsItem = () => {
  return (
    <div className="w-[1652px] flex flex-row items-start justify-end py-0 px-[67px] box-border max-w-full shrink-0 mq1450:pl-[33px] mq1450:pr-[33px] mq1450:box-border">
      <GroupComponent
        propAlignSelf="unset"
        propFlex="1"
        propDebugCommit="unset"
      />
    </div>
  );
};

export default NewsItem;
