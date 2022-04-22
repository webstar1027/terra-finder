import SearchIcon from "@mui/icons-material/Search";
import { styled, TextField } from "@mui/material";
import { useAtomValue } from "jotai";
import { useRouter } from "next/router";
import React, { FunctionComponent, useState } from "react";
import { selectedChainAtom } from "../../../store/app";

interface Props {
  size?: "small" | "medium" | "large";
}

const Sizes = {
  small: "200px",
  medium: "350px",
  large: "600px",
};

const Search: FunctionComponent<Props> = ({ size = "large" }) => {
  const [term, setTerm] = useState<string>("");
  const chain = useAtomValue(selectedChainAtom);
  const router = useRouter();

  const onEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  const submit = () => {
    if (term?.length > 3) {
      router.push(`/chain/${chain}/${term}`);
    }
  };

  return (
    <TextField
      onKeyDown={onEnter}
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      variant="filled"
      label="Search Block / Tx / Account"
      InputLabelProps={{ sx: { color: "gray" } }}
      InputProps={{
        endAdornment: <StyledSearchIcon onClick={() => submit()} />,
        sx: {
          backgroundColor: "transparent",
          ":hover": {
            backgroundColor: "transparent",
          },
          color: "white",
          caretColor: "white",
          ":before": { borderBottom: "1px solid #ffffff44" },
          ":hover:before": { borderBottom: "1px solid #ffffff66" },
          ":after": { borderBottom: "1px solid #ffffff" },
        },
      }}
      sx={{ width: Sizes[size], maxWidth: "100%" }}
    />
  );
};

const StyledSearchIcon = styled(SearchIcon)`
  cursor: pointer;
`;

export default Search;
