export type Link = {
  name: string;
  url: string;
  type: LinkType;
  postal_code: string
};

export enum LinkType {
  AMAZON = "AMAZON",
  FLIPKART = "FLIPKART",
  RELIANCE_DIGITAL = "RELIANCE_DIGITAL",
  CROMA = "CROMA",
  SONY_CENTER = "SONY_CENTER",
  GAMES_THE_SHOP = "GAMES_THE_SHOP",
  PPG = "PPG",
  VIJAYA_SALES = "VIJAYA_SALES"
}

export const links: Link[] = [
  // MAKE SURE NOT TO KEEP SAME WEBSITE LINK ONE AFTER ANOTHER, AND USE BELOW FORMAT(This is to prevent to many request error)
  // EXAMPLE 
  // AMAZON LINE
  // FLIPKART LINK
  // AMAZON LINK
  // FLIPKART LINK
  //////////////////////--------AMAZON------------/////////////////
  {
    name: "Amazon PS5 Disc",
    url: "https://www.amazon.in/dp/B08FV5GC28",
    postal_code: "560076",
    type: LinkType.AMAZON
  },
  {
    name: "Flipkart PS5 Disc",
    url: "https://www.flipkart.com/sony-playstation-5-cfi-1008a01r-825-gb-astro-s-playroom/p/itma0201bdea62fa",
    postal_code: "560076",
    type: LinkType.FLIPKART
  },
  {
    name: "Amazon PS5 Disc/HD Cam Bundle",
    url: "https://www.amazon.in/PS5TM-console-HD-camera-PlayStation%C2%AE5/dp/B08NTT4RTQ",
    postal_code: "560076",
    type: LinkType.AMAZON
  },
  {
    name: "Flipkart PS5 Digital",
    url: "https://www.flipkart.com/sony-playstation-5-cfi-1008b01r-825-gb-astro-s-playroom/p/itm8bf74f8d0b890",
    postal_code: "560076",
    type: LinkType.FLIPKART
  },
  {
    name: "Amazon PS5 Digital/Pulse headset Bundle",
    url: "https://www.amazon.in/PS5TM-Digital-PULSE-wireless-headset/dp/B08NTV1QDX",
    postal_code: "560076",
    type: LinkType.AMAZON
  },
  {
    name: "Flipkart Series X",
    url: "https://www.flipkart.com/microsoft-xbox-series-x-1024-gb/p/itm63ff9bd504f27",
    postal_code: "560076",
    type: LinkType.FLIPKART
  },
  {
    name: "Amazon PS5 Digital Edition",
    url: "https://www.amazon.in/Sony-CFI-1008B01R-PlayStation-Digital-Edition/dp/B08FVRQ7BZ",
    postal_code: "560076",
    type: LinkType.AMAZON
  },
  {
    name: "Sony Center PS5 Disc",
    url: "https://shopatsc.com/collections/playstation-5/products/playstation-5-console-store",
    postal_code: "560076",
    type: LinkType.SONY_CENTER
  },
  {
    name: "Amazon PS5 Digital/DualSense™ charging station Bundle",
    url: "https://www.amazon.in/PS5TM-Digital-DualSenseTM-charging-station/dp/B08NTVHTPT",
    postal_code: "560076",
    type: LinkType.AMAZON,
  },
  {
    name: "Sony Center PS5 Digital",
    url: "https://shopatsc.com/collections/playstation-5/products/playstation5-digital-edition",
    postal_code: "560076",
    type: LinkType.SONY_CENTER
  },
  {
    name: "Amazon PS5 Digital/HD Cam Bundle",
    url: "https://www.amazon.in/PS5TM-Digital-HD-camera-PlayStation%C2%AE5/dp/B08NTV53TC",
    postal_code: "560076",
    type: LinkType.AMAZON
  },
  {
    name: "Croma PS5 Disc",
    url: "https://www.croma.com/sony-playstation-5-825gb-ssd-cfi-1008a01r-white-/p/231643",
    type: LinkType.CROMA,
    postal_code: "570014"
  },
  {
    name: "Amazon PS5 Digital/Media Remote Bundle",
    url: "https://www.amazon.in/PS5TM-Digital-Media-Remote-PlayStation%C2%AE5/dp/B08NTVH9VG",
    postal_code: "560076",
    type: LinkType.AMAZON
  },
  {
    name: "Croma PS5 Digital",
    url: "https://www.croma.com/sony-playstation-5-digital-edition-825gb-ssd-cfi-1008b01r-white-/p/231644",
    type: LinkType.CROMA,
    postal_code: "560076"
  },
  {
    name: "Amazon PS5 Series X",
    url: "https://www.amazon.in/dp/B08J7QX1N1/",
    postal_code: "560076",
    type: LinkType.AMAZON
  },
  {
    name: "Reliance Digital PS5 Disc",
    url: "https://www.reliancedigital.in/sony-playstation-5-console/p/491936180",
    postal_code: "560076",
    type: LinkType.RELIANCE_DIGITAL,
  },
  {
    name: "Reliance Digital PS5 Digital Edition",
    url: "https://www.reliancedigital.in/sony-cfi-1008b01r-playstation-5-digital-console/p/491936181",
    postal_code: "560076",
    type: LinkType.RELIANCE_DIGITAL
  },
  {
    name: "Reliance Digital Series X",
    url: "https://www.reliancedigital.in/xbox-series-x-console-with-wireless-controller-1-tb/p/491934660",
    postal_code: "560076",
    type: LinkType.RELIANCE_DIGITAL
  },
  ///// KEEP GTS, PPG & VS ALWAYS AT END AS WEB SITE IS ALWAYS SLOW
  {
    name: "Vijaya Sales PS5 Disc",
    url: "https://ps5.vijaysales.com/Sony-PS5-Console.html",
    postal_code: "560076",
    type: LinkType.VIJAYA_SALES

  },
  {
    name: "Vijaya Sales PS5 Digital",
    url: "https://ps5.vijaysales.com/Sony-PS5-Console-Digital.html",
    postal_code: "560076",
    type: LinkType.VIJAYA_SALES
  },
  {
    name: "Vijaya Sales Series X",
    url: "https://www.vijaysales.com/xbox-series-x-gaming-console-1-tb/16215",
    postal_code: "560076",
    type: LinkType.VIJAYA_SALES
  },
  ///PPG WORKS ONLY WHEN HEADLESS (Line 40 in chakPages.ts) IS false
  {
    name: "Prepaidgamercard PS5 Disc",
    url: "https://prepaidgamercard.com/product/playstation-5-console-ps5/",
    postal_code: "560076",
    type: LinkType.PPG
  },
  {
    name: "Prepaidgamercard PS5 Digital",
    url: "https://prepaidgamercard.com/product/playstation-5-digital-edition-ps5/",
    postal_code: "560076",
    type: LinkType.PPG
  },
  {
    name: "Games the shop PS5 Disc",
    url: "https://www.gamestheshop.com/PlayStation-5-Console/5111",
    postal_code: "560076",
    type: LinkType.GAMES_THE_SHOP
  },
  {
    name: "Games the shop PS5 Digital",
    url: "https://www.gamestheshop.com/PlayStation-5-Digital-Edition/5112",
    postal_code: "560076",
    type: LinkType.GAMES_THE_SHOP
  },
  {
    name: "Games the shop Series X",
    url: "https://www.gamestheshop.com/microsoft%20xbox%20series%20x/5308",
    postal_code: "560076",
    type: LinkType.GAMES_THE_SHOP
  }
];
