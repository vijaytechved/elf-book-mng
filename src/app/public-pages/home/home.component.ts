import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  nums = [2,45,45,65,23,878,34];
  floats = [1.45, 1.56, 43.84,41.84]
  max :number;
  min :number;
  showValue:any;
  param = '?CompanyId=INSSOM&encparam=Q+CCRvJS36d04M6gizk56KbPUrnIMu83kwIpnG+E/TwgzBnzq6XjItoM2E2hOq8Zz56VYdOpeOZT8JvYJraZMMrYHxkhD/mKCjjyB9hP9yJZ7UCBcia4HdZaGGWV3oA+Mm1rtFdPU5uwx/lC2MqPp109O+G7w4qNNxs44weY371PDdVuL1AlqhTQ4sig910ec93LXwd+gqJhz6vrKLqJ4SWM0FPcG4yWuyhlLitYZM30x8lYm+xFeemP7/zR6AlkXUR0eNzI6pQZgGkTEltktUhauyJarXoA7DJr5DxIQIvT/BY5GE9i0xhYb3XVW5MtPMy7XJwfkcwTHFxBG0bSdr64axCbl4fgBDv42k0+voalXEeKUCjwuNuDrARR20Lpuh3de1jGgIhB3C9wU7rQQxyOa8Aw6F6RKfvKu3hRWz4AFNbOrdJEqs0ZuEpj71FQXI71bOkLKFvTS0X6xq9Oeckkx2TmQVk2jty2LzGRJnaODp3WYG9vpmfDZD9BV7gx1vy838rb3gjgTPh0BTbAWG6f+TzRKtTI0Yg+/CozGPFN+5mRaU1QDP+aVIgBr+Muqy44Vx3374+8+5By+9QbfL6WCVx3uoRPX7jIns6TVl4fHnMugUkBaVozH4YnsG+SRkI2htaGKm8NvCBLqNrY/LcdVdujX2szWlPiYwCgKPN57bfaCLhfE+wQuTC2IigSerMqiUPbIzcjpGOvXCdGyhhXsBhZpg7cvJ/5hurkprN3XL56GmoPhFx05oIAfkhsRG62FIdSlfZon30='
 // param = 'CompanyId'
  object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  JsMethod(){
  // this.max = this.nums.reduce((a, b) => Math.max(a, b), -Infinity); // using reducer
  // this.max = Math.max(...this.nums); // spread operator
  // this.max = Math.max.apply(null, this.nums); // using apply method
  // this.min = Math.min(...this.nums); // min 
  // this.max = Math.abs(-2); // give absolute value
  // this.showValue =  Math.floor(Math.max(...this.floats)); // not show decimoal nos.
  //this.showValue =  Math.ceil(Math.max(...this.floats)); // 44
  //this.showValue =  Math.floor(Math.max(...this.floats)); // 43
  //this.showValue =  Math.round(Math.max(...this.floats)); // 44
  // this.showValue =  Math.round(Math.min(...this.floats)); // 1
  // this.showValue  = Math.floor(Math.random() * 5); // only give 5 random numbers
   // this.showValue  = Math.trunc(Math.max(...this.floats)); // 43
  // this.showValue = Object.values(this.object1);
  // console.log(this.object1.a)
  // const a = { a: 1, b: 2 };
  // const b = { b: 4, c: 5 };
  // const c = Object.assign(a, b);//
  // console.log(a);
  // console.log(c);
  // // expected output: Object { a: 1, b: 4, c: 5 }
  // console.log(c === a);
  // expected output: true
  // const person = {
  //   isHuman: false,
  //   printIntroduction: function() {
  //     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  //   }
  // };
  
  // const me = Object.create(person);
  
  // me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  // me.isHuman = true; // Inherited properties can be overwritten
  
  // me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"
  // 
  // Using for...of loop
// const obj = { a: 5, b: 7, c: 9 };
// for (const [key, value] of Object.entries(obj)) {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// }

// Using array methods
// Object.entries(obj).forEach(([key, value]) => {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// });
const breakfasts = ['bacon', 'eggs', 'oatmeal', 'toast', 'cereal'];
const order = 'Let me get some bacon and eggs, please';

order.match(new RegExp(`\\b(${breakfasts.join('|')})\\b`, 'g'));
console.log(order)
// Returns ['bacon', 'eggs']

  }

  ParamClick(){
    const encoded = encodeURI(this.param);
   // this.router.navigateByUrl('/contact-us'+encoded)
   this.router.navigate(['/user-registration'])
  }
  
 
}
