const formatNumber = (value) => {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
};

export default formatNumber;