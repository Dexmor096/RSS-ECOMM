export const getStringFromLS = (name: string): string => {
  if (!localStorage.getItem(`${name}`)) {
    localStorage.setItem(`${name}`, JSON.stringify(""));
  }
  const value = localStorage.getItem(`${name}`)!;
  return value;
};
