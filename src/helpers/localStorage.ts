class LocalStorageHelper {
  static setStorage(key: string, data: any) {
    localStorage.setItem(key, data);
  }
  static deleteStorage(key: string) {
    localStorage.removeItem(key);
  }
  static deleteAllStorage() {
    localStorage.clear();
  }
}
export default LocalStorageHelper;
