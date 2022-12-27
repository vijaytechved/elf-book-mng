import { Injectable } from '@angular/core';
import { createStore, select,filterNil,setProps, withProps } from '@ngneat/elf';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import {
  selectAllEntities,
  setEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { Motor } from '../models/motor';
const initState = {
  journeyName:'',
  user: { id:''},
} 
//export const motorsStore = createStore({ name: 'motorsStore' }, withEntities<Motor>());
export const motorsStore = createStore({ name: 'motorsStore' }, withProps<Motor>(initState));
export const persist = persistState(motorsStore, { key: 'motor',storage: localStorageStrategy});

@Injectable({
  providedIn: 'root'
})
export class SharedMotorRepository {
  journeyName$ = motorsStore.pipe(select((state)=>state.journeyName));
  user$ = motorsStore.pipe(select((state) => state));
  constructor(){
    this.test()
  }
  test(){
    this.user$.subscribe(console.log);
   // this.CLick()
  }
// Should be the value after a refresh
  CLick(){
    setTimeout(() => {
      motorsStore.update((state) => ({
        ...state,
        user: { id: '1' },
      }));
    }, 1000)
  }

}
