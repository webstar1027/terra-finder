import { atom } from "jotai";

export enum AppbarType {
  Default,
  Transparent,
}
export const appbarModeAtom = atom<AppbarType>(AppbarType.Default);
