const formatMoney = (value) => {
  return Number.isInteger(value)
    ? value.toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 0 })
    : value.toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export default formatMoney;
