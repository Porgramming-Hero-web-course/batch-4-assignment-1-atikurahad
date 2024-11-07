// The significance of union and intersection types in Typescript.

- union and intersction are typescript features.

## Union Type

* A union type in TypeScript allows a variable for checking two values or condition. It is represented using the (|) operator.

- Example: type Person = "Men" | "Women" | "Child";
  In this example, a variable of type Person can have the value "Men", "Women", or "Child".

- code here
  function typeCheck(roll: string|number) {
  console.log(roll)
  }

## Intersection Type

* An intersection type combines multiple types into a single type.Intersection type is a feature of TypeScript that gives more flexibility when defining classes.

- code here

type Person = {
name: string;
age: number;
};

type Developer = {
designation: string;
salary: number;
};

type personWithDesignation = Person & Developer;

const person: personWithDesignation = {
name: "Tamim",
age: 35,
designation: "Next level developer",
salary: 35000
};
