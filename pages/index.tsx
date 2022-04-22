import { Container, styled } from "@mui/material";
import { Box } from "@mui/system";
import { useUpdateAtom } from "jotai/utils";
import type { NextPage } from "next";
import { AppContext } from "next/app";
import { useEffect } from "react";
import Main from "../src/components/pages/index/Main";
import { appbarModeAtom, AppbarType } from "../src/store/layout";

const Home: NextPage<{ configs: any }> = ({ configs }) => {
  const SetAppbarTransparency = useUpdateAtom(appbarModeAtom);

  useEffect(() => {
    SetAppbarTransparency(AppbarType.Transparent);
    return () => SetAppbarTransparency(AppbarType.Default);
  }, []);

  return (
    <Wrapper>
      <Video playsInline autoPlay loop>
        <source
          src="https://finder.terra.money/static/media/terrafinder.150e140e.mp4"
          type="video/mp4"
        />
      </Video>
      <Shadow />
      <ContentBox>
        <Main />
      </ContentBox>
    </Wrapper>
  );
};

export async function getStaticProps(context: AppContext) {
  return {
    props: {},
  };
}

const Wrapper = styled(Box)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shadow = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #082080d9;
`;

const ContentBox = styled(Container)`
  margin: auto;
  display: flex;
  place-items: center;
  place-content: center;
  width: 100%;
  height: 100%;
`;

const Video = styled("video")`
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #01040d
    url(https://finder.terra.money/static/media/terrafinder.6c4bb07a.jpg);
`;

export default Home;
