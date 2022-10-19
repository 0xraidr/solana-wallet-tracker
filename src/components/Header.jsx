import React from "react";
import { GiEvilEyes } from "react-icons/gi";

const Header = () => {
  return (
    <div className="header text-white">
      <h1 className="flex justify-center font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-br from-green-400  to-black pb-2">
        trackr.
      </h1>
      <p className="text-sm text-center">
        A wallet tracker for the Solana Blockchain.
      </p>
      <h2 className="flex justify-center pb-7 text-9xl">
        <GiEvilEyes />
      </h2>
    </div>
  );
};

export default Header;
