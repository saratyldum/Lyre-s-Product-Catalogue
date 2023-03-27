import navigation from "./modules/navigation.js";
import homeStyle from "./modules/homeStyle.js";
import tabs from "./modules/tabs.js";
import productImage from "./modules/productImage.js";
import productInformation from "./modules/productInformation.js";
import informationPageStyle from "./modules/informationPageStyle.js";

navigation();
tabs();
await productImage();
homeStyle();
await productInformation();
informationPageStyle();