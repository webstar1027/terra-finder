import { atom } from "jotai";

export const tokensAtom = atom<any>({});
export const chainsAtom = atom<any>({});
export const cw20ContractsAtom = atom<any>({});
export const cw721ContractsAtom = atom<any>({});
export const activesAtom = atom<any>({});

export const selectedChainAtom = atom<string | undefined>(undefined);
export const selectedActiveAtom = atom<string>("uusd");
