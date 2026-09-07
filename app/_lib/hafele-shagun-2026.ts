/**
 * The Häfele Shagun Offer 2026 — every appliance and combo set on the offer
 * page at /products/hafele/shagun-offer-2026.
 *
 * Transcribed from the designed handoff (handoff/hafele-shagun-offer.html),
 * which was itself built from the Häfele India Shagun price list. Prices are
 * Häfele India MRP and Shagun offer price in rupees, inclusive of GST. When the
 * price list changes, this file is the only place to edit.
 *
 * Images live in public/images/hafele/shagun-offer-2026/. Files named by article
 * code (e.g. 534.84.713.webp) are that exact model, from the v2 handoff; the
 * rest show the series and are shared by every size in it.
 */

export const OFFER_PATH = "/products/hafele/shagun-offer-2026";

export const IMAGE_DIR = "/images/hafele/shagun-offer-2026";

/**
 * The studio line that takes WhatsApp enquiries for this offer, in the
 * international form wa.me wants. It is the second of the two public numbers
 * in _lib/site.ts (9862 351 441) — not the campaign-only line the handoff
 * used, which the studio asked to keep off the page.
 */
export const WHATSAPP_DIAL = "919862351441";

export const CATEGORIES = [
  "Cooker hoods",
  "Hobs",
  "Microwaves",
  "Ovens",
  "Dishwashers",
  "Refrigerators",
  "Speciality",
] as const;

export type Category = (typeof CATEGORIES)[number];

/** Singular form, for the small label on each card. */
export const CATEGORY_SHORT: Record<Category, string> = {
  "Cooker hoods": "Cooker hood",
  Hobs: "Hob",
  Microwaves: "Microwave",
  Ovens: "Oven",
  Dishwashers: "Dishwasher",
  Refrigerators: "Refrigerator",
  Speciality: "Speciality",
};

export type Appliance = {
  /** Häfele article number, e.g. "534.84.713". */
  code: string;
  name: string;
  category: Category;
  /** Häfele range: Essentia, Premium, DesignLine, Freestanding. */
  series: string;
  /** Public path of the series image, or null where Häfele supplied none. */
  image: string | null;
  spec: string;
  mrp: number;
  /** Shagun offer price. */
  price: number;
};

export const APPLIANCES: readonly Appliance[] = [
  // Cooker hoods
  { code: "534.84.713", name: "Renata T-90", category: "Cooker hoods", series: "Essentia", image: "/images/hafele/shagun-offer-2026/534.84.713.webp", spec: "90 cm T-shape · black glass · filter-free auto-clean", mrp: 31530, price: 24830 },
  { code: "534.84.711", name: "Renata T-60", category: "Cooker hoods", series: "Essentia", image: "/images/hafele/shagun-offer-2026/534.84.711.webp", spec: "60 cm T-shape · black glass · filter-free auto-clean", mrp: 28290, price: 22240 },
  { code: "534.84.511", name: "Renata Inclined 60", category: "Cooker hoods", series: "Essentia", image: "/images/hafele/shagun-offer-2026/534.84.511.webp", spec: "60 cm inclined · filter-free · heat auto-clean", mrp: 38990, price: 28970 },
  { code: "534.84.513", name: "Renata Inclined 90", category: "Cooker hoods", series: "Essentia", image: "/images/hafele/shagun-offer-2026/534.84.513.webp", spec: "90 cm inclined · filter-free · heat auto-clean", mrp: 44490, price: 34140 },
  { code: "534.84.512", name: "Renata Inclined 75", category: "Cooker hoods", series: "Essentia", image: "/images/hafele/shagun-offer-2026/534.84.512.webp", spec: "75 cm inclined · filter-free · heat auto-clean", mrp: 41790, price: 32070 },
  { code: "534.84.701", name: "Renata Curved 60", category: "Cooker hoods", series: "Essentia", image: "/images/hafele/shagun-offer-2026/534.84.701.webp", spec: "60 cm curved glass · LED lighting", mrp: 26680, price: 18620 },
  { code: "534.84.703", name: "Renata Curved 90", category: "Cooker hoods", series: "Essentia", image: "/images/hafele/shagun-offer-2026/534.84.703.webp", spec: "90 cm curved glass · LED lighting", mrp: 29040, price: 22240 },
  { code: "534.84.501", name: "Teresa T-60 BLDC", category: "Cooker hoods", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.84.501.webp", spec: "60 cm T-shape · BLDC motor · filter-free · gesture control", mrp: 58790, price: 41380 },
  { code: "534.84.502", name: "Teresa T-75 BLDC", category: "Cooker hoods", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.84.502.webp", spec: "75 cm T-shape · BLDC motor · filter-free · gesture control", mrp: 61290, price: 45140 },
  { code: "534.84.503", name: "Teresa T-90 BLDC", category: "Cooker hoods", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.84.503.webp", spec: "90 cm T-shape · BLDC motor · filter-free · gesture control", mrp: 64990, price: 49260 },
  { code: "534.84.521", name: "Teresa Neo I-60 BLDC T-Sensor", category: "Cooker hoods", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.84.521.webp", spec: "60 cm inclined · BLDC · air-quality T-sensor · gesture", mrp: 74290, price: 52310 },
  { code: "534.84.522", name: "Teresa Neo I-75 BLDC T-Sensor", category: "Cooker hoods", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.84.522.webp", spec: "75 cm inclined · BLDC · air-quality T-sensor · gesture", mrp: 81690, price: 59850 },
  { code: "534.84.523", name: "Teresa Neo I-90 BLDC T-Sensor", category: "Cooker hoods", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.84.523.webp", spec: "90 cm inclined · BLDC · air-quality T-sensor · gesture", mrp: 90290, price: 70135 },
  { code: "538.81.683", name: "Aella 90", category: "Cooker hoods", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/aella.webp", spec: "90 cm · BLDC · auto-open panel · steam clean · 10-yr motor warranty", mrp: 79790, price: 36740 },
  { code: "538.81.643", name: "Rhine 90", category: "Cooker hoods", series: "Premium", image: "/images/hafele/shagun-offer-2026/rhine.webp", spec: "90 cm angled · filter-free · gesture + feather touch · boost", mrp: 69290, price: 31340 },
  { code: "534.84.563", name: "Kallisto 90 T-shaped filter-free", category: "Cooker hoods", series: "Premium", image: "/images/hafele/shagun-offer-2026/534.84.563.webp", spec: "90 cm T-shape · filter-free · Shadowstone finish", mrp: 41500, price: 25990 },
  { code: "534.84.564", name: "Kallisto 90 T-shaped BLDC filter-free", category: "Cooker hoods", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.84.564.webp", spec: "90 cm T-shape · Ecoflux BLDC · filter-free", mrp: 63500, price: 45990 },
  { code: "534.84.565", name: "Kallisto 90 inclined filter-free", category: "Cooker hoods", series: "Premium", image: "/images/hafele/shagun-offer-2026/534.84.565.webp", spec: "90 cm inclined · filter-free", mrp: 52000, price: 34990 },
  { code: "534.84.566", name: "Kallisto 75 inclined filter-free", category: "Cooker hoods", series: "Premium", image: "/images/hafele/shagun-offer-2026/534.84.566.webp", spec: "75 cm inclined · filter-free", mrp: 48000, price: 32990 },
  { code: "534.84.567", name: "Kallisto 75 inclined BLDC", category: "Cooker hoods", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.84.567.webp", spec: "75 cm inclined · BLDC · filter-free", mrp: 77000, price: 55990 },
  { code: "534.84.568", name: "Kallisto 90 inclined BLDC", category: "Cooker hoods", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.84.568.webp", spec: "90 cm inclined · BLDC · ~1500 m³/h · touch + gesture", mrp: 92500, price: 66990 },
  { code: "538.81.544", name: "Leo 90 Plus", category: "Cooker hoods", series: "Premium", image: "/images/hafele/shagun-offer-2026/leo.webp", spec: "90 cm · filter-free · black tempered glass · feather touch", mrp: 57790, price: 31340 },
  { code: "533.87.212", name: "Nebel Inox 60", category: "Cooker hoods", series: "Essentia", image: "/images/hafele/shagun-offer-2026/533.87.212.webp", spec: "60 cm · stainless steel · push-button 3-speed · mesh filters", mrp: 24990, price: 15510 },
  { code: "534.80.998", name: "Celena 90 ceiling hood", category: "Cooker hoods", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/celena.webp", spec: "90 cm ceiling-mounted island hood · motor included", mrp: 260990, price: 195990 },

  // Hobs
  { code: "538.61.261", name: "Augusta 360", category: "Hobs", series: "Essentia", image: "/images/hafele/shagun-offer-2026/538.61.261.webp", spec: "3 burner · 60 cm · brass burners · black glass", mrp: 36590, price: 28870 },
  { code: "538.61.263", name: "Augusta 470", category: "Hobs", series: "Essentia", image: "/images/hafele/shagun-offer-2026/538.61.263.webp", spec: "4 burner · 70 cm · brass burners · black glass", mrp: 45190, price: 35180 },
  { code: "538.61.264", name: "Augusta 480", category: "Hobs", series: "Essentia", image: "/images/hafele/shagun-offer-2026/538.61.264.webp", spec: "4 burner · 80 cm · brass burners · black glass", mrp: 49790, price: 39840 },
  { code: "538.61.268", name: "Augusta 490", category: "Hobs", series: "Essentia", image: "/images/hafele/shagun-offer-2026/538.61.268.webp", spec: "4 burner · 90 cm · brass burners · black glass", mrp: 52490, price: 41910 },
  { code: "538.61.267", name: "Augusta 378", category: "Hobs", series: "Essentia", image: "/images/hafele/shagun-offer-2026/538.61.267.webp", spec: "3 burner · 78 cm · brass burners · black glass", mrp: 41690, price: 33110 },
  { code: "538.61.271", name: "Verena 360", category: "Hobs", series: "Essentia", image: "/images/hafele/shagun-offer-2026/538.61.271.webp", spec: "3 burner · 60 cm · cast-iron trivets", mrp: 31790, price: 23790 },
  { code: "538.61.273", name: "Verena 470", category: "Hobs", series: "Essentia", image: "/images/hafele/shagun-offer-2026/538.61.273.webp", spec: "4 burner · 70 cm · cast-iron trivets", mrp: 38360, price: 27420 },
  { code: "538.61.278", name: "Verena 490", category: "Hobs", series: "Essentia", image: "/images/hafele/shagun-offer-2026/538.61.278.webp", spec: "4 burner · 90 cm · cast-iron trivets", mrp: 43980, price: 31560 },
  { code: "538.66.600", name: "Altius FS 130", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.600.webp", spec: "1 burner domino · 30 cm · fully sealed brass burner", mrp: 26990, price: 20490 },
  { code: "538.66.610", name: "Altius FS 230", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.610.webp", spec: "2 burner · 30 cm · fully sealed brass burners", mrp: 32590, price: 24660 },
  { code: "538.66.631", name: "Altius FS 360", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.631.webp", spec: "3 burner · 60 cm · fully sealed brass burners", mrp: 51490, price: 36570 },
  { code: "538.66.227", name: "Altius FS 378", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.227.webp", spec: "3 burner · 78 cm · fully sealed brass burners", mrp: 64290, price: 45170 },
  { code: "538.66.628", name: "Altius FS 390", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.628.webp", spec: "3 burner · 90 cm · fully sealed brass burners", mrp: 66390, price: 46415 },
  { code: "538.66.748", name: "Altius Plus 390 FFS", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.748.webp", spec: "3 burner · 90 cm · flush fully sealed · instant ignition", mrp: 69290, price: 52190 },
  { code: "538.66.237", name: "Altius FS 480", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.237.webp", spec: "4 burner · 80 cm · fully sealed brass burners", mrp: 72690, price: 50490 },
  { code: "538.66.758", name: "Altius Plus 490 FS", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.758.webp", spec: "4 burner · 90 cm · fully sealed · instant ignition", mrp: 76990, price: 58435 },
  { code: "538.66.238", name: "Altius FS 490", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.238.webp", spec: "4 burner · 90 cm · fully sealed brass burners", mrp: 77390, price: 54370 },
  { code: "534.01.766", name: "Cronus 378", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.01.766.webp", spec: "3 burner · 78 cm · timer · step-flame control", mrp: 78790, price: 56690 },
  { code: "538.66.737", name: "Altius Plus 378", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.737.webp", spec: "3 burner · 78 cm · fully sealed · instant ignition", mrp: 65990, price: 47190 },
  { code: "538.66.769", name: "Altius Plus 000", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.769.webp", spec: "Altius Plus · fully sealed · instant ignition", mrp: 80290, price: 61665 },
  { code: "538.66.749", name: "Altius Plus Matt Glass 390", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.749.webp", spec: "3 burner · 90 cm · matt glass · instant ignition", mrp: 81990, price: 62990 },
  { code: "534.01.768", name: "Cronus 480", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.01.768.webp", spec: "4 burner · 80 cm · timer · step-flame control", mrp: 88790, price: 65090 },
  { code: "538.66.759", name: "Altius Plus Matt Glass 490", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.759.webp", spec: "4 burner · 90 cm · matt glass · instant ignition", mrp: 88890, price: 68560 },
  { code: "534.01.767", name: "Cronus 590", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/534.01.767.webp", spec: "5 burner · 90 cm · timer · step-flame control", mrp: 101490, price: 73490 },
  { code: "538.66.660", name: "Nero 30 induction", category: "Hobs", series: "Premium", image: "/images/hafele/shagun-offer-2026/538.66.660.webp", spec: "30 cm · 2-zone induction · touch control", mrp: 43090, price: 34890 },
  { code: "538.66.681", name: "Nero 60 induction", category: "Hobs", series: "Premium", image: "/images/hafele/shagun-offer-2026/538.66.681.webp", spec: "60 cm · 4-zone induction · touch control", mrp: 63490, price: 50990 },
  { code: "538.66.228", name: "Kallisto FS 378", category: "Hobs", series: "Premium", image: "/images/hafele/shagun-offer-2026/538.66.228.webp", spec: "3 burner · 78 cm · fully sealed", mrp: 53000, price: 44490 },
  { code: "538.66.239", name: "Kallisto FS 490", category: "Hobs", series: "Premium", image: "/images/hafele/shagun-offer-2026/538.66.239.webp", spec: "4 burner · 90 cm · fully sealed", mrp: 67500, price: 54990 },
  { code: "538.66.770", name: "Kallisto FS 390", category: "Hobs", series: "Premium", image: "/images/hafele/shagun-offer-2026/538.66.770.webp", spec: "3 burner · 90 cm · fully sealed", mrp: 59500, price: 46990 },
  { code: "538.66.658", name: "Vesta 460", category: "Hobs", series: "Premium", image: "/images/hafele/shagun-offer-2026/538.66.658.webp", spec: "4 burner · 60 cm", mrp: 49990, price: 31340 },
  { code: "538.66.231", name: "Altius FS 460", category: "Hobs", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.66.231.webp", spec: "4 burner · 60 cm · fully sealed brass burners", mrp: 65490, price: 44090 },
  { code: "538.01.691", name: "New Elena 60 induction", category: "Hobs", series: "Premium", image: "/images/hafele/shagun-offer-2026/elena.webp", spec: "60 cm built-in induction hob", mrp: 71990, price: 50150 },

  // Microwaves
  { code: "538.31.580", name: "Aurora 25L microwave with grill", category: "Microwaves", series: "Essentia", image: "/images/hafele/shagun-offer-2026/aurora25.webp", spec: "25 L built-in · grill · black", mrp: 48790, price: 33630 },
  { code: "538.31.590", name: "Enzo 28L microwave with grill", category: "Microwaves", series: "Premium", image: "/images/hafele/shagun-offer-2026/enzo.webp", spec: "28 L built-in · grill · black", mrp: 67290, price: 48060 },
  { code: "538.31.380", name: "J34 MWO Plus", category: "Microwaves", series: "Premium", image: "/images/hafele/shagun-offer-2026/j34.webp", spec: "34 L built-in microwave", mrp: 86490, price: 56420 },
  { code: "538.01.279", name: "Diamond 34 MWO", category: "Microwaves", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/dia34.webp", spec: "34 L built-in microwave", mrp: 97790, price: 69875 },
  { code: "538.31.360", name: "Maria 28", category: "Microwaves", series: "Premium", image: "/images/hafele/shagun-offer-2026/maria.webp", spec: "28 L built-in microwave", mrp: 48990, price: 31340 },
  { code: "539.30.190", name: "Aida 28", category: "Microwaves", series: "Premium", image: "/images/hafele/shagun-offer-2026/aida.webp", spec: "28 L built-in microwave", mrp: 52050, price: 31340 },

  // Ovens
  { code: "538.01.431", name: "Diamond 50 MWO", category: "Ovens", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/dia50.webp", spec: "50 L built-in microwave oven", mrp: 152690, price: 108140 },
  { code: "538.01.411", name: "Diamond 77 MWO", category: "Ovens", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/dia77mwo.webp", spec: "77 L · microwave with grill and convection", mrp: 186190, price: 124940 },
  { code: "538.61.621", name: "Aurora 80L built-in oven", category: "Ovens", series: "Essentia", image: "/images/hafele/shagun-offer-2026/aurora80.webp", spec: "80 L · rotisserie · black", mrp: 77690, price: 54330 },
  { code: "538.01.321", name: "J70 BIO Plus", category: "Ovens", series: "Premium", image: "/images/hafele/shagun-offer-2026/j70.webp", spec: "70 L multifunction built-in oven", mrp: 114190, price: 74180 },
  { code: "538.01.421", name: "Diamond 77 BIO", category: "Ovens", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/dia77bio.webp", spec: "77 L built-in oven", mrp: 122890, price: 87560 },
  { code: "538.61.631", name: "Midora 81L full steam oven", category: "Ovens", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/midora.webp", spec: "81 L · full steam · black", mrp: 247490, price: 157490 },
  { code: "538.01.361", name: "Ribb 70", category: "Ovens", series: "Premium", image: "/images/hafele/shagun-offer-2026/ribb.webp", spec: "70 L built-in oven", mrp: 84990, price: 52240 },
  { code: "538.01.311", name: "Celia 70", category: "Ovens", series: "Premium", image: "/images/hafele/shagun-offer-2026/celia.webp", spec: "70 L built-in oven", mrp: 94820, price: 57460 },
  { code: "538.61.471", name: "Diamond Orb 77L oven", category: "Ovens", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/orb.webp", spec: "77 L built-in oven", mrp: 138990, price: 94490 },
  { code: "538.61.461", name: "Diamond 77 CST", category: "Ovens", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/cst.webp", spec: "77 L combi steam oven", mrp: 198590, price: 115490 },
  { code: "539.00.051", name: "Iris 70", category: "Ovens", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/iris.webp", spec: "70 L · TFT display built-in oven", mrp: 152190, price: 104990 },

  // Dishwashers
  { code: "539.20.680", name: "Acero 15 PS semi-integrated", category: "Dishwashers", series: "Premium", image: "/images/hafele/shagun-offer-2026/acero.webp", spec: "15 place settings · semi-integrated built-in", mrp: 102090, price: 82540 },
  { code: "539.20.661", name: "Valeriya 15 PS semi-integrated", category: "Dishwashers", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/valeriya.webp", spec: "15 place settings · semi-integrated built-in", mrp: 130890, price: 104990 },
  { code: "539.20.560", name: "Serene FI 02 built-in", category: "Dishwashers", series: "Premium", image: "/images/hafele/shagun-offer-2026/serene.webp", spec: "Fully integrated built-in", mrp: 96790, price: 73140 },
  { code: "539.20.670", name: "Aqua Noir 13 PS freestanding", category: "Dishwashers", series: "Freestanding", image: "/images/hafele/shagun-offer-2026/aquaNoir.webp", spec: "13 place settings · freestanding · black", mrp: 50600, price: 39320 },
  { code: "539.20.671", name: "Aqua Chrome 13 PS freestanding", category: "Dishwashers", series: "Freestanding", image: "/images/hafele/shagun-offer-2026/aquaChrome.webp", spec: "13 place settings · freestanding · silver", mrp: 53350, price: 41390 },
  { code: "535.29.680", name: "Aqua Chrome 15 PS freestanding", category: "Dishwashers", series: "Freestanding", image: "/images/hafele/shagun-offer-2026/535.29.680.webp", spec: "15 place settings · freestanding · silver", mrp: 67000, price: 51740 },

  // Refrigerators
  { code: "538.10.052", name: "Niveus CF 250 refrigerator", category: "Refrigerators", series: "DesignLine", image: null, spec: "Built-in fridge-freezer · frost-free · inverter · ~250 L", mrp: 299990, price: 219990 },
  { code: "538.10.161", name: "Niveus C 300 refrigerator", category: "Refrigerators", series: "DesignLine", image: "/images/hafele/shagun-offer-2026/538.10.161.webp", spec: "Built-in · 300 L · no-frost · adaptive cooling", mrp: 249990, price: 184990 },

  // Speciality
  { code: "538.51.830", name: "Oliva G warming drawer", category: "Speciality", series: "Premium", image: "/images/hafele/shagun-offer-2026/oliva.webp", spec: "Built-in warming drawer", mrp: 95790, price: 62690 },
  { code: "536.02.598", name: "Sauve 01 built-in deep fryer", category: "Speciality", series: "Premium", image: "/images/hafele/shagun-offer-2026/536.02.598.webp", spec: "30 cm · 2.7 L · up to 230°C · stainless steel", mrp: 94290, price: 69140 },
  { code: "536.02.599", name: "BBQ BI 01 built-in grill", category: "Speciality", series: "Premium", image: "/images/hafele/shagun-offer-2026/536.02.599.webp", spec: "30 cm built-in electric barbecue · stainless steel", mrp: 96590, price: 67610 },
];

const BY_CODE = new Map(APPLIANCES.map((appliance) => [appliance.code, appliance]));

export function byCode(code: string): Appliance {
  const appliance = BY_CODE.get(code);
  if (!appliance) throw new Error(`Unknown Häfele article code ${code}`);
  return appliance;
}

export type Combo = {
  /** 1-based set number, as printed on the offer. */
  n: number;
  /** Article codes of the four appliances sold together. */
  items: readonly [string, string, string, string];
  /** Article code of the fifth appliance, added to the set for ₹11. */
  bonus: string;
  /** Shagun price for all five. */
  price: number;
};

/**
 * The ten combo sets. Each is four appliances at one price with a fifth —
 * a dishwasher or induction hob — for ₹11. MRPs are looked up from APPLIANCES
 * rather than repeated here: the handoff listed them per set and every one
 * matched the product table.
 */
export const COMBOS: readonly Combo[] = [
  { n: 1, items: ["534.84.503", "534.01.767", "538.31.590", "538.61.631"], bonus: "539.20.670", price: 332999 },
  { n: 2, items: ["534.84.503", "534.01.768", "538.31.590", "538.61.631"], bonus: "539.20.670", price: 325999 },
  { n: 3, items: ["534.84.523", "534.01.768", "538.31.590", "538.61.631"], bonus: "539.20.670", price: 344499 },
  { n: 4, items: ["534.84.523", "534.01.767", "538.31.590", "538.61.631"], bonus: "539.20.670", price: 349999 },
  { n: 5, items: ["534.84.503", "538.66.758", "538.01.311", "539.30.190"], bonus: "538.66.681", price: 224999 },
  { n: 6, items: ["534.84.503", "538.66.759", "538.01.311", "539.30.190"], bonus: "539.20.670", price: 225999 },
  { n: 7, items: ["534.84.523", "534.01.768", "538.01.279", "538.61.471"], bonus: "539.20.661", price: 366999 },
  { n: 8, items: ["534.84.523", "534.01.768", "538.01.279", "538.61.471"], bonus: "538.66.660", price: 299999 },
  { n: 9, items: ["534.84.523", "538.66.758", "538.01.279", "538.61.471"], bonus: "539.20.680", price: 339999 },
  { n: 10, items: ["534.84.523", "538.66.759", "538.01.279", "538.01.421"], bonus: "538.66.660", price: 299999 },
];

/** Every appliance in a set, the ₹11 one last. */
export function comboAppliances(combo: Combo): Appliance[] {
  return [...combo.items, combo.bonus].map(byCode);
}

/** "₹1,23,456" — Indian grouping, no decimals. */
export function formatInr(amount: number) {
  return "₹" + amount.toLocaleString("en-IN");
}

export function percentOff(mrp: number, price: number) {
  return Math.round((1 - price / mrp) * 100);
}

/**
 * The steepest discount in the table, for the "up to N% off" claim. Derived
 * rather than typed: the handoff said 47%, which was already out of date —
 * two hoods in its own table were 54% and 55% off.
 */
export const MAX_PERCENT_OFF = Math.max(
  ...APPLIANCES.map((appliance) => percentOff(appliance.mrp, appliance.price)),
);

/** Words that already say what kind of appliance a model name is. */
const KIND_WORDS = [
  "hood",
  "hob",
  "induction",
  "microwave",
  "oven",
  "dishwasher",
  "refrigerator",
  "fryer",
  "grill",
  "drawer",
];

/**
 * Alt text for a product picture: brand, model and — unless the model name
 * already carries it — what the thing is. "Häfele Renata T-90 cooker hood",
 * but "Häfele Enzo 28L microwave with grill" rather than "… microwave".
 */
export function applianceAlt(appliance: Appliance) {
  const name = appliance.name.toLowerCase();
  const saysKind = KIND_WORDS.some((word) => name.includes(word));
  return saysKind
    ? `Häfele ${appliance.name}`
    : `Häfele ${appliance.name} ${CATEGORY_SHORT[appliance.category].toLowerCase()}`;
}

/**
 * The share picture's alt text, and the version stamped on its URL.
 *
 * Next gives the generated image a URL hash that does not change when the
 * picture's content does, so Facebook — which caches a link's preview by
 * image URL — would go on serving the old card indefinitely. Bumping this
 * changes the URL and makes it fetch the new one.
 */
export const SHARE_IMAGE_ALT =
  "Häfele Shagun Offer 2026 — built-in kitchen appliances at offer prices from White Walls, Aizawl";
export const SHARE_IMAGE_VERSION = "3";

/**
 * The offer page's opening line, in Mizo. Three pieces because the phone
 * number between them is a tel: link on the page; joined by HERO_LINE for
 * the share card and the social descriptions, so the words a visitor reads,
 * the words on the shared picture and the words Facebook quotes are one text.
 */
export const HERO_LINE_BEFORE =
  "Häfele Kitchen Appliances hovah Festive Offer tha tak kan pe thei e.";
export const HERO_PHONE = "98623 51441";
export const HERO_LINE_AFTER =
  "ah whatsapp leh phone call in kan biak thei reng e !";

export const HERO_LINE = `${HERO_LINE_BEFORE} ${HERO_PHONE} ${HERO_LINE_AFTER}`;

/** The "know more" link on the header, hero and sticky mobile buttons. */
export const WHATSAPP_INTRO_URL = `https://wa.me/${WHATSAPP_DIAL}?text=${encodeURIComponent(
  "Hi White Walls, I’d like to know more about the Häfele Shagun offer.",
)}`;

/** A WhatsApp link pre-filled with the product or set the visitor tapped. */
export function whatsappLink(subject: string) {
  return `https://wa.me/${WHATSAPP_DIAL}?text=${encodeURIComponent(
    "Hi White Walls, I’m interested in the Häfele Shagun offer: " + subject,
  )}`;
}
