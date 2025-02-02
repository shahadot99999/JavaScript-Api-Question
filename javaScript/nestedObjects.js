const user = {
    name: "Alice",
    address: {
        city: "New York",
        zip: "10001"
    }
};

console.log(user.address.city); // Output: New York
console.log(user["address"]["zip"]); // Output: 10001