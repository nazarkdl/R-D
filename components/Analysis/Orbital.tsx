import Image from "next/image";
import "./orbital.css";
import React from "react";

const Orbital = () => {
  return (
    <div className=" absolute -bottom-1 left-1/2  -translate-x-1/2">
      <div
        style={{ "--n": 0 } as React.CSSProperties}
        className=" w-24 h-24 rounded-full absolute overflow-hidden bg-white ball origin-center border-2 border-primary"
      >
        <Image
          className=" w-full h-full object-cover "
          src={"/otacos.png"}
          alt="logo"
          width={800}
          height={800}
        />{" "}
      </div>
      <div
        style={{ "--n": 1 } as React.CSSProperties}
        className="w-24 h-24 rounded-full absolute overflow-hidden bg-white ball origin-center border-2 border-primary"
      >
        <Image
          className=" w-full h-full object-cover "
          src={"/bk.png"}
          alt="logo"
          width={800}
          height={800}
        />{" "}
      </div>
      <div
        style={{ "--n": 2 } as React.CSSProperties}
        className="w-24 h-24 rounded-full absolute overflow-hidden bg-white ball origin-center border-2 border-primary "
      >
        {" "}
        <Image
          className=" w-full h-full  object-cover "
          src={"/poke.webp"}
          alt="logo"
          width={800}
          height={800}
        />{" "}
      </div>
      <div
        style={{ "--n": 3 } as React.CSSProperties}
        className="w-24 h-24 rounded-full absolute overflow-hidden bg-white ball origin-center border-2 border-primary "
      >
        <Image
          src={"/McDo.png"}
          alt="logo"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        style={{ "--n": 4 } as React.CSSProperties}
        className="w-24 h-24 rounded-full absolute overflow-hidden bg-white ball origin-center border-2 border-primary"
      >
        <Image
          className=" w-full h-full object-cover "
          src={"/dominos.png"}
          alt="logo"
          width={800}
          height={800}
        />
      </div>
      <div
        style={{ "--n": 5 } as React.CSSProperties}
        className="w-24 h-24 rounded-full absolute overflow-hidden bg-white ball origin-center border-2 border-primary "
      >
        <Image
          className=" w-full h-full object-cover "
          src={"/MB.png"}
          alt="logo"
          width={800}
          height={800}
        />{" "}
      </div>
      <div
        style={{ "--n": 6 } as React.CSSProperties}
        className="w-24 h-24 rounded-full absolute overflow-hidden bg-white ball origin-center border-2 border-primary"
      >
        <Image
          className=" w-full h-full object-cover "
          src={"/pepe.png"}
          alt="logo"
          width={800}
          height={800}
        />
      </div>
      <div
        style={{ "--n": 7 } as React.CSSProperties}
        className="w-24 h-24 rounded-full absolute overflow-hidden bg-white ball origin-center border-2 border-primary"
      >
        <Image
          className=" w-full h-full object-cover "
          src={"/donki.png"}
          alt="logo"
          width={800}
          height={800}
        />
      </div>

      <svg
        width="581"
        height="150"
        viewBox="0 0 581 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M580 149C580 66.7096 450.163 0 290 0C129.837 0 0 66.7096 0 149H580Z"
          className=" fill-background"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M574.243 149.072H580.243V143.072C580.243 103.181 547.58 66.7693 493.633 40.7434C439.346 14.553 366.139 2.86102e-06 290.122 0C214.104 -2.86102e-06 140.898 14.553 86.6102 40.7434C32.6637 66.7693 1.43051e-05 103.181 1.90735e-06 143.072L0 149.072H6H6.26731C6.08971 147.082 6 145.082 6 143.072C6 67.369 133.206 6 290.122 6C447.038 6 574.243 67.369 574.243 143.072C574.243 145.082 574.154 147.082 573.976 149.072H574.243Z"
          fill="#EE4D2A"
        />
      </svg>
    </div>
  );
};

export default Orbital;
