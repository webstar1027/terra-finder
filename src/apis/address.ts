import axios from "axios";

export const getAddressData = async (
  address: string,
  active: string,
  chain?: string
) => {
  const [bank, swaprate, staking, transactions] = await Promise.all([
    axios
      .get(`https://fcd.terra.dev/v1/bank/${address}`)
      .then((res) => res.data),
    axios
      .get(`https://fcd.terra.dev/v1/market/swaprate/${active}`)
      .then((res) => res.data),
    axios
      .get(`https://fcd.terra.dev/v1/staking/${address}`)
      .then((res) => res.data),
    axios
      .get(`https://fcd.terra.dev/v1/txs?offset=0&limit=100&account=${address}`)
      .then((res) => res.data),
  ]);
  return { bank, swaprate, staking, transactions };
};
