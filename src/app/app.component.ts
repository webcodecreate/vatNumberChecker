import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { noUndefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Project "VAT Number Checker"';
  private data:any = []
  constructor(private http: HttpClient) {}
  
  getData(){
    var numberCode = parseFloat((<HTMLInputElement>
      document.getElementById("numberCode")).value);
    var countryCode = (<HTMLInputElement>
      document.getElementById("countryCode")).value;

    if (numberCode == 0 || countryCode == '') {
      alert('VAT number is wrong. Try again!');
      return;
    }

    const url ='https://vat.erply.com/numbers?vatNumber='
    var customUrl = url + countryCode + numberCode 
    this.http.get(customUrl).subscribe((res)=>{
      this.data = res
      console.log(this.data)

      console.log(this.data["Address"]);
      console.log(this.data["CountryCode"]);
      console.log(this.data["Name"]);
      console.log(this.data["RequestDate"]);
      console.log(this.data["VATNumber"]);
      console.log(this.data["Valid"]);

      document.getElementById("address").innerHTML 
        = 'Address: ' + this.data["Address"];

      document.getElementById("countryAA").innerHTML 
        = 'Country Code: ' + this.data["CountryCode"];

      document.getElementById("name").innerHTML 
        = 'Name: ' + this.data["Name"];

      document.getElementById("requestDate").innerHTML 
        = 'Request Date: ' + this.data["RequestDate"];
        
      document.getElementById("vatNumber").innerHTML 
        = 'VAT Number: ' + this.data["VATNumber"];

      document.getElementById("validBoolean").innerHTML 
        = 'Valid: ' + this.data["Valid"];
    })
  }

}

@Component({
  selector: 'app-click-me'
})
export class ClickMeComponent {

}