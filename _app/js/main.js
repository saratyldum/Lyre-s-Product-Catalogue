import homeStyle from "./modules/homeStyle.js";
import tabs from "./modules/tabs.js";
import productImage from "./modules/productImage.js";
import productInformation from "./modules/productInformation.js";
import informationPageStyle from "./modules/informationPageStyle.js";
import bio from "./modules/bio.js";

const productImageContainer = document.querySelector('.product-image');


tabs();
await productImage();
homeStyle();

if (productImageContainer !== null)
await productInformation();

informationPageStyle();
await bio();