import FrameComponent from "../components/Menu";
import SchemeCards from "../components/SchemeCards";

const Subsidies = () => {
  
  return (
    <div className="w-full relative bg-gray-01 overflow-hidden flex flex-col items-start justify-start gap-[21.4px] leading-[normal] tracking-[normal]">
      <FrameComponent sUBSIDIES="SUBSIDIES" />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[103px] pl-[441px] box-border gap-[61px] max-w-full mq1825:flex-wrap mq450:gap-[15px] mq450:pl-5 mq450:box-border mq925:gap-[30px] mq925:pl-[110px] mq925:pr-[25px] mq925:box-border mq1350:pl-[220px] mq1350:pr-[51px] mq1350:box-border">
        <section className="w-[1376px] flex flex-col items-start justify-start pt-[57.6px] px-0 pb-0 box-border max-w-full shrink-0 mq450:pt-6 mq450:box-border mq925:pt-[37px] mq925:box-border">
          <SchemeCards />
        </section>
      </main>
    </div>
  );
};

export default Subsidies;
