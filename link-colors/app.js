const allLinksArray = Array.from(document.querySelectorAll("a"));

const hasHref = (el) => el.hasAttribute("href");
const hasProtocol = (el) => el.getAttribute("href").includes("://");
const isInternal = (el) =>
  el.getAttribute("href").startsWith("http://mysite.com");
const changeColor = (el) => (el.style.color = "red");

allLinksArray
  .filter(hasHref)
  .filter(hasProtocol)
  .filter((el) => !isInternal(el))
  .forEach(changeColor);
