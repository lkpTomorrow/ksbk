// 修改session为小写
export class sesssion {
  static set(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  static get(key: string) {
    const d = sessionStorage.getItem(key);
    if (!d) {
      return d;
    }
    return !!d ? JSON.parse(d) : '';
  }

  static remove(key: string) {
    sessionStorage.clear();
  }

  static count() {
    return sessionStorage.length;
  }
}
