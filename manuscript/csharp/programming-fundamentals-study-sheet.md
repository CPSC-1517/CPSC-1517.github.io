---
title: C# Programming Concepts Study Sheet
---
# C# Programming Concepts Study Sheet

From your Programming Fundamentals course, you should be able to...

 ## Data Expressions and Math
 

- Name at least three kinds of program statements commonly seen in all high-level programming languages
  - Declaration/initialization statements
  - Assignment statements
  - Flow-control statements
- Distinguish between Variables, Values and Data Types
  - Variables act as "containers" for values, allowing programmers to access and manipulate the value via the variable.
  - A Value is simply a piece of data. It may be simple (such as a number or some text), or it may be complex (that is, based on a class).
  - Data Types are "blueprints" or "templates" that describe what values "look like" and how they "work".
  - When a variable is declared to be of a certain data type, this means that the variable is only allowed to hold values that match that data type.
- List the five basic rules governing variables, values and data types
  - Any value stored in a variable must be of the same data type as the variable.
  - Variables must be declared before they can be used.
  - A variable's data type can only be declared once.
  - Each primitive variable can only hold one value at a given time.
  - Each variable must have a distinct name.
- List the intrinsic (built-in) data types in C#
  - Textual data types: char
  - Numeric data types: int, long, short, byte, double, float
  - Conceptual data types: bool
- Explain what is meant by the phrase "type extensibility"
  - Modern languages are able to define brand new data types (classes), thereby increasing the ability to manage complex information and perform complex operations.
- Define the terms Reference Type and Value Type as they apply to data types in C#
  - A "value type" is a data type whose information is stored "directly" in a variable. In memory, this means that there is only one direct location in memory where the data is stored. The only data types that are "value types" are those that are built into the language: char, int, byte, short, long, double, float, and bool.
    - For example, in the following statements, the value of zero is stored directly at the memory location labelled `count`.
    ```csharp
    double count;
    count = 0;
    ```
  - A "reference type" is a data type whose information is stored and accessible only "indirectly" through the variable. Whenever you declare a "reference type" variable, that variable actually stores a memory address of where the "actual" object is stored. The "actual" object is only created using the new keyword; that new keyword will set aside a separate, "new", area of memory which is then accessed "indirectly" through the "reference type" variable.
    - For example, in the following statements, the first line creates a single memory location, labelled hotrod, which will store the address to a Car object. The second line creates the actual Car object somewhere in memory and then the address to that object is stored in the hotrod variable.
    ```csharp
    Car hotrod;
    hotrod = new Car();
    ```
    - All classes, whether those supplied in the C# library (such as the String and Date classes) or those created by you, are "reference types".
- Define the term Identifier
  - An identifier is the term used to refer to some "named" item in your code. Typically, we apply the term identifier to variable names, field names, property names and method names.
- Explain what is meant by the terms "scope" and "lifetime" as they apply to variables
  - Scope refers to the "context" in which a variable is accessible. Fields are variables with "Class Scope", meaning that they are accessible to all the methods from within the class; properties, methods and constructors also have class scope. Parameters and variables declared within a method have "local scope", meaning that they can only be accessed by code from within the method that they are declared in.
  - Lifetime refers to the period of time from when a variable is first declared to the time that they are "destroyed". For fields, their lifetime exists as long as the object in which they are declared. For parameters and local variables, they exist only as long as there is still code to be executed in the method to which they belong; as soon as the method "returns" or exits, these local variables and parameters are destroyed.
- Describe what is meant by the term "expression"
  - An expression is any combination of literal values (literal strings or numbers), variables, operators, or method calls which return a value. An expression can be as simple as a single variable or literal value, or it can be as complex as a long mathematical expression that involves calls to various methods.
  - An important characteristic of expressions is to note that they are always reduced to a single value by the computer.
- Explain the difference between program statements and expressions as well as how the two relate to each other
  - A program statement represents a complete instruction that the compiler can translate into machine language. An analogy can be made that a program statement is like a sentence: Just as a sentence communicates a complete thought or idea, so a program statement represents a complete instruction.
  - An expression is not a complete instruction; rather it is a combination of values, variables, method calls, and operators that will eventually be reduced to a single "value" by the computer. Expressions are often a part of program statements, and their role in program statements is akin to the role of phrases in English sentences: A phrase is not, by itself, a complete thought or idea; it must exist in a context in order to have its complete meaning. In a similar way, expressions play a part in the grammar of various kinds of program statements, providing a way of generating values that will be used by the program statement.
- List the three general sets of operators in C#
  - Arithmetic, Relational, and Logical
- Describe the two basic rules of using arithmetic operators that every compiler must follow.
  - For an arithmetic operator to work, both sides of the operator must be the same data type.
  - The resulting value of an arithmetic operation is of the same data type as the operands involved in the operation.
- Explain what is meant by "integer division" and how that can be useful in solving particular problems regarding numbers.
  - "Integer division" is the term for what occurs when both operands of a division operation are whole numbers (which can apply to byte, int, short, and long data types). Because the basic rule of arithmetic operations is that the data type of the final value of an operation is the same as that of the operands, any time we divide one whole number by another whole number, the result is a whole number: Any "fractional portion" is automatically discarded (lost or ignored). For example, `1 / 3` becomes the value `0`, and `7 / 2` results in a value of `3`.
- Explain the purpose of the modulus (%) operator.
  - The modulus operator (%) is used to find the remainder of a division operation. This operator is typically used with integers.
- List and describe how to use the various assignment operators in C#
  - All assignment operators require a variable on the left side and an expression on the right side. Assignment operators take the final value of the expression on the right and stores that value in the variable on the left.
  - **`=` ** - This is the standard assignment operator. It performs a simple assignment of the value on the right to the variable on the left.
  - **`+=`** - This assignment operator takes the value on the right and adds it to the value already existing in the variable on the left. For example
    - **`x += y;`** is the same as writing **`x = x + (y);`**
    - **`x += y * z;`** is the same as writing **`x = x + (y * z);`**
  - **`-=`** - This assignment operator takes the value on the right and subtracts it from the value already existing in the variable on the left. For example
    - **`x -= y;`** is the same as writing **`x = x - (y);`**
    - **`x -= y * z;`** is the same as writing **`x = x - (y * z);`**
  - **`*=`** - This assignment operator takes the value on the right and multiplies it to the value already existing in the variable on the left. For example
    - **`x *= y;`** is the same as writing **`x = x * (y);`**
    - **`x *= y * z;`** is the same as writing **`x = x * (y * z);`**
  - **`/=`** - This assignment operator takes the value on the right and divides it into the value already existing in the variable on the left. For example
    - **`x /= y;`** is the same as writing **`x = x / (y);`**
    - **`x /= y * z;`** is the same as writing **`x = x / (y * z);`**
  - **`%=`** - This assignment operator takes the value on the right and divides it into the value already existing in the variable on the left to generate the remainder. For example
    - **`x %= y;`** is the same as writing **`x = x % (y);`**
    - **`x %= y * z;`** is the same as writing **`x = x % (y * z);`**
- Explain the difference between binary and unary operators
  - Binary operators require a variable or value on both sides of the operator.
  - Unary operators only require a variable or value on one side of the operator for it to perform its operation.
- Summarize and distinguish the rules for automatic type conversion involving arithmetic operators and the assignment operator
  - Automatic type conversion takes place for the data types that are built in to the programming language.
  - The basic rule of automatic type conversion involving arithmetic operators is that if two operands of a binary operator are of different data types, then the value of the one that is "smaller" is "upsized" to the data type of the "larger" operand.
  - For the assignment operators, automatic type conversion is limited to only allowing the right-hand value to be converted to the data type of the variable on the left-hand side. Type conversion cannot convert a value from the right hand side if that value's data type is larger than the data type of the left hand side; if the right hand side is a larger data type than the left hand side, then a compiler error is generated that states the value cannot "fit" into the variable on the left.
- Describe "type casting" and explain how to use it appropriately.
  - Type casting is where we explicitly tell the compiler to "re-interpret" a particular value as a different data type than what the compiler is currently treating it as.
  - Type casting is appropriate when we want to avoid integer division in order to retain the fractional portion in the final result. For example, if the variables numerator and denominator are both integers, it is appropriate to use type casting in the following line of code:
  ```csharp
  double value = (double) (numerator) / denominator;
  ```
  - It is also appropriate when we need to "downcast" a value from a larger data type to a smaller data type (and can do so safely).
  - Note that **type casting does not (and can not) change the data type of a *variable***; type casting is only a re-interpretation of a value.
  - Note that **type casting is *not* the same as converting**. For example, any attempt to type cast the char value of the character ‘4' to an int will not produce a numeric value of 4; rather, it will produce the numeric value of 52 (which is the underlying decimal value for the character ‘4').
- Create constants in C#
  - Constants in C# are created using the keyword const and assigning the value to the constant at the time that it is declared. For example, to create a constant value for GST, you could code the following:
  ```csharp
  const double GST = 0.05; // 5% GST
  ```
- Explain how arithmetic operations affect character values in C#
  - Because the char data type is regarded as one of the "integral" data types, along with int, short and long, any arithmetic operations on char values will manipulate the underlying value as if it were simply a whole number.
    - *(Note: "Integral" data types are data types without a fractional component.)*
- List and describe some of the commonly used fields and methods of the String class
  - `.ToUpper()` – returns a String that has all the characters converted to their upper-case equivalents.
  - `.ToLower()` – returns a String that has all the characters converted to their lower-case equivalents.
  - `.Trim()` – returns a String that has all leading and trailing whitespace removed from the original String.
  - `.Chars(int index)` – returns the character at the index position for the string. (All strings have the first character as index position zero.)
  - `.Substring(int beginIndex)` and `.Substring(int beginIndex, int endIndex)` – returns a string that is the text inside of the first string beginning at a specified index. (All strings have the first character as index position zero.)
  - `.Length` – returns the total number of characters in the string.
- Demonstrate how to use "String Arithmetic" (concatenation)
  - To concatenate two or more strings, use the plus (+) operator.
  - To ***append*** one string onto another, simply add the string to be appended to the end of the original string. For example, to append "ing" to the word "end" in order to produce "ending", you could do the following:
  ```csharp
  string myWord = "end";
  myWord = myWord + "ing";
  ```
  - To ***pre-pend*** one string on another, add the string to be prepended to the start of the original string. For example, to prepend "un" to the word "imaginative" so as to produce "unimaginative", you would do the following:
  ```csharp
  string myWord = "imaginative";
  myWord = "un" + myWord;
  ```
- List the equivalent "wrapper" classes for each of the primitive types.
  - `Integer` &raquo; `int`
  - `Character` &raquo; `char`
  - `Double` &raquo; `double`
  - `Byte` &raquo; `byte`
  - `Long` &raquo; `long`
  - `Short` &raquo; `short`
  - `Float` &raquo; `float`

## Flow Control Statements

- List the three ways to organize program statements to control the flow of execution within a computer program.
  - The flow of execution within a program is controlled through organizing statements using simple sequence, decision structures, and/or looping structures.
  - Simple sequence refers to placing statements "in order". For example, if two program statements (A and B) are placed such that A occurs just before B, then those two statements are arranged in a simple sequence.
  - Decision structures provide mutually exclusive paths of logic that can be executed when a program is running. There are two types of decision structures: the If-Then-Else Structure and the Case Structure.
    - If-Then-Else structures provide two mutually exclusive paths of logic following a decision. The decision must evaluate to either "true" or "false"; one path of logic is followed if the decision is true, while the other path of logic is followed if the decision is false.
    - Case structures are used to provide three or more mutually exclusive paths of logic following a decision. If the item being evaluated in the decision matches the value which labels a particular path of logic, then that path of logic is executed while the other paths are "skipped" or ignored.
  - Looping structures allow program statements to repeat during runtime. There are two types of looping structures: the Do-While Structure and the Do-Until Structure.
    - In a do-while structure, the decision happens before the repeating logic. In a do-while structure, the minimum number of times that the repeating logic will run is zero (0).
    - In a do-until structure, the decision happens after the repeating logic. This means that in a do-until structure, the repeating logic will execute at least one (1) time.
- Identify the programming statement that corresponds to the If-Then-Else logical structure.
  - The if-else statement is used for If-Then-Else logical structures in C#.
- Describe what is meant by a "conditional expression"
  - A conditional expression is any expression which results in a Boolean (true/false) value.
- List the operator precedence for mixing logical, arithmetic, and relational operations
  - Logical Not (!), Arithmetic, Relational, Logical And/Or
- List the relational operators
  - `>`, `>;=`, `==`, `<=`, `<`
    - Greater Than (`>`)
    - Greater Than or Equal To (`>=`)
    - Is Equal To (`==`)
    - Less Than or Equal To (`<=`)
    - Less Than (`<`)
- List the logical operators
  - `&&`, `||`, `!`
    - and (`&&`)
    - or (`||`)
    - not (`!`)
- Define the term "boundary condition" as it relates to if-else statements and testing
  - The "boundary" is the border of a range of values that are regarded as "acceptable" for some variable. For example, if a particular variable named percent is to represent a range of values from zero through 100 inclusive, then the "boundary" values are zero and 100.
    - A boundary condition, then, is a test or comparison that is made against some boundary values. For example,
    ```csharp
    if(percent >= 0 && percent <= 100)
    {
    // code to perform if true
    }
    else
    {
    // code to perform if false
    }
    ```
    - A "boundary condition" is also known as a "fence-post condition".
- Identify the correct way to compare or check the contents of strings in conditional expressions
  - The proper way to compare string values is to use the `.Equals()`, `.CompareTo()` and `.IsNullOrEmpty()` methods.
  - Generally, the relational operators (`==`, `<`, etc) should not be used directly on string values.
- List and describe the commonly used fields and methods of the String class that would be used in if-else statements
  - `.Equals(string)` – returns a Boolean, true or false, as to whether the two strings are or are not equal.
  - `.Equals(string, StringComparison)` – returns a Boolean, true or false, as to whether the two strings are or are not equal, according to the value of the StringComparison argument (which includes values to ignore any differences in upper and lower case).
  - `.CompareTo(string anotherString)` – compares two strings "lexographically" (that is, alphabetically) and returns either
    - a zero if they are the same, or
    - a negative number if anotherString is greater than the first string, or
    - a positive number if anotherString is less than the first string
  - `.IsNullOrEmpty(string)` – returns true if the string is an empty string (""), false if it is not an empty string.
  - `.IsNullOrWhiteSpace(string)` – (only in .NET 4.0 and higher) returns true if the string is null, an empty string (""), or all "whitespace" (tab, newline) characters; false if it is not.
  - `.Length` – returns the total number of characters in the string.
- Describe how object-oriented programs run.
  - A computer program is a set of instructions for manipulating information.
  - Every computer program has a single starting (or entry) point called the Main method. The main method is responsible to "run" (or "execute) the program, and when the main method exits, the program closes and stops "running". The length of time that a program is running is called its "lifetime". As a program runs, it executes instructions in the program's code, one at a time; this is called the "flow of execution".
  - During the lifetime of a program, the main method creates objects and calls methods on those objects. Each method is basically a set of instructions to be executed. Those methods can, in turn, create other objects and call other methods.
  - Whenever a method is called, the operating system keeps track of which method is calling another method through something known as a "call stack".
- Describe what is meant by a "call stack".
  - A call stack is a mechanism to track which method is calling another method while the program is running. Call stacks allow the computer to know where to "return to" when a method exits.
  - At any given point during the program's execution, the method that is currently executing is referred to as the "called method". When the called method exits, it returns control back to the "calling method", thereby allowing the calling method to continue its own execution.
  - Whenever a method calls another method, the "calling method" pauses and waits for the "called method" to finish; once the called method returns, the calling method will resume executing its own code.
- Define the term "Exception"
  - An exception is a message of some run-time error that has occurred in a program. Exceptions interrupt the normal flow of execution in methods, forcing the method to immediately exit. Methods generate exceptions by using the "throw" statement. Any method may generate an exception (including constructors).
  - The throw statement exits the method by sending back an object (called an "Exception Object", or simply an "Exception") that can be used to identify the kind of error that has occurred. The calling method then has the opportunity to deal with (or "handle") the error; if the calling method does not handle the error, then the exception continues to go back through the call stack until it finds a method that will handle the exception.
  - If none of the methods on the call stack handle the exception that was thrown, control is eventually returned to the main method. If the main method does not handle the exception, then the exception is sent to the operating system. At that point, the operating system shuts down the program in what is called an "abnormal program termination".
- Describe what is meant by the phrase "raising (or throwing) an exception"
  - To "raise an exception" (or "throw an exception") is to force a method to exit prematurely by sending back an "Exception object".
- Describe the role that exceptions play in a computer program
  - An exception is an interruption in the normal flow of execution in a method; exceptions force the method to immediately exit.
  - Exceptions provide a way for methods (including constructors) to report errors to whatever code that is calling the method. These errors are usually (but not always) due to invalid information passed into the methods via the parameters. Through the use of exceptions, methods can perform validation on their parameters and report any errors that might prevent the method from being able to perform its task.
- Describe the parts of the try-catch-finally statement.
  - The syntax for the try-catch-finally statement is as follows:
    ```csharp
    try
    {
        // statements
    }
    catch (ExceptionDataType ex)
    {
        // statements
    }
    finally
    {
        // statements
    }
    ```
  - The try block is always required.
  - The catch and finally blocks are optional, as long as at least one or the other is always present.
  - There can be more than one catch block, as long as each catch block specifies a different data type.
  - A try can include both the catch and the finally blocks.
- Identify the three most commonly used Exception types used in this course.
  - .NET Framework
          - ArgumentException – Typically thrown whenever an argument passed to a parameter does not have an "acceptable" value. For example, if a method has a parameter called "percent", it might perform validation to ensure that the value is not less than zero or greater than 100. If the value is not valid, it may be appropriate to throw an ArgumentException.
          - ArgumentNullException – Typically thrown whenever an object is checked for and found to be "null". (ArgumentNullException will be discussed in the topic on Enumerations and Composition.)
          - Exception – This represents a general exception, and can be used whenever there is no other suitable exception type.
- Discuss the limitations of the switch statement in C# and the available alternatives for the times that we can't use a switch statement
  - Switch statements only work with integral data types (such as char and int).
  - The individual case values must be constants; variable expressions are not allowed for the matching cases.
  - Switch statements only check for exact matches (meaning that there is an implied "is-equal-to" comparison); other relational comparisons, such as greater than or less than, are not allowed.
  - When it is not possible to use switch statements, case structures can be written up as nested and/or stacked if-else structures to make use of the if-else statement.
- Identify the C# statements that correspond to Do-While and Do-Until logical structures
  - Do-While Logical Structures in C# are coded using the following statements:<br />![](./do-while.png)
    - While Statement: `while(conditionalExpression) statementOrStatementBlock;`
    - For Statement: `for(initialization; conditionalExpression; increment) statementOrStatementBlock`
    - Foreach Statement: `foreach(dataType variableName in collectionOrArray) statementOrStatementBlock`
  - Do-Until Logical Structures in C# are coded using the following statements<br />![](./do-until.png)
    - Do-While Statement: 
    ```csharp
    do
        statementOrStatementBlock
    while(conditionalExpression);
- Identify and distinguish the parts of the for statement in code
    ```csharp
    for(initialization; conditionalExpression; increment)
        statementOrStatementBlock
    ```
    - `initialization` (optional) is where a variable or set of variables are declared and/or given then initial value before beginning the loop. This portion occurs only once, before the loop is entered and the conditional expression is evaluated.
    - `conditionalExpression` is any expression which results in a Boolean value of true or false; this expression typically includes the variable(s) identified in the initialization and increment sections.
    - `increment` (optional) is where a variable or set of variables have their value(s) changed. This occurs at the end of each time through the loop (after the and before the conditionalExpression)
- Describe the common situations in which the for statement is used
  - for statements are typically used with collections or arrays whenever there is a need to loop though all or part of the collection or array. Typically, the items controlling the for statement are related to the index position within the collection or array.
  - for statements are also used whenever the conditional expression controlling the repetitive logic involves counting.
- Identify the parts of the foreach statement
    ```csharp
    foreach(DataType variableName in collectionOrArray)
        statementOrStatementBlock
    ```
    - `DataType` is the data type of each kind of item in the collectionOrArray.
    - `variableName` is a variable which represents a single item in the collectionOrArray; this variable is re-assigned to the next item in the collectionOrArray on each time through the loop, so that every item in the collectionOrArray is represented exactly once.
    - `collectionOrArray` is some collection of items of the type identified by DataType. It can be an array, or a `List<T>` or any other collection.
- Describe the common situations in which the foreach statement is typically used
  - foreach statements are typically used when some task or action is being performed on or with every item in the collection or array. Also, foreach statements should be restricted from adding or removing items from the collection/array during the loop.
- Describe the concept of an "infinite loop"
  - An infinite loop is a looping statement that never exits because the conditional expression that controls the loop is always true. An infinite loop is always regarded as a logical or run-time error.

## Array and List&lt;T&gt;

> *TBA*

## OOP Theory

> *TBA*
