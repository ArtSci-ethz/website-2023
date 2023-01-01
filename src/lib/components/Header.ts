export type HeaderContext = {
  setHeaderImage: (newHeaderImage: string) => void;
  setHeaderText: (newText: string) => void;
};

export const key = Symbol();
