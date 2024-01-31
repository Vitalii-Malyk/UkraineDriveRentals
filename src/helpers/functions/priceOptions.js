const generatePriceOptions = (start, end, step) => {
  const options = [];
  for (let i = start; i <= end; i += step) {
    options.push(i);
  }
  return options;
};

const priceOptions = generatePriceOptions(10, 1000, 10);

export default priceOptions;
