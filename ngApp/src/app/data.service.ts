import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url ="http://192.168.43.110:5000/employees"

  constructor(public http:HttpClient) 
  {

   }
   GetData()
   {
    return this.http.get(this.url);

   }
   AddData(emp:any)
   {
    return this.http.post(this.url,emp);

   }
   Delete(no:any)
   {
    return this.http.delete(this.url+"/"+no);
   }
   getdatabyid(no)
   {
    return this.http.get(this.url+"/"+no);
   }
   Update(emp)
   {
    return this.http.put(this.url+"/"+emp.no,emp);
   }







}
