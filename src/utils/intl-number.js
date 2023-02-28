const locale = "en-US";
const currency = "USD";

const IntlNumberFormat = {
  currency: (number) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(number);
  },
};

export default IntlNumberFormat;
