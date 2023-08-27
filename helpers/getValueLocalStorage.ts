export const getValueFromLS = (name: string): object => {
  if (!localStorage.getItem(`${name}`)) {
    localStorage.setItem(`${name}`, JSON.stringify({}));
  }
  const value = localStorage.getItem(`${name}`)!;
  return JSON.parse(value);
};
