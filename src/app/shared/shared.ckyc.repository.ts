import { Injectable } from '@angular/core';
import { createStore, select,filterNil,setProps, withProps } from '@ngneat/elf';
import { localStorageStrategy,sessionStorageStrategy, persistState } from '@ngneat/elf-persist-state';
// import {
//   selectAllEntities,
//   setEntities,
//   withEntities,
// } from '@ngneat/elf-entities';

export interface CKYCMotorPros  {
  CKYCNumber: string,
  UidNumber: string,
  address1: string,
  address2: string,
  address3: string,
  city: string,
  corresAddress1: string,
  corresAddress2: string,
  corresAddress3:  string,
  corresCity:  string,
  corresCountry:  string,
  corresDist:  string,
  corresPin:  string,
  corresState: string,
  dob: string,
  email:  string,
  firstName:  string,
  lastName:  string,
  middleName: string,
  permAndCorresAddSame: string,
  pincode:  string,
  state:  string,
  
} 
const initState = {} as CKYCMotorPros;
//export const ckycStore = createStore({ name: 'ckycStore' }, withEntities<Motor>());
export const ckycMotorStore = createStore({ name: 'ckycStoreDetails' }, withProps<CKYCMotorPros>(initState));
export const persist = persistState(ckycMotorStore, { key: 'ckycStoreDetails',storage: sessionStorageStrategy});

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
