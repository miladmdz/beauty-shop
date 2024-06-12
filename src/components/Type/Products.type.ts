export type ProductsType = {
  id?: number;
  title?: string;
  img?: string;
  price?: number;
  percent?: number;
  discount?:number;
  timer?: number;
  shortDesc?: string;
  longDesc?: string;
  bgColor?: string[];
  productColors?: string[];
};
export type ArticlesType = {
  id: number;
  img: string;
  title: string;
  desc: string;
  createdAt: string;
  views: string;
  link: string;
};
export type Companies = {
  id: number;
  img: string;
  link: string;
};
