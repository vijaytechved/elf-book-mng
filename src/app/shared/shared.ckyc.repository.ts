import { Injectable } from '@angular/core';
import { createStore, select,filterNil,setProps, withProps } from '@ngneat/elf';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
// import {
//   selectAllEntities,
//   setEntities,
//   withEntities,
// } from '@ngneat/elf-entities';

export interface CKYCMotorPros  {
  source: string,
  customerType: string,
  uniqueTransactionNumber: string,
  idType: string,
  idNo: string,
  dob: string,
  mobileNo: string,
  pincode: string,
  cKYCNo: string
  
} 
const initState = {} as CKYCMotorPros;
//export const ckycStore = createStore({ name: 'ckycStore' }, withEntities<Motor>());
export const ckycMotorStore = createStore({ name: 'ckycStoreDetails' }, withProps<CKYCMotorPros>(initState));
export const persist = persistState(ckycMotorStore, { key: 'ckycStoreDetails',storage: localStorageStrategy});

@Injectable({
  providedIn: 'root'
})
export class SharedMotorCKYCRepository {
  ckycStoreValue$ = ckycMotorStore.pipe(select((state)=>state));
  ckycStoreValueTest:any


  SetCKYCPOSTDATA(ckycStoreDetails:Partial<CKYCMotorPros>){
    ckycMotorStore.update((state)=>({...state, ...ckycStoreDetails})
    );
  }

  // test(){
  //   return this.ckycStoreValueTest.getValue();
  // }
 
}
