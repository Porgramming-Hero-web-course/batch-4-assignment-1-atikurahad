function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    for (let i = 0; i < keys.length; i++) {
      if (!(keys[i] in obj)) {
        return false;
      }
    }
    return true;
  }
  
  // Sample Input
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  

  