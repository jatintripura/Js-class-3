// Comparison operator

// Equal  == value check

let a=20;
let b= 20;
console.log(a==b);
b=30;
console.log(a==b);
b="20";
console.log(a==b);

// Strict equal ( === )data type check 

console.log(a===b);
a="20";
console.log(a===b);

//  Not equal (!=)

console.log(a!=b);
a=45;
b=56;
// Strict not equal (!==) Not equal data type.
console.log(a!==b);
console.log(a!=b);

//  Greater than(>)

console.log(a>b);
a=57;
console.log(a>b);
a=56;
console.log(a>b);

//  Less than (<)

console.log(a<b);
b=50;
console.log(a<b);
a=40;
console.log(a<b);

// Greater than or equal (>=)

b=60;
a=60;
console.log(a>=b);
a=61;
console.log(a>=b);
a=59;
console.log(a>=b);

// Less than or equal (<=)

a=44;
b=44;
console.log(a<=b);
a=42;
console.log(a<=b);
a=46;
console.log(a<=b);

// logical operator 
// && (And )
// || (or)
// ! (Not)

// &&

a=20;
b=20;
console.log( a>=b && a<=b );
b=21;
console.log( a>=b && a<=b );

// ||

console.log( a>=b || a<=b );
a=17;
console.log( a>=b && a<=b );

// !

console.log(!( a<=b) );
console.log(!( a>=b) );

//operator precedance

console.log( 45+(34-6) * 6 /90 %45 -7 +78 );

//Template literals

let myName ="Jatin";
 let lastName =" Tripura";
 let myAge ="20";
 console.log("I am " + myName + lastName + "I am" + myAge + "years old");
 console.log(` Iam ${myName} ${lastName} . Iam ${myAge} years old.`);
 //Decision making 
 // if else  statement
 /* if(condition)
 {
    statement
 }else{
    statement
 }
 */
 a=4;
 b=6;
 if(a>b)
 {
    console.log(a);
 }else{
    console.log(b);
 }

 a=8;
 b=6;
 if(a>b)
 {
    console.log(a);
 }else{
    console.log(b);
 }