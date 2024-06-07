import { useMemo } from "react";

const FrameComponent1 = ({
  propFlexDirection,
  propMinWidth,
  propMarginTop,
}) => {
  const postActionsStyle = useMemo(() => {
    return {
      display: "flex",
      flexDirection: propFlexDirection,
      paddingTop: "0",
      paddingRight: "9px",
      paddingBottom: "0",
      paddingLeft: "9px",
      minWidth: propMinWidth,
    };
  }, [propFlexDirection, propMinWidth]);

  const component16Style = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div style={postActionsStyle}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", paddingTop: "0", paddingRight: "3px" }}>
          <button style={{ cursor: "pointer", border: "none", paddingTop: "3.4px", paddingBottom: "4.6px", paddingRight: "5px", paddingLeft: "21.7px", backgroundColor: "transparent", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", position: "relative", gap: "7.3px" }}>
            <div style={{ height: "100%", width: "100%", position: "absolute", margin: "0", top: "0px", right: "0px", bottom: "0px", left: "0px", borderRadius: "15.79px", backgroundColor: "springgreen", opacity: "0", border: "1.1px solid #333" }} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", paddingTop: "5px", paddingRight: "0", paddingBottom: "0" }}>
              <img style={{ width: "20px", height: "25px", position: "relative", zIndex: "1" }} alt="" src="/group-161.svg" />
            </div>
            <div style={{ paddingTop:"5px",paddingRight:"25px",position: "relative", fontSize: "20px", fontWeight: "semibold", fontFamily: "timesroman", color: "#34cc54", textAlign: "left", display: "inline-block", minWidth: "54px", zIndex: "1" }}>
              Share
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", paddingTop: "6.3px", paddingRight: "0", paddingBottom: "0" }}>
            <img style={{ width: "20.4px", height: "18.9px", position: "relative", zIndex: "1" }} alt="" src="/vector.svg" />
          </div>
          <div style={{ paddingTop:"5px", position: "relative", fontSize: "20px", fontWeight: "semibold", fontFamily: "timesroman", color: "#34cc54", textAlign: "left", display: "inline-block", minWidth: "106px", zIndex: "1" }}>
            Comments
          </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
