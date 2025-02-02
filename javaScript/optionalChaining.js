const user = {
    name: "Bob",
    address: {
        city: "San Francisco"
    }
};

// Without optional chaining (throws error if 'address' or 'country' is missing)
// console.log(user.address.country.state); // Error: Cannot read property 'state' of undefined

// With optional chaining
console.log(user.address?.country?.state); // Output: undefined (no error)