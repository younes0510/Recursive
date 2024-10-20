// year
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
        return `${year} est une année bissextile.`;
    } else {
        return `${year} n'est pas une année bissextile.`;
    }
}


console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
console.log(isLeapYear(2005));



// ticket
function ticketPrice(age) {
    if (age <= 12) {
        return "Le prix du billet est de 10 $.";
    } else if (age >= 13 && age <= 17) {
        return "Le prix du billet est de 15 $.";
    } else {
        return "Le prix du billet est de 20 $.";
    }
}

console.log(ticketPrice(30));
console.log(ticketPrice(17));
console.log(ticketPrice(10));

// fibonacci
function fibonacci(n) {


    if (n <= 1) {
        return n
    };
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6))

// Fonction de puissance    
function power(base, exponent) {
    
    if (exponent === 0) return 1;
  
    
    if (exponent < 0) return 1 / power(base, -exponent);
    return base * power(base, exponent - 1);
  }
  console.log(power(5,20))