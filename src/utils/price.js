export function formattedPrice(price) {
  return Intl.NumberFormat("th-TH", {
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(price) + " THB";
}

