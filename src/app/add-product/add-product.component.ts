import { NgModule, Pipe, Component, OnInit } from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ProductService} from'../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

 langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  name: FormControl;
  price: FormControl;
  measurement: FormControl;
  description: FormControl;
  types: FormControl;
  base:string="http://138.68.19.227:7000";
  pTypes:any = [];

  constructor(private product:ProductService){}
  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.getTypes();
  }
  
  getTypes(){
    this.product.getAllCategoriesProducts().subscribe(result =>{
      console.log(result);
      this.pTypes = result;
    })
   
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.price = new FormControl('', Validators.required);
    this.measurement = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.types = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      name: this.name,
      price: this.price,
      measurement: this.measurement,
      description: this.description,
      types: this.types
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      let data = {
        "type" : this.types.value,
         "quality": "good",
          "name": this.name.value,
          "description": this.description.value,
          "country": "United States",
          "price": {
              "type": "US Dollar",
              "value": this.price.value,
              "description":  this.price.value + " for pack"
          },
          "weight": {
              "type": this.measurement.value,
              "value": 5
          }
      }
      console.log(data);
      this.product.saveData('fish', data).subscribe(result =>{
          this.myform.reset();
          console.log("Done", result);
          alert("Product added succesfully!");

      });
    }
  }

}
