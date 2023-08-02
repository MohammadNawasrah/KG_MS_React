import { linkNames, linkURLs } from "../data/static/links";
import StringUtil from "./stringUtil";

function controllNav(pageName) {
  var links = StringUtil.removeStringFromArray(linkURLs, pageName);
  var newLinksUrl = links.updatedArray;
  var newLinksName = StringUtil.removeElementByIndex(linkNames, links.index);
  return { linkNames: newLinksName, linkURLs: newLinksUrl };
}
export default controllNav;
