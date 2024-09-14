# PipesDeepDive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Overview
This project provides an in-depth exploration of Angular pipes, covering a range of topics from using built-in pipes to creating custom ones. The following concepts are covered:

- Using Built-in Pipes
- Building Your First Custom Pipe
- Using Custom Pipes to Perform Custom Transformations
- Accepting Parameters in Pipes
- Chaining Pipes & Understanding Their Limitations
- Building a Pipe that Sorts Items
- Understanding How Pipes are Executed
- Pure & Impure Pipes
- Pipe Limitations & When Not to Use Them

## Table of Contents
1. Using Built-in Pipes
2. Building Your First Custom Pipe
3. Using Custom Pipes to Perform Custom Transformations
4. Accepting Parameters in Pipes
5. Chaining Pipes & Understanding Their Limitations
6. Building a Pipe that Sorts Items
7. Understanding How Pipes are Executed
8. Pure & Impure Pipes
9. Pipe Limitations & When Not to Use Them

## Using Built-in Pipes
Angular provides several built-in pipes such as `DatePipe`, `UpperCasePipe`, `LowerCasePipe`, `CurrencyPipe`, and `PercentPipe` to transform data in your templates.

## Building Your First Custom Pipe
Creating a custom pipe involves defining a class with the `@Pipe` decorator and implementing the `PipeTransform` interface.

## Using Custom Pipes to Perform Custom Transformations
Custom pipes can be used to perform specific transformations on data, making your templates cleaner and more readable.

## Accepting Parameters in Pipes
Pipes can accept parameters to customize their behavior. Parameters are passed in the template using the pipe syntax.

## Chaining Pipes & Understanding Their Limitations
Pipes can be chained together to perform multiple transformations. However, it's important to be aware of performance implications and limitations.

## Building a Pipe that Sorts Items
A custom pipe can be created to sort an array of items based on specific criteria.

## Understanding How Pipes are Executed
Pipes are executed based on Angular's change detection mechanism. Understanding this helps in optimizing performance.

## Pure & Impure Pipes
Pipes can be either pure or impure. Pure pipes are executed only when their inputs change, while impure pipes are executed on every change detection cycle.

## Pipe Limitations & When Not to Use Them
Pipes have limitations and should not be used for complex logic or operations that affect the application state.

## Conclusion
This project provides a comprehensive guide to working with Angular pipes, covering essential concepts and best practices.

## Getting Started
To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
