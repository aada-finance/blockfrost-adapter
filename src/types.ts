export enum NetworkId {
  PREPROD = 0,
  MAINNET,
}

export type Value = {
  unit: string;
  quantity: string;
}[];

export type TxIn = {
  txHash: string;
  index: number;
};
