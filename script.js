"use strict";
let mountains = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];
// mountainsIndex[0]
// const findNameOfTallestMountain = (
//   anArrayOfMountains: Mountain[]
// ): Mountain | undefined => {
//   let tallest: number = 29029;
//   return anArrayOfMountains.find((item) => {
//     return item.height > tallest;
//   });
// };
const findNameOfTallestMountain = (anArrayOfMountains) => {
    let tallest = anArrayOfMountains[0];
    mountains.forEach((mountain) => {
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    });
    return tallest.name;
};
console.log(findNameOfTallestMountain(mountains));
let products = [
    {
        name: "Apple charger",
        price: 35,
    },
    {
        name: "Apple airpods",
        price: 150,
    },
    {
        name: "Apple phone",
        price: 2000,
    },
];
const calcAverageProductPrice = (anArrayOfProducts) => {
    let total = 0;
    products.forEach((product) => {
        for (let i = 0; i < product.length; i++) {
            total += product[i];
        }
        let avg = total / products.length;
    });
};
console.log(calcAverageProductPrice(products));
let inventory = [
    {
        product: { name: "motor", price: 10.0 },
        quantity: 10,
    },
    {
        product: { name: "sensor", price: 12.5 },
        quantity: 4,
    },
    {
        product: { name: "LED", price: 1.0 },
        quantity: 20,
    },
];
const calcInventoryValue = (anArrayOfInventory) => {
    let total = 0;
    anArrayOfInventory.forEach((item) => {
        return (total = item.product.price * item.quantity) + total;
    });
};
console.log(calcInventoryValue(inventory));
