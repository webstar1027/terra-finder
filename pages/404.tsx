import { useUpdateAtom } from "jotai/utils";
import type { NextPage } from "next";
import { AppContext } from "next/app";
import { useEffect } from "react";
import { appbarModeAtom, AppbarType } from "../src/store/layout";

const Home: NextPage<{ configs: any }> = ({ configs }) => {
  const SetAppbarTransparency = useUpdateAtom(appbarModeAtom);

  useEffect(() => {
    SetAppbarTransparency(AppbarType.Transparent);
    return () => SetAppbarTransparency(AppbarType.Default);
  }, []);

  return <h1>404</h1>;
};

export async function getStaticProps(context: AppContext) {
  return {
    props: {},
  };
}

export default Home;
