# Quadratic Equation Solver 

## Description

This is a console application that solves quadratic equations. It includes two modes:
- interactive;
- not interactive;

In interactive mode, the user enters the data himself, the application accepts them and solves the quadratic equation.
In non-interactive mode, data is read from the file specified by the user.

## How to use

### To start in interactive mode: 

```
$ node index.js
```

### Interactive mode output example:

```
a = 2
b =  8
c = 6
Equation is:  (2)x^2 + (8)x + (6) = 0
There are 2 roots
x1 = -1.000
x2 = -3.000
```
If incorrect data is entered, the program will ask you to enter correct data:
```
Input a: asdfg
Error. Expected a valid real number, got asdfg instead
Input a: 5
Input b: sdfg
Error. Expected a valid real number, got sdfg instead
Input b: 3
Input c: sdf
Error. Expected a valid real number, got sdf instead
Input c: 2
Equation is: (5) x^2 + (3) x + (2) = 0
There are 0 roots
```
If a = 0, the application shows an error
```
Input a: 0
Error. a cannot be 0
Input a: 0   
Error. a cannot be 0
Input a: 1
Input b: 2
Input c: 1
Equation is: (1) x^2 + (2) x + (1) = 0
There are 1 roots 
x1 = -1.000
```

### To start non-interactive mode:

```
$ node index.js /pathToFile
```

### Non-interactive mode output example:

File numbers.txt: 1 -5 4

```
Equation is:  (1)x^2 + (-5)x + (4) = 0
There are 2 roots
x1 = 4.000
x2 = 1.000
```
If a = 0, the application shows an error

```
node index.js ./numbers.txt 
Error. a cannot be 0
```

If incorrect data is entered in the file, an error will be displayed

```
node index.js ./numbers.txt
invalid file format
```

# Link on Revert Commit

[Revert commit](https://github.com/yarikkot04/lab1_software-methodology/commit/5c85b3a8a947adc448f4b303b73d2c34a96c46ec)
