//Like node Module (Javascript package)
//@ts-check
/**
 * 
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config){
  return true;
}

export function exit(code){
  return code + 1;
}