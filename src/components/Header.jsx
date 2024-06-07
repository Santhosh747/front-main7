import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();

  const handleButtonClickProfile = () => {
    navigate('/profile');
  };
  return (
    <header className="self-stretch bg-limegreen-100 flex flex-row items-start justify-between pt-1.5 pb-[30px] pr-[41px] pl-10 box-border gap-[20px] max-w-full text-left text-31xl text-gray-01 font-poppins">
      <div className="h-[155px] w-[1920px] relative bg-limegreen-100 hidden max-w-full" />
      <div className="w-[332px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[63px] font-extrabold font-inherit z-[1]">
          AGROCOM
        </h1>
      </div>
      <div className="w-[882px] flex flex-col items-start justify-start pt-[47px] pb-0 pr-[39px] pl-0 box-border max-w-full text-5xl text-gray-200">
        <div className="self-stretch flex flex-row items-start justify-start gap-[46px] max-w-full mq450:gap-[23px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch h-[52px] relative">
              <img
                className="absolute top-[0px] left-[0px] rounded-11xl w-full h-full z-[1]"
                loading="lazy"
                alt=""
                src="/rectangle-35.svg"
              />
              <div className="absolute top-[8px] left-[29px] font-light inline-block min-w-[89px] whitespace-nowrap z-[2]">
                {" "}
                search
              </div>
            </div>
          </div>
          <img
            className="h-[60px] w-[60px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/search@2x.png"
          />
        </div>
      </div>
      <img
        className="h-[119px] w-[121px] relative object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/ellipse-2@2x.png"
        onClick={handleButtonClickProfile}
      />
    </header>
  );
};

export default Header;
