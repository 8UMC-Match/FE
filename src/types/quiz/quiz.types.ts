export interface QPProps {
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
}

export interface ListAProps {
  selectedId: number | null;
  onSelect: (choice: number, selectedId: number) => void;
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
  quizId: number;
  content: string;
  quizNumber: number;
  totalCount: number;
}

export interface QuizResultItem {
  content: string;
  correct: number;
  choice: number;
  isCorrect: boolean;
}

export interface QuizDetailProps {
  results: QuizResultItem[];
}

export interface DetailResultProps {
  results: QuizResultItem[];
}

export interface DetailResultItemProps {
  result: QuizResultItem;
  index: number;
}

export interface QuizResultResponse {
  totalCount: number;
  correctCount: number;
  results: QuizResultItem[];
}

export interface QuizResultProps {
  correctCount: number;
  totalCount: number;
}

export type QnaResponse = QnaItem[];
