export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: undefined, currency: "USD" }).format(
    value
  );
