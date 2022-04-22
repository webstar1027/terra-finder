import { MenuItem } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import React, { useMemo } from "react";
import { chainsAtom, selectedChainAtom } from "../../../../store/app";
import Select from "../../molecules/Select";

const SelectChain = () => {
  const chains = useAtomValue(chainsAtom);
  const [selectedChain, setSelectedChain] = useAtom(selectedChainAtom);
  const chainNames = useMemo(() => Object.keys(chains), [chains]);
  return (
    <Select
      value={selectedChain}
      label="Age"
      onChange={(e) => setSelectedChain(e.target.value)}
    >
      {chainNames.map((chain) => (
        <MenuItem key={chain} value={chain}>
          {chain}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectChain;
