import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  FormControl,
  Select as MuiSelect,
  SelectChangeEvent,
} from "@mui/material";
import React, { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
  value?: string;
  onChange?: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
  label: string;
}

const Select: FunctionComponent<Props> = ({
  children,
  value,
  onChange,
  label,
}) => {
  return (
    <FormControl sx={{ flexShrink: 0, marginLeft: "1rem", minWidth: 100 }}>
      <MuiSelect
        label={label}
        IconComponent={KeyboardArrowDownIcon}
        inputProps={{ color: "white" }}
        sx={{
          color: "white",
          border: "0.01rem solid white",
          "&>fieldset": {
            opacity: 0,
          },
          ".MuiSelect-iconOutlined": { color: "white" },
          "&>.MuiInputBase-input": {
            padding: "5px",
          },
        }}
        value={value}
        onChange={onChange}
      >
        {children}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
