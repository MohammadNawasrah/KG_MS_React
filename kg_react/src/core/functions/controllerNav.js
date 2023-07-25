import { linkNames, linkURLs } from "../data/static/links";
import removeElementByIndex from "./removeElementByIndex";
import removeStringFromArray from "./removeStringFromArray";

function controllNav(pageName) {
  var links = removeStringFromArray(linkURLs, pageName);
  var newLinksUrl = links.updatedArray;
  var newLinksName = removeElementByIndex(linkNames, links.index);
  return { linkNames: newLinksName, linkURLs: newLinksUrl };
}
export default controllNav;
