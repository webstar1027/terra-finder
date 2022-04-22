import { AppBar, Container, Stack, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { appbarModeAtom } from "../../../store/layout";
import Search from "../molecules/Search";
import SelectActive from "./layout/SelectActive";
import SelectChain from "./layout/SelectChain";

type Props = { children: React.ReactNode };

const Layout: FunctionComponent<Props> = ({ children }) => {
  const isTransparent = useAtomValue(appbarModeAtom);
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: isTransparent ? "transparent" : "secondary.main",
        }}
        elevation={isTransparent ? 0 : 5}
      >
        <Container>
          <Toolbar sx={{ padding: "0 !important" }}>
            {!isTransparent && (
              <Link href="/">
                <a>
                  <Box width="9rem" height="2rem" position={"relative"}>
                    <Image
                      src="/images/logo.svg"
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </Box>
                </a>
              </Link>
            )}
            <Stack direction="row" marginLeft="auto" alignItems="center">
              {!isTransparent && (
                <Box width="100%" sx={{ display: { xs: "none", md: "block" } }}>
                  <Search size="medium" />
                </Box>
              )}
              <SelectChain />
              <SelectActive />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Stack>
        {!isTransparent && (
          <Toolbar sx={{ marginBottom: "12px", opacity: 0 }} />
        )}
        {children}
      </Stack>
    </>
  );
};

export default Layout;
