let that = {}
export default function LePage(options) {
  options = initmethods(options)
  that = Page(options)
  return that;
}

function initmethods(options) {
  let newOptions = {}
  const keys = Object.keys(options);
  for (let i = keys.length - 1; i + 1; i--) {
    const key = keys[i];
    if (key.match(/^on/)) {
      newOptions[key] = initLoading(options[key])
    }
    newOptions[key] = options[key]
  }
  return newOptions;
}

function initLoading(func) {
  let isLoading = false;
  return function() {
    const arg = arguments;
    return function() {
      isLoading = true
      func.call(this, ...arg);
      isLoading = false
   }()
  }
}