import { useMemo } from "react";

const GroupComponent = ({ propAlignSelf, propFlex, propDebugCommit }) => {
  const groupDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      debugCommit: propDebugCommit,
    };
  }, [propAlignSelf, propFlex, propDebugCommit]);

  return (
    <div
      className="self-stretch rounded-[18.04px] bg-lime flex flex-row flex-wrap items-start justify-start pt-[21px] px-10 pb-14 box-border gap-[55.5px] max-w-full text-left text-xl text-white font-poppins mq825:gap-[28px] mq825:pt-5 mq825:pb-9 mq825:box-border"
      style={groupDivStyle}
    >
      <div className="h-[645px] w-[1518px] relative rounded-[18.04px] bg-lime hidden max-w-full" />
      <div className="w-[376.5px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-[55px] max-w-full mq450:gap-[27px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[10.5px] pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
              <div className="w-[340px] flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
                  <div className="h-[59px] w-[164.8px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-[18px] pl-3.5">
                        <div className="self-stretch flex-1 relative font-semibold z-[1] mq450:text-base">
                          Argotechno
                        </div>
                      </div>
                      <div className="self-stretch h-[23px] relative text-mini font-extralight inline-block z-[1]">
                        posted 30 mins ago.
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-[74px] w-[75px] relative rounded-[50%] object-cover z-[1]"
                    alt=""
                    src="/ellipse-3@2x.png"
                  />
                </div>
              </div>
              <img
                className="self-stretch h-[348px] relative rounded-11xl max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                alt=""
                src="/image-270@2x.png"
              />
            </div>
          </div>
          <div className="w-[348.5px] flex flex-row items-start justify-start gap-[47.5px] max-w-full text-lg-9 text-gray-01 mq450:flex-wrap mq450:gap-[24px]">
            <div className="h-[35.8px] w-[150.5px] flex flex-row items-start justify-start pt-[3.2px] px-5 pb-[4.6px] box-border relative gap-[10.6px] z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[15.79px] bg-springgreen box-border opacity-[0] border-[1.1px] border-solid border-gray-01" />
              <div className="flex flex-col items-start justify-start pt-[6.3px] px-0 pb-0">
                <img
                  className="w-[18.9px] h-[18.9px] relative z-[1]"
                  alt=""
                  src="/comment-shape.svg"
                />
              </div>
              <div className="self-stretch w-[106px] relative font-semibold inline-block shrink-0 z-[1]">
                commnets
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[97px] text-mid-9">
              <div className="self-stretch h-[35.8px] flex flex-row items-start justify-start pt-[3.5px] px-[32.6px] pb-[5.3px] box-border relative gap-[11.1px] z-[1]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[15.79px] bg-springgreen box-border opacity-[0] border-[1.1px] border-solid border-gray-01" />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <img
                    className="w-[18.1px] h-[20.1px] relative z-[1]"
                    alt=""
                    src="/group-16.svg"
                  />
                </div>
                <div className="self-stretch flex-1 relative font-semibold z-[1]">
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[568px] w-[57.5px] flex flex-col items-start justify-start pt-[46px] px-0 pb-0 box-border mq825:pt-[30px] mq825:box-border">
        <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-white" />
      </div>
      <div className="w-[880px] flex flex-row items-start justify-start gap-[29px] max-w-full text-11xl text-gray-300 mq825:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-[141px] px-0 pb-0 box-border min-w-[408px] max-w-full mq825:pt-[92px] mq825:box-border mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
            <h3 className="m-0 w-[190px] h-[45px] relative text-inherit font-extrabold font-inherit inline-block z-[1] mq825:text-5xl mq450:text-lg">
              Description:
            </h3>
            <div className="self-stretch h-[308px] relative text-lg-9 text-white inline-block shrink-0 z-[1]">
              <p className="m-0">
                🌿 Embracing the green revolution, we've taken a meaningful step
                towards a sustainable future! 🌱 Today, we joined hands with
                Mother Nature and planted trees to earn green credits. With each
                sapling nestled into the earth, we're not just planting a tree;
                we're sowing the seeds of change. 🌳 Our commitment to the
                environment goes beyond words; it's reflected in our actions.
                Together, we're cultivating a greener, healthier planet for
                generations to come. Join us in our journey towards a more
                sustainable tomorrow! #GreenCredit #Sustainability
                #PlantingForChange 🌍💚
              </p>
            </div>
          </div>
        </div>
        <div className="h-[47px] w-56 rounded-11xl bg-forestgreen flex flex-row items-start justify-start pt-[5px] px-[60px] pb-1.5 box-border z-[1] text-5xl text-white">
          <img
            className="h-[47px] w-56 relative rounded-11xl hidden"
            alt=""
            src="/rectangle-36.svg"
          />
          <div className="self-stretch flex-1 relative font-semibold z-[1] mq450:text-lgi">
            Validate
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
