import { links, Link, LinkType } from "./links";
import { playSiren } from "./play";
import { Page } from "playwright/types/types";
import { format } from "date-fns";


const { chromium } = require("playwright");

const getDateTime = (): Date => {
  return new Date();
}

const handleStockAvailability = async (
  link: Link,
  stockFound: boolean,
  page: Page
) => {
  if (!stockFound) {
    let msg = `Still no stock for ${link.name} at ${format(getDateTime(), "PPpp")}`;
    console.log(msg)
    return;
  }
  playSiren();
  let msg = `🚨 ${" "}There might be a ${link.name} in stock at ${link.url} at ${format(getDateTime(), "PPpp")} ${" "} 🚨`;
  console.log(`🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`);
  console.log(msg)
  await page.screenshot({
    path: `img.png`,
  });
  console.log(`🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`);
};

function delay(time: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}

export const checkPages = async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });

  const browserContext = await browser.newContext({
  });
  for (const link of links) {
    try {
      const page = await browserContext.newPage()
      await page.goto(link.url);
      switch (link.type) {
        case LinkType.AMAZON: {
          const addToCartButton = await page.$(
            "#addToCart_feature_div .a-button input#add-to-cart-button"
          );
          const preorderbtn = await page.$(
            "#buyNow_feature_div input#buy-now-button"
          );
          await handleStockAvailability(link, !!(addToCartButton || preorderbtn), page);
          break;
        }
        case LinkType.FLIPKART: {
          const addToCartButton = await page.$(
            "div._1YokD2 button._3AWRsL"
          );
          let inStock = false;
          if (addToCartButton) {
            inStock = ((await addToCartButton.innerText()).trim() === `BUY NOW`) || ((await addToCartButton.innerText()).trim() === `PRE ORDER`);
          }
          await handleStockAvailability(link, inStock, page);
          break;
        }
        case LinkType.CROMA: {
          let postalPencil = await page.$("div.delivery-location i.pincode-pencil");
          let postalModal = await page.$('div.input-align div.form-group input[placeholder="Enter your pincode"]');;

          if (postalModal) {
            await page.fill('div.input-align div.form-group input[placeholder="Enter your pincode"]', link.postal_code);
            await page.click('div.input-align div.delivery-pincode-btn button.btn-default', {
              timeout: 4000,
            });
          } else if (postalPencil) {
            await page.click("div.delivery-location i.pincode-pencil", {
              timeout: 1000,
            });
            await page.fill("div.modal-sec input.formControl", link.postal_code);
            await page.click("div.modal-sec div.act-btn button.btn-secondary", {
              timeout: 4000,
            });
          }
          await delay(5000);
          let close = await page.$("div.MuiPaper-roo button.icon-close");
          if (close) {
            await page.click("div.MuiPaper-roo button.icon-close", {
              timeout: 4000,
            });
          }
          const buyButtonDisabled = await page.$$(
            "div#add_to_cart_button_container button.disable-btn-in-pdp"
          );
          let inStock = false;
          if (postalModal) {
            inStock = true;
          }
          if (buyButtonDisabled.length &&
            ((await buyButtonDisabled[0].innerText()).trim().toUpperCase() === `ADD TO CART`) &&
            ((await buyButtonDisabled[1].innerText()).trim().toUpperCase() === `BUY NOW`)) {
            inStock = false;
          }
          await handleStockAvailability(link, inStock, page);
          break;
        }
        case LinkType.RELIANCE_DIGITAL: {
          let postalcodeInput = await page.$("input#RIL_PDPInputPincode");
          if (postalcodeInput) {
            await page.fill("input#RIL_PDPInputPincode", link.postal_code);
            await delay(2000);
          }
          await delay(2000);
          const addToCartButton = await page.$(
            ".pdp__addToCartSection button#add_to_cart_main_btn"
          );
          let inStock = false;
          if (addToCartButton) {
            inStock = ((await addToCartButton.innerText()).trim() === `PRE-ORDER NOW` || (await addToCartButton.innerText()).trim() === `ADD TO CART`);
          }
          await handleStockAvailability(link, inStock, page);
          break;
        }
        case LinkType.SONY_CENTER: {
          const addToCartButton = await page.$(
            "div.groups-btn input#product-add-to-cart"
          );

          const pincode = await page.$(
            "div.check-pincode input.check-delivery-pincode"
          );

          let inStock = false;
          if (addToCartButton || pincode) {
            if (addToCartButton) {
              let value = ((await addToCartButton.getAttribute('value')));
              if (value.toUpperCase() === 'PRE Order Now'.toUpperCase() || value.toUpperCase() === 'Add to Cart'.toUpperCase()) {
                inStock = true;
              }
            }
            if (pincode) {
              inStock = true;
            }
          }
          await handleStockAvailability(link, inStock, page);
          break;
        }

        case LinkType.GAMES_THE_SHOP: {
          const addToCartButton = await page.$(
            "div.offr-mne div.addToCart-nw"
          );
          await handleStockAvailability(link, !!addToCartButton, page);
          break;
        }

        case LinkType.VIJAYA_SALES: {
          const addToCartButton = await page.$(
            "div.btnsCartBuy div.btnbynowadd div.addToBag a.btnAddToBag"
          );
          await handleStockAvailability(link, !!addToCartButton, page);
          break;
        }

        case LinkType.PPG: {
          const addToCartButton = await page.$(
            'form.cart button.single_add_to_cart_button', {
            timeout: 5000,
          }
          );
          await handleStockAvailability(link, !!addToCartButton, page);
          break;
        }
      }
      await page.close();
    } catch (e) {
      console.log("ERROR w", e);
    }
  }
  await browserContext.close();
  await browser.close();
};
