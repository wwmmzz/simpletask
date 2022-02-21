export type TText = {
  id: number;
  type: string;
  value: string;
  y?: number;
};

export type TImg = {
  id: number;
  type: string;
  imgSrc: string;
  y?: number;
};

export type TImgList = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export type TEl = TText | TImg;

export interface IApp {
  contentEl: Array<TText | TImg>;
  el: string;
  select: TEl;
  text: string;
  img: string;
  save: string | null;
  dragEl: TEl;
}