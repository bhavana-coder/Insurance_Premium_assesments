import { Injectable } from '@angular/core';
import { OccupationValues } from '../models/occupation';
import { HttpClient,HttpClientModule, HttpParams } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateServiceService {

  constructor(private http:HttpClient) { }
  calculateMontlyPremium(memberValues:OccupationValues):Observable<number>{
     let params = new HttpParams()
     // .set('name', memberValues.name)
      .set('age', memberValues.age.toString())
     // .set('memberDob', memberValues.memberDob.toString())
      .set('rating', memberValues.rating.toString())
      .set('sumInsured', memberValues.sumInsured.toString());

    return this.http.get<number>('https://localhost:7017/Premium_calculation/GetPremium',
      {params,
       responseType: 'json'
      }).pipe(
    catchError(error => {
      console.error('Error occurred:', error);
      throw error; // or handle the error gracefully
    })
  );
}

  

}
