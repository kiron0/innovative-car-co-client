import React from "react";

const CountDown = () => {
  //   const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          {/* <span style="--value:15;"></span> */}
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          {/* <span style="--value:10;"></span> */}
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          {/* <span style="--value:24;"></span> */}
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          {/* <span style="--value:40;"></span> */}
        </span>
        sec
      </div>
    </div>
  );
};

export default CountDown;
