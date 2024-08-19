import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // modulo que realiza solicitudes HTTP y proporciona los metodos GET, POST, PUT, DELETE

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  //Poner el atributo URL
  private URL: string = 'https://hybrid.firebaseio.com/collection.json'; //tienes que crear otro firebase

  constructor(private http:HttpClient) { } // Aquí se inyecta el modulo

// luego, se neceista agregar los metodos de peticion que son GET Y POST

getResponse(){
  return this.http.get(this.URL);
}

postResponse(data: any){
  return this.http.post(this.URL, data);
}

}
