import { useMemo } from "react";

const FrameComponent2 = ({ item3, prop, propWidth, propMinWidth }) => {
  const marketBlocksStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const suggestedItemDetailsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="h-[632.3px] w-[172.4px] flex flex-col items-start justify-start pt-[237.4px] pb-0 pr-[8.2px] pl-0 box-border text-left text-9xl-4 text-limegreen-100 font-ui-16-semi mq850:pt-[154px] mq850:box-border"
      style={marketBlocksStyle}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 pb-[36.4px] pr-px pl-0 gap-[16.2px]">
        <div className="self-stretch flex-1 relative rounded-[16.22px] bg-gray-400" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[51.2px]">
          <div className="self-stretch relative mq450:text-4xl">
            <p className="m-0">{item3}</p>
          </div>
          <div
            className="relative font-semibold inline-block min-w-[113px] whitespace-nowrap mq450:text-4xl"
            style={suggestedItemDetailsStyle}
          >
            {prop}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
