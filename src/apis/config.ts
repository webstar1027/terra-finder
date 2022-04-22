import axios from "axios";

export const getConfigs = async () => {
  const [tokens, chains, cw20Contracts, cw721Contracts, actives] =
    await Promise.all([
      axios.get("https://assets.terra.money/cw20/tokens.json"),
      axios.get("https://assets.terra.money/chains.json"),
      axios.get("https://assets.terra.money/cw20/contracts.json"),
      axios.get("https://assets.terra.money/cw721/contracts.json"),
      axios.get("https://bombay-fcd.terra.dev/oracle/denoms/actives"),
    ]);
  return {
    tokens: tokens.data,
    chains: chains.data,
    cw20Contracts: cw20Contracts.data,
    cw721Contracts: cw721Contracts.data,
    actives: actives.data,
  };
};
