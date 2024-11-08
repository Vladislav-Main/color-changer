export const getRandomColor = () => {
  return (
    "#" +
    "000000".substring(
      0,
      6 - Math.round(0xffffff * Math.random()).toString(16).length
    ) +
    Math.round(0xffffff * Math.random()).toString(16)
  );
};
