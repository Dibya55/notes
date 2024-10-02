// but then here , why aa is printing first
// ex-1
// for (var i = 0; i < 2; i++) {
//     setTimeout(function (i) {
//         return function () {
//             console.log(i);
//         };
//     }(i), 0);
// }
// console.log("aa");

// ex-2   //here it prints first, but in this example
// for (var i = 0; i < 2; i++) {
//     setTimeout(console.log(i), 0)
// }
// console.log("aa") // it prints last

// here  it will print 0,1,aa




// Detailed Explanation
// Loop Execution:

// The for loop runs its iterations, setting up setTimeout calls.
// Each setTimeout schedules a function to be executed after a delay of 0 milliseconds.
// The function created in the closure captures the current value of i.
// Closure Function:

// setTimeout is called with a function that logs the captured i value.
// The immediately invoked function expression (IIFE) (function(i) { return function() { console.log(i); }; })(i) ensures that each iteration captures the current value of i and creates a new scope for it.
// Asynchronous Execution:

// The console.log("aa") statement is executed immediately after the loop completes.
// The setTimeout callbacks are added to the event queue and will be executed after the current call stack is cleared.
// Event Loop:

// After the synchronous code (console.log("aa")) finishes executing, the event loop picks up the setTimeout callbacks and executes them.
// The first callback logs 0.
// The second callback logs 1.


// console.log("aa");

// for (let i = 0; i < 2; i++) {
//     setTimeout(console.log(i), 100);
// }

// console.log("bb");



// This prints "aa" immediately.
// Loop with let and setTimeout:

// For let i = 0; i < 2; i++: This creates a block scope for each iteration of the loop.
// setTimeout(console.log(i), 100) is called twice. However, the console.log(i) is evaluated immediately and passed to setTimeout. The result of console.log(i) is undefined, so setTimeout is effectively called as setTimeout(undefined, 100).
// Here’s the issue:

// console.log(i) is called immediately, logging 0 and 1 during each iteration of the loop.
// setTimeout is then called with undefined as the first argument, which does nothing.
// Immediate Execution of console.log("bb"):

// This prints "bb" immediately after the loop


// here it  will print aa ,0,1, bb
// because during each iteration , 1st iteration here console.log log , then it  returns
// console.log(i) is called immediately, logging 0 and 1 during each iteration of the loop.
// setTimeout is then called with undefined as the first argument, which does nothing.
// so it print aa ,0 , 1 , bb.

// ---------------------------------------

// var -> function scope
// let ,const -> block scope
// without let ,var -> global scope


// ---------------------------------------------

// Spread Operator
// The spread operator is used to expand elements of an iterable (like an array or string,objects) into individual elements.
// 2)copy array or objects without mutatuing the original array
// 3)concanetate array or object easily
// 4)pass iterable elements as aruement to functions

// While objects are not iterable in the sense that arrays or strings are, the spread operator can still be used with objects to:

// Merge properties from multiple objects.
// Clone objects.
// Add or overwrite properties in objects.
// Combine objects with dynamic keys.
// These operations make the spread operator a powerful tool for manipulating objects in a concise and readable way.


// let arr = [1, 2, 3]
// function print(a, b, c) {
//     console.log(a + b + c)
// }
// print(...arr)


// obj1 = { a: 1, b: 2, c: 3 }
// console.log(...obj1)


// ------------------------------------------

// prototypes methods  must study

// in javascript , every object is linked to a prototype object from which it can inherit properties and methods .Objects created using object literal s or with the new keyword are linked to Object .protype by default.The prototype object itself is a regular object that contain s methods and properties that are accessible to all instances of a particular constructor function.]
// hasOwnProperty()
// isPrototypeOf()
// valueOf()
// toString()
// toLocaleString()
// propertyIsEnumerable()

// these methods fundamental for checking property existence ,iterating over properties , converting object to string and more.


// ----------------------------------------------

// Shallow Copy: Creates a new object with the same properties, but nested objects are still shared.
// Methods: Object.assign(), Spread Operator (...)
// Deep Copy: Creates a completely independent copy of the object, including nested objects.
// Methods: JSON.parse(JSON.stringify()), custom deep copy function, libraries like Lodash (_.cloneDeep())
// Choose the appropriate method based on the complexity of your object and your requirements.

// -----------------------------------------------------------------

// let obj2 = {
//     name: "dibya",
//     enrolled: {
//         name: "mohit",
//     },
//     role: 21
// }

// let obj3 = console.log(JSON.stringify(obj2))
// console.log(obj3, "dibya")
// obj3.enrolled.name = "sora"
// console.log(obj3, " obj3 sura")
// console.log(obj2, " obj2 sura")


// ----------------------

// for in and for of loop

// for...in
// Type: Used for objects.
// Iterates: Over enumerable property names (keys).
// Includes prototype properties: Yes.
// Example:

// const obj = { a: 1, b: 2, c: 3 };

// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// Output:
// a 1
// b 2
// c 3


// for...of
// Type: Used for iterables (arrays, strings, maps, sets, etc.).
// Iterates: Over values.
// Includes prototype properties: No.

// const arr = [1, 2, 3];

// for (let value of arr) {
//     console.log(value);
// }

// // Output:
// // 1
// // 2
// // 3

// for...in: Best used for iterating over the keys of an object.It includes enumerable properties and those inherited from the prototype chain.
//     for...of: Best used for iterating over the values of an iterable object like arrays, strings, maps, sets, etc.It does not include properties inherited from the prototype chain.


// -----------


// function foo(a, b=3){
// console.log(arguments)
// }
// foo(2,6)



// ----------------------- angular

// --> promise and obserables are two way to perform asynchronous operation in angular
// Javascript is a single threaded language ,it executes code in order and must finish executing a piece code before moving onto next code.

//  using asynchronous javascript , you can perform longh network requests without blocking the main threaded

// in two ways , we can do that one is promise and 2nd one 
// is  obserable , which is part of rxjs.

// obserable is not part of angular , it is part of rxjs , inorder to us eitwe have to use from rxjs.

// imp , i have doubt regarding obserables and subject.


// ----------------------------
// obserable vs promise 


// Observables
// Multiple Values Over Time:

// Observables can emit multiple values over time, making them ideal for handling streams of data, such as events or data that changes over time.
// Lazy Evaluation:

// Observables are lazy. They do not start emitting values until they are subscribed to. This means you can define an Observable but it won't do anything until you explicitly subscribe to it.
// Cancellable:

// Subscriptions to Observables can be cancelled using the unsubscribe method. This allows you to clean up resources and stop receiving data.
// Operators and Composition:

// Observables provide a rich set of operators (such as map, filter, merge, concat, etc.) that allow you to transform, filter, and combine multiple Observables in a functional programming style.
// Push Model:

// Observables use the push model for values, meaning the producer pushes values to the consumer (subscriber).
// Supports Multiple Subscribers:

// Multiple subscribers can subscribe to the same Observable, and each subscriber can receive the emitted values independently.
// Promises
// Single Value:

// Promises resolve to a single value (or an error) and do not change once they have been resolved or rejected. They are suitable for one-time asynchronous operations like fetching data from an API.
// Eager Evaluation:

// Promises are eager. They start executing immediately when they are created, regardless of whether there are any .then handlers attached.
// Not Cancellable:

// Promises cannot be cancelled once they are created. There is no built-in way to stop a Promise from executing or to clean up resources once it has started.
// Chaining:

// Promises support chaining using .then() and .catch() methods to handle resolved values and errors.
// Push Model:

// Promises also use the push model for values, but only push one value or error.
// Single Subscriber:

// Promises are designed for a single subscriber. They do not support multiple subscribers for the same execution context.
// Use Cases
// Observables:

// Ideal for handling continuous data streams, such as user input events, WebSocket messages, or data streams that can emit multiple values over time.
// Useful in Angular applications for handling HTTP requests, form input changes, and other asynchronous tasks with RxJS operators.
// Promises:

// Suitable for single asynchronous operations, such as HTTP requests, file operations, or any task that completes with a single value or error.
// Commonly used in modern JavaScript frameworks for handling asynchronous operations with a simple, linear flow.

// ------------------------------------------

// setTimeout is used for executing a function once after a specified delay.
// setInterval is used for executing a function repeatedly at regular intervals.
// Both methods can be canceled using clearTimeout and clearInterval, respectively.

// ---------------------------------

//promise 
const promise = new Promise((resolve, reject) => {
    console.log("promise") //2
    setTimeout(() => {
      resolve("promise is working")
      // inorder to return some data , we have to use resolve  
    }, 1000)
  })

  // for executing a promise

  // promise.then(result => console.log(result))


  // here even if we are not using then method , still 2 statement will
  // be printed, but in case of obserble , untill it is not subscribed , value will be not printed.


  //obserable

  // const obserable = new Observable(ob => {

  //   let counter = 0;
  //   setInterval(() => {
  //     counter++;
  //     ob.next(counter);
  //   }, 1000)
  // })

  // // for executing a obserables
  // obserable.subscribe(result => console.log(result))

    // if further we are moving into next page , we should  unsbuscribe to it
// to avoid memory leakage
  

// why we  should unsubscribe obserables in angular
// plz ask to chatgpt and understand it properly


// ---------------------------
// what is subject in angular? why we use it?
// what is replay subject? Have you heard about it

// -----------------------------
// async pipe
// simplifies displaying asynchronous  data in angylar template,
// directy subscribes to obserables or promises in templates.
// Manages subscription and unwraps data automatically

// ---------------------

// Here’s a complete example of how to use trackBy:

// app.component.ts
// typescript
// Copy code
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' }
//   ];

//   trackById(index: number, item: any): number {
//     return item.id;
//   }
// }
// app.component.html
// html
// Copy code
// <ul>
//   <li *ngFor="let item of items; trackBy: trackById">
//     {{ item.name }}
//   </li>
// </ul>
// Explanation
// trackBy Function: The trackById function returns the unique id for each item. Angular uses this ID to track changes to the items in the list.
// ngFor with trackBy: By specifying trackBy: trackById, Angular can efficiently update the DOM by only re-rendering the items that have actually changed.
// Benefits of Using trackBy
// Performance Improvement: Reduces the number of DOM updates required, especially with large lists or frequent updates.
// Efficient Re-rendering: Angular can track items more efficiently and avoid unnecessary re-renders.
// Using trackBy is a best practice for optimizing performance in Angular applications when working with lists.


// -----------------------------------

// so how can i unsubscribe  any subscriber in angular 
// ask chat gpt.

// To unsubscribe from a subscription in Angular, you typically follow these steps:

// 1. Manual Unsubscription
// If you have a subscription that needs to be explicitly unsubscribed from, you can keep a reference to the Subscription object and call unsubscribe() when appropriate. This is usually done in the ngOnDestroy lifecycle hook to clean up subscriptions when the component or service is destroyed.

// Example:
// Component Code:

// typescript
// Copy code
// import { Component, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-example',
//   templateUrl: './example.component.html',
//   styleUrls: ['./example.component.css']
// })
// export class ExampleComponent implements OnDestroy {
//   private subscription: Subscription;

//   constructor(private dataService: DataService) {
//     this.subscription = this.dataService.getData().subscribe(data => {
//       console.log(data);
//     });
//   }

//   ngOnDestroy(): void {
//     // Unsubscribe to prevent memory leaks
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }
// }
// 2. Using takeUntil Operator
// The takeUntil operator, combined with a Subject, allows you to automatically unsubscribe from observables when a certain condition is met (e.g., when the component is destroyed).

// Example:
// Component Code:

// typescript
// Copy code
// import { Component, OnDestroy } from '@angular/core';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-example',
//   templateUrl: './example.component.html',
//   styleUrls: ['./example.component.css']
// })
// export class ExampleComponent implements OnDestroy {
//   private destroy$ = new Subject<void>();

//   constructor(private dataService: DataService) {
//     this.dataService.getData()
//       .pipe(takeUntil(this.destroy$))
//       .subscribe(data => {
//         console.log(data);
//       });
//   }

//   ngOnDestroy(): void {
//     // Emit a value to complete the subject and unsubscribe from observables
//     this.destroy$.next();
//     this.destroy$.complete();
//   }
// }
// 3. Using take Operator
// The take operator can be used to automatically complete the observable after a specified number of emissions. This approach is useful for observables that you only need to listen to for a short time.

// Example:
// Component Code:

// typescript
// Copy code
// import { Component } from '@angular/core';
// import { take } from 'rxjs/operators';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-example',
//   templateUrl: './example.component.html',
//   styleUrls: ['./example.component.css']
// })
// export class ExampleComponent {
//   constructor(private dataService: DataService) {
//     this.dataService.getData()
//       .pipe(take(1)) // Automatically unsubscribes after the first emission
//       .subscribe(data => {
//         console.log(data);
//       });
//   }
// }
// 4. Using async Pipe
// For observables used directly in templates, the async pipe automatically handles subscription and unsubscription, so you do not need to manually unsubscribe.

// Example:
// Component Code:

// typescript
// Copy code
// import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   items$: Observable<any[]>;

//   constructor(private dataService: DataService) {
//     this.items$ = this.dataService.getData();
//   }
// }
// Template Code:

// html
// Copy code
// <!-- app.component.html -->
// <ul>
//   <li *ngFor="let item of items$ | async">
//     {{ item.name }}
//   </li>
// </ul>
// Summary
// Manual Unsubscription: Use subscription.unsubscribe() in ngOnDestroy.
// takeUntil Operator: Use with a Subject to automatically handle unsubscription.
// take Operator: Automatically unsubscribes after a certain number of emissions.
// async Pipe: Automatically manages subscriptions and unsubscriptions in templates.
// These methods help manage subscriptions effectively, preventing memory leaks and ensuring your Angular applications remain performant and maintainable.



// ------------------------------------
// rxjs operators like pipe ,map,filter


// ---------------












// ----------------------------------

// how can i unsubscribe without using unsubscribe?

// If you want to manage unsubscription without manually calling unsubscribe(), you can use various strategies that automate the process or handle it implicitly. Here are some approaches you can use:

// 1. Using the async Pipe
// The async pipe in Angular automatically handles subscription and unsubscription for observables in the template. This is the most straightforward method to avoid manual unsubscription:

// html
// Copy code
// <!-- app.component.html -->
// <ul>
//   <li *ngFor="let item of items$ | async">
//     {{ item.name }}
//   </li>
// </ul>
// In your component:

// typescript
// Copy code
// import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   items$: Observable<any[]>;

//   constructor(private dataService: DataService) {
//     this.items$ = this.dataService.getData();
//   }
// }
// 2. Using the takeUntil Operator with Subject
// The takeUntil operator in combination with a Subject helps manage unsubscription by automatically unsubscribing when a certain condition is met (e.g., when the component is destroyed).

// typescript
// Copy code
// import { Component, OnDestroy } from '@angular/core';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-example',
//   templateUrl: './example.component.html',
//   styleUrls: ['./example.component.css']
// })
// export class ExampleComponent implements OnDestroy {
//   private destroy$ = new Subject<void>();

//   constructor(private dataService: DataService) {
//     this.dataService.getData()
//       .pipe(takeUntil(this.destroy$))
//       .subscribe(data => {
//         console.log(data);
//       });
//   }

//   ngOnDestroy(): void {
//     this.destroy$.next(); // Emit a value to complete the observable
//     this.destroy$.complete(); // Complete the subject
//   }
// }
// 3. Using take Operator
// The take operator can automatically complete the observable after a specified number of emissions, making unsubscription unnecessary:

// typescript
// Copy code
// import { Component } from '@angular/core';
// import { take } from 'rxjs/operators';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-example',
//   templateUrl: './example.component.html',
//   styleUrls: ['./example.component.css']
// })
// export class ExampleComponent {
//   constructor(private dataService: DataService) {
//     this.dataService.getData()
//       .pipe(take(1)) // Automatically unsubscribes after the first emission
//       .subscribe(data => {
//         console.log(data);
//       });
//   }
// }
// 4. Using finally with rxjs (RxJS 7+)
// In RxJS 7 and above, you can use the finalize operator to perform actions when an observable completes or errors out. This helps with cleanup tasks:

// typescript
// Copy code
// import { Component } from '@angular/core';
// import { finalize } from 'rxjs/operators';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-example',
//   templateUrl: './example.component.html',
//   styleUrls: ['./example.component.css']
// })
// export class ExampleComponent {
//   constructor(private dataService: DataService) {
//     this.dataService.getData()
//       .pipe(finalize(() => {
//         // Perform any cleanup here
//       }))
//       .subscribe(data => {
//         console.log(data);
//       });
//   }
// }
// Summary
// async Pipe: Automatically handles subscription and unsubscription in templates.
// takeUntil Operator: Use with a Subject to handle unsubscription automatically.
// take Operator: Completes the observable after a specified number of emissions.
// finalize Operator: Executes cleanup code when the observable completes or errors.
// These methods help manage observables efficiently without the need for manual unsubscription, reducing the risk of memory leaks and improving code maintainability.


























