import { camelCase } from 'lodash/string';

export default function keysToCamelCase(src) {
  if (src instanceof Array) {
    return src.map(item => keysToCamelCase(item));
  }
  if (typeof src === 'object') {
    const dst = {};
    Object.keys(src).forEach(key => dst[camelCase(key)] = keysToCamelCase(src[key]));
    return dst;
  }

  return src;
}