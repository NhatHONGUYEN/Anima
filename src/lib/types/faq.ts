export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqProps = {
  heading?: string;
  items?: FaqItem[];
};
