const SITE = "https://Zenbots.Zenlinofc.com";

const COUNTRIES = [
  "CO", "MX", "AR", "PE", "CL", "EC", "VE", "BO", "PY", "UY", "GT",
  "HN", "SV", "NI", "CR", "PA", "DO", "PR", "CU", "ES", "US",
];

const PLANS = [
  { id: "1m", name: "ZenBot 1 mes", price: "4.99" },
  { id: "3m", name: "ZenBot 3 meses", price: "11.99" },
  { id: "6m", name: "ZenBot 6 meses", price: "24.99" },
  { id: "perm", name: "ZenBot Permanente", price: "14.99" },
];

const day = (min: number, max: number) => ({
  "@type": "QuantitativeValue",
  minValue: min,
  maxValue: max,
  unitCode: "DAY",
});

function offer(plan: (typeof PLANS)[number]) {
  return {
    "@type": "Offer",
    name: plan.name,
    price: plan.price,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE}/comprar?plan=${plan.id}`,
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" },
      shippingDestination: COUNTRIES.map((c) => ({
        "@type": "DefinedRegion",
        addressCountry: c,
      })),
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: day(0, 1),
        transitTime: day(0, 0),
      },
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: COUNTRIES,
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 5,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
      merchantReturnLink: `${SITE}/terminos`,
    },
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "ZenBot",
  description:
    "Bot de WhatsApp para administrar grupos y comunidades. Suscripción por grupo.",
  brand: { "@type": "Brand", name: "ZenlinOFC" },
  image: `${SITE}/images/og-namibot.jpg`,
  url: `${SITE}/`,
  offers: PLANS.map(offer),
};
