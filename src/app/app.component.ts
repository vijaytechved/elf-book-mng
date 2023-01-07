import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slideInAnimation],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elf-book-mng';
  childToParents:any
  name = "Vijay"
  users = ['Admin','Super Admin', 'Teacher','Student', 'Parent'];
  Myform:FormGroup;
  isActive = true
  isDisabled = false
  firstName:any
  constructor(private fb:FormBuilder){
    this.Myform = this.fb.group({
      firstName:['']
    })
  }
  ngOninit(){
  //  this.click(true)
  
  } 
  getDatachildToParents(t){
   this.childToParents = t 
 //  console.log('childToParents', t)
  }
  formValue(){
   let val =  this.Myform.value
   console.log(val)
  }
  // ngOnChanges() { console.log('ngOnChanges','Called after every change to input properties and before processing content or child views.')}
  // ngOnInit() { console.log('ngOnInit','Called after the constructor, initializing input properties, and the first call to ngOnChanges.') }
  // ngDoCheck() {console.log('ngDoCheck','Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.')}
  // ngAfterContentInit() {console.log('ngAfterContentInit','Called after ngOnInit when the components or directives content has been initialized.') }
  // ngAfterContentChecked() { console.log('ngAfterContentChecked','Called after ngAfterContentInit when the components views and child views / the view that a directive is in has been initialized.')}
  // ngAfterViewInit() { console.log('ngAfterViewInit','') }
  // ngAfterViewChecked() { console.log('ngAfterViewChecked','Called after every check of the components views and child views / the view that a directive is in.') }
  // ngOnDestroy() { console.log('ngOnDestroy','Called once, before the instance is destroyed.') }
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
