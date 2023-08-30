function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = md5(args);
    const objectFromCache = cache.find((object) => object.hash === hash);
    if (objectFromCache) {
      console.log("Из кеша: " + objectFromCache.value);
      return "Из кеша: " + objectFromCache.value;
    }

    let result = func(...args);
    cache.push({ hash: hash, value:result });
    if (cache.length > maxCacheValuesCount) {
      cache.shift();
    }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
  }
} 

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
      if (!timeoutId) {
          func(...args);
          wrapper.count++;
          }
      
          timeoutId = setTimeout(() => {
              func(...args)
              wrapper.count++;
      }, delay);
      wrapper.allCount++;
  }
  return wrapper;
}
