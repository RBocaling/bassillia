export const BASE_URL =
  import.meta.env.VITE_DEV_API_URL || "http://46.202.177.43:8000/api";

  export const formatPHPAmount = (
    value: number | string,
    decimalPlaces: number = 2,
    decimalSeparator: string = ".",
    thousandSeparator: string = ","
  ): string => {
    const number = Number(value);

    if (isNaN(number)) return "₱0.00";

    const parts = number.toFixed(decimalPlaces).split(".");

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);

    return `₱${parts.join(decimalSeparator)}`;
  };
  