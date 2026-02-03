import { CSSProperties } from "react";

const StarOfDavid = ({ className = "", style }: { className?: string; style?: CSSProperties }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Upward triangle */}
      <polygon
        points="50,10 90,75 10,75"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Downward triangle */}
      <polygon
        points="50,90 10,25 90,25"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default StarOfDavid;
