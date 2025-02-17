export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader ">
        <svg width="200" height="200">
          <circle
            className="traco"
            cx="100"
            cy="100"
            r="70"
            fill="transparent"
            stroke="#ffe71c"
            strokeWidth="9"
            strokeDasharray="35 20"
            transform="rotate(31 100 100)"
          ></circle>
        </svg>
        <div className="p1"></div>
        <div className="p2"></div>
        <div className="p3"></div>
        <div className="p4"></div>
        <div className="p5"></div>
        <div className="p6"></div>
        <div className="p7"></div>
        <div className="p8"></div>
        <div className="circle">
          <div className="content">
            <div className="eyes">
              <div className="eye-left"></div>
              <div className="eye-right"></div>
            </div>
            <div className="nouse"></div>
            <div className="mouth"></div>
            <div className="teeth">
              <div className="tooth"></div>
              <div className="tooth"></div>
              <div className="tooth"></div>
              <div className="tooth"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
