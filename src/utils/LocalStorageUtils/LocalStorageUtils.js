class LocalStorageUtils {
  setItem(key, value = "") {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key) {
    const item = localStorage.getItem(key);
    if (item === undefined) return undefined;
    return JSON.parse(item);
  }
}

export default new LocalStorageUtils();
