import { useMemo } from "react";

const FrameComponent = ({
  tataSurplusMicroNutrients,
  propGap,
  propPadding,
  propWidth,
  propFlex,
  propWidth1,
  propPadding1,
}) => {
  const productNameAreaStyle = useMemo(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: propGap,
    Width: "80px",
    textAlign: "left",
    fontSize: "20px",
    color: "#000000",
    fontFamily: "Timesroman",
  }), [propGap]);

  const productDetailsStyle = useMemo(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: "10px",
    padding: propPadding,
    backgroundColor: "#34cc54",
    borderRadius: "20px",
    Width: "100px",
  }), [propPadding]);

  const tataSurplusMicroStyle = useMemo(() => ({
    width: propWidth,
    flex: propFlex,
    fontSize: "20px",
  }), [propWidth, propFlex]);

  const productActionAreaStyle = useMemo(() => ({
    width: propWidth1,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  }), [propWidth1]);

  const shopButtonStyle = useMemo(() => ({
    cursor: "pointer",
    border: "none",
    padding: propPadding1,
    backgroundColor: "#34cc54",
    flex: "1",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textAlign: "left",
  }), [propPadding1]);

  const hoverShopButtonStyle = useMemo(() => ({
    ...shopButtonStyle,
    backgroundColor: "#befab3",
  }), [shopButtonStyle]);

  return (
    <div style={productNameAreaStyle}>
      <div style={productDetailsStyle}>
        <div
          style={{
            height: "15px",
            width: "14px",
            borderRadius: "20px",
            objectFit: "cover",
            Width: "100px",
          }}  
        />
        <h6 style={tataSurplusMicroStyle}>{tataSurplusMicroNutrients}</h6>

      </div>

      <div style={productActionAreaStyle}>
        <button
          style={shopButtonStyle}
          onMouseOver={hoverShopButtonStyle}
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
