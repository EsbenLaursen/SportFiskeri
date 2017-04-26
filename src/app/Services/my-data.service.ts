import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  sharingData: myData={id:0};

  saveData(str){
    console.log('save data function called' + str + this.sharingData.id);
    this.sharingData.id=str;
  }

  getData(): number
  {
  console.log('get data function called');
  return this.sharingData.id;
  }

}
export interface myData {
  id:number;
}
