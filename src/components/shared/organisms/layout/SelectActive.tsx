import { MenuItem } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import React from "react";
import { activesAtom, selectedActiveAtom } from "../../../../store/app";
import Select from "../../molecules/Select";

const SelectActive = () => {
  const actives = useAtomValue(activesAtom);
  const [selectedActive, setSelectedAtive] = useAtom(selectedActiveAtom);
  return (
    <Select
      value={selectedActive}
      label="Age"
      onChange={(e) => setSelectedAtive(e.target.value)}
    >
      {actives.result.map((active: string) => (
        <MenuItem key={active} value={active}>
          {active.substring(1, active.length).toUpperCase()}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectActive;
