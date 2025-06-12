const formatMoney = (value, alwaysShowCents = false) => {
  return value.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: alwaysShowCents ? 2 : (Number.isInteger(value) ? 0 : 2),
    maximumFractionDigits: 2
  });
};

export default formatMoney;
