import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  paths: { tests: "tests" },
  solidity: "0.8.17",
  networks: {
    goerli: {
      blockGasLimit: 100000000429720, // whatever you want here
    },
  },
};

export default config;
