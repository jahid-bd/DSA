const obj = [
  null,
  {
    toAmount: "Must be greater than From amount.",
  },
];

console.log(obj.some((error) => Object.keys(error).length > 0));
