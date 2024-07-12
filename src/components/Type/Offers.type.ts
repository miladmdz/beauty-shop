import { UserType } from "./User.type";

export type OfferType = {
  _id: string;
  type: string;
  codeProduct: string;
  codeOffer: string;
  percent: number;
  time: number;
  user: UserType;
  maxUse: number;
  uses: number;
};
