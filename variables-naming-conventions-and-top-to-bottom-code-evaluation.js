/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

*/

// Refactored version with descriptive variable names

let customerName = "Alice";
let numberOfItems = 5;
let totalCost = 20;

// Added variables
let storeName = "Corner Market";
let averageCostPerItem = totalCost / numberOfItems;

let purchaseSummary =
  customerName +
  " bought " +
  numberOfItems +
  " items for $" +
  totalCost +
  " at " +
  storeName +
  ". Average price per item was $" +
  averageCostPerItem +
  ".";

console.log(purchaseSummary);

/*
The original variables (a, b, c, d) were unclear and did not describe their purpose. They were replaced with descriptive names such as customerName, 
numberOfItems, and totalCost to improve readability. 
Two additional variables, storeName and averageCostPerItem, were added to provide more context and useful information. 

Using meaningful variable names is important because they clearly describe what the data represents, making code easier to read and understand. When names are descriptive, 
developers can quickly understand the purpose of a variable without needing extra comments. Common pitfalls include using vague names like a or data, 
using inconsistent naming styles, or choosing names that are too long or unclear. Clear variable names also help team collaboration because other developers 
can understand the code more quickly. This makes it easier to maintain, debug, and improve the code in larger projects.
*/