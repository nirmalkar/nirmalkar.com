import React from "react";

type Props = {
  bg?: string;
  color?: string;
  onClose?: () => void;
  size?: number;
  crossSize?: number;
};

function CloseIcon({ bg, color, onClose, size, crossSize }: Props) {
  return (
    <div
      onClick={onClose}
      style={{
        borderRadius: "50%",
        background: bg ?? "#fff",
        height: `${size ?? 20}px`,
        width: `${size ?? 20}px`,
        display: "flex",
        justifyContent: "center",
        padding: "1px",
        alignItems: "center",
      }}
    >
      <div
        style={{ fontSize: `${crossSize ?? "15px"}px`, color: color ?? "#333" }}
      >
        &#x2715;
      </div>
    </div>
  );
}

export default CloseIcon;
