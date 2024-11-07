
//Problem 5 

{
  function getProperty<T, Q extends keyof T>(obj: T, key: Q): T[Q] {
    return obj[key];
  }
  
  const person = { name: "Rakib", age: 33 };
  
  console.log(getProperty(person, "name"));  
  
}