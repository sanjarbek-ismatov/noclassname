import React from "react";
const Handler = {
  get(target, prop) {
    return (segment, ...args) => {
      const cleanedStyles = csstoJsx(segment);
      return () => React.createElement(prop, { style: cleanedStyles }, "Salom");
    };
  },
};
const styled = new Proxy({}, Handler);
/**
 * css to jsx converter
 * @param {string[]} segments
 * @returns {object}
 */
function csstoJsx(segments) {
  const splittedStyle = segments[0].split("\n");
  const removedExtras = splittedStyle.map((e, i) =>
    e.replace(/\n/gi, "").trim()
  );
  const result = {};
  removedExtras.forEach((string, index) => {
    if (string) {
      const splittedProperty = string
        .replace(/(-\w)/gi, (m) => m[1].toUpperCase())
        .replace(";", "");
      const [key, value] =
        splittedProperty.split(": ") || splittedProperty.split(":");
      result[key] = value;
    }
  });
  return result;
}
/**
 * converter to camelCase
 * @param {string} key
 * @param {string} value
 */
export default styled;
