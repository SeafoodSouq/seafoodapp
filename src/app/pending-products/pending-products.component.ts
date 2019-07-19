import { NgModule, Pipe, Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProductService } from '../services/product.service';
import { CountriesService } from '../services/countries.service';
import { ToastrService } from '../toast.service';
import { environment } from '../../environments/environment';
import { PricingChargesService } from '../services/pricing-charges.service';
import { InventoryService } from '../services/inventory.service';

declare var jQuery:any;

@Component({
  selector: 'app-pending-products',
  templateUrl: './pending-products.component.html',
  styleUrls: ['./pending-products.component.scss']
})
export class PendingProductsComponent implements OnInit {
  pendingProducts:any =[];
  selectedProductID:any;
  deniedProductGroup: FormGroup;
	denialMessage: FormControl;
  id:any;
  imageURL:string = environment.apiURLImg;
  currentPrincingCharges: any = [];
  currentExchangeRate: number;
  public approved = '';
  public not_approved = '';

  constructor(
    private toast: ToastrService,
    private productService: ProductService,
    private pricingChargesService: PricingChargesService, private invent:InventoryService ) {}

 ngOnInit() {
    this.getCurrentPricingCharges();
    this.getPendingProducts();
    this.createForm();
    this.invent.getIdentifier('fishstatus.approved.not_approved').subscribe(it=>{
      this.approved = it['fishstatus']['approved']['id'];
      this.not_approved = it['fishstatus']['not_approved']['id'];
    });
  }
  getCurrentPricingCharges() {
    this.pricingChargesService.getCurrentPricingCharges().subscribe(
      result => {
        this.currentPrincingCharges = result;
        console.log('result', result);
        this.currentExchangeRate = result['exchangeRates'];
        console.log(this.currentExchangeRate);
      }, error => {
        console.log(error);
      }
    );
  }

  createForm(){
    this.denialMessage = new FormControl('', Validators.required);
    this.deniedProductGroup = new FormGroup({
      denialMessage: this.denialMessage
    }); 
	}

  getPendingProducts(){
    this.productService.getPendingProducts().subscribe(
      result => {
        console.log("Pending", result);
        this.pendingProducts = result;
      },
      error => {
        console.log( error );
      }
    )
  }
  confirm( val ){
    if(val){
      this.productService.patchStatus( this.id, this.approved, { message: '' } )
      .subscribe(
        result => {
          this.getPendingProducts();
          this.id='';
          jQuery('#confirm').modal('hide');
          this.toast.success("Product Approved Successfully!",'Well Done',{positionClass:"toast-top-right"})
        },
        error => {
          this.getPendingProducts();
          this.toast.error("Something wrong happened, please try again", "Error",{positionClass:"toast-top-right"} );
        }
      )
    }
    else{
      jQuery('#confirm').modal('hide');
    }
  }
  deniedProduct(){
    let productID = this.selectedProductID;
    let message =   this.deniedProductGroup.value.denialMessage;
    
    this.productService.patchStatus( productID, this.not_approved, { message: message } )
    .subscribe(
      result => {
        this.getPendingProducts();
        this.toast.success("Product Denied Successfully!",'Well Done',{positionClass:"toast-top-right"})
        jQuery('#deniedProducts').modal('hide');
      },
      error => {        
        this.toast.error("Something wrong happened, please try again", "Error",{positionClass:"toast-top-right"} );
      }
    )
  }
  showDeniedModal(productID:string){
		this.selectedProductID= productID;    
    jQuery('#deniedProducts').modal('show');
  }
  showModal(id){
    this.id=id;
    jQuery('#confirm').modal('show');
  }
}
