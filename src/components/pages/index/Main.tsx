import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import Search from "../../shared/molecules/Search";

const Main = () => {
  return (
    <Stack alignItems="center" width="100%">
      <Image src="/images/logo.svg" width={200} height={200} alt="" />
      <Search />
    </Stack>
  );
};

export default Main;
