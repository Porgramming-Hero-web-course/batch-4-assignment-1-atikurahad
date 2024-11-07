function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    for (let i = 0; i < keys.length; i++) {
      if (!(keys[i] in obj)) {
        return false;
      }
    }
    return true;
  }
  

  const person = { name: "Abid", age: 35, email: "abid@yahoo.com" };
  

  