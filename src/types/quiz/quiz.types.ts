export interface QPProps {
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
}

export interface ItemAContainerProps {
  clicked: boolean;
}

export interface ItemA {
  id: number;
  image: string;
  imageClick: string;
}

export interface ItemAProps {
  item: ItemA;
}

export interface QnaItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type QnaList = QnaItem[];
