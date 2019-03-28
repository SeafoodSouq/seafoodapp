import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { TitleService } from '../title.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var jQuery: any;

@Component({
  selector: 'app-recent-purchases',
  templateUrl: './recent-purchases.component.html',
  styleUrls: ['./recent-purchases.component.scss']
})
export class RecentPurchasesComponent implements OnInit {
  user: any;
  items: any;
  storeID: string;
  dates = [];
  firstShipped:any = [];
  firstNoShipped:any = [];
  shipped: any;
  datesShipping = [];
  showMore: boolean = false;
  showLess: boolean = false;
  showMoreNoShipped: boolean = false;
  showLessNoShipped: boolean = false;
  showLoading: boolean = true;
  showProduct: boolean = false;
  showShipped: boolean = false;
  firstProducts: any;
  min = new Date();
  max = new Date();
  today = new Date();
  index: any;
  citemId: any;
	action: string;
  where: any;
  trackingForm:FormGroup;
  fileToUpload:any=[];
  invoice: FormControl;
  healthCert: FormControl;
  packingList: FormControl;
  awb: FormControl;
  certificateOrigin: FormControl;
  creditNote: FormControl;
  files:any;
  itemId: any;


  constructor(private productS: ProductService, private toast: ToastrService, private auth: AuthenticationService,
    private titleS: TitleService) {
      this.titleS.setTitle('Orders');
      this.min.setDate(this.today.getDate());
      this.max.setDate(this.today.getDate() + 90);
     }

  ngOnInit() {
    this.createFormControl();
    this.createForm();

    this.user = this.auth.getLoginData();
    this.getStore();
  }
  getStore() {
    this.productS.getData('api/store/user/' + this.user.id).subscribe(
      result => {
        this.storeID = result[0].id;
        this.getPurchases();
        this.getPurchasesShipped();
      },
      e => {
        console.log(e);
      }
    );
  }
  getPurchases() {
    // this.productS.getData('api/store/fish/paid/'+this.storeID).subscribe(
    this.productS.getData(`api/store/orders/not-shipped/user/${this.user.id}`).subscribe(
      result => {
        console.log(result);
        if (result && result !== '') {
          this.items = result;
          this.firstNoShipped =result;

          this.showLoading = false;
          this.showProduct = true;
          // this.getFirstNoShipped();
          // this.getDates();
        } else {
          this.showProduct = false;
          this.showLoading = false;
        }
      },
      e => {
        this.showProduct = false;
        this.showLoading = false;
        console.log(e);
      }
    );
  }
  getPurchasesShipped() {
    // this.productS.getData('api/store/fish/items/paid/' + this.storeID).subscribe(
    this.productS.getData(`api/store/orders/shipped/user/${this.user.id}`).subscribe(
      result => {
        console.log("Shipped", result);
        if (result && result !== '') {
          this.shipped = result;
          this.firstShipped = result;

          this.showShipped = true;
          // this.getFirstPurchases();
          this.getDatesShipped();
        } else {
          this.showShipped = false;
        }
      },
      e => {
        this.showShipped = false;
        this.showLoading = false;
        console.log(e);
      }
    );
  }
  getFirstPurchases() {
    this.firstShipped = [];
    this.shipped.forEach((data, index) => {
      if (index <= 10) {
        this.firstShipped[index] = data;
      }
    });
    if (this.shipped.length > 10) {
      this.showMore = true;
      this.showLess = false;
    } else {
      this.showMore = false;
      this.showLess = false;
    }
  }
  getAllPurchases() {
    this.showMore = false;
    this.showLess = true;
    this.firstShipped = this.shipped;

  }
  getFirstNoShipped() {
    this.firstNoShipped = [];
    this.items.forEach((data, index) => {
      if (index <= 3) {
        this.firstNoShipped[index] = data;
      }
    });
    if (this.items.length > 3) {
      this.showMoreNoShipped = true;
      this.showLessNoShipped = false;
    } else {
      this.showMoreNoShipped = false;
      this.showLessNoShipped = false;
    }
  }
  getAllNoShipped() {
    this.showMoreNoShipped = false;
    this.showLessNoShipped = true;
    this.firstNoShipped = this.items;
  }
  getDates() {
    this.items.forEach((data, index) => {
      // convert date
      const date = new Date(data.paidDateTime);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      let hours = date.getHours();
      const min = date.getMinutes();
      let minutes;
      if (min < 10) {
        minutes = '0' + min;
      } else {
        minutes = min;
      }
      let ampm = 'AM';
      if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
      }
      this.dates[index] = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + ' ' + hours + ':' + minutes + ' ' + ampm;
    });
  }
  getDatesShipped() {
    this.shipped.forEach((data, index) => {
      // convert date
      const date = new Date(data.shoppingCart.paidDateTime);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      let hours = date.getHours();
      const min = date.getMinutes();
      let minutes;
      if (min < 10) {
        minutes = '0' + min;
      } else {
        minutes = min;
      }
      let ampm = 'AM';
      if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
      }
      this.datesShipping[index] = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + ' ' + hours + ':' + minutes + ' ' + ampm;
    });
  }


  //Confirm order function
  confirmOrder(itemId: string) {
		let index = this.index;
		let sellerETA = jQuery(`#epa${itemId}`).val();

		this.productS.updateData('api/itemshopping/' + itemId + '/5c017af047fb07027943a405',
		{ userEmail: this.user['email'], userID: this.user['id'], sellerExpectedDeliveryDate: sellerETA }).subscribe(
			res => {
				jQuery('#confirm').modal('hide');
        console.log(res);
					this.toast.success(res['message'], 'Alert', { positionClass: 'toast-top-right' });
					this.firstNoShipped[index].items[0].updateInfo = res['item'][0].updateInfo;
				
			

			},
			e => {
				this.toast.error('Something wrong happened, please try again', 'Error', { positionClass: 'toast-top-right' });
			}
		);
		

		
  }
  

  //Show Modal for Confirm order
  showModal(id, action, index, where) {
		let sellerETA = jQuery(`#epa${id}`).val()
    this.index = index;
    this.where = where;
		console.log("index Modal", this.index);

		if ((sellerETA !== '' && sellerETA !== undefined) || action === 'cancel') {
			this.citemId = id;
			this.action = action;

			jQuery('#confirm').modal('show');
		} else {
			this.toast.error('Please select a Expected Delivery Time before Confirm the order', 'Error', { positionClass: 'toast-top-right' });
		}
  }
  
  //Confirm action in the modal 
  confirm(val, action) {
		if (val) {
			console.log(action);
			if (action == "confirm") {
				this.confirmOrder(this.citemId);
			}
			else if (action == 'cancel') {
				this.cancelOrder(this.citemId);
			}
		}
		else {
			jQuery('#confirm').modal('hide');
		}
  }
  

  //Cancel an order
  cancelOrder(itemId: string) {
		const status = {
			'id': itemId,
			'status': '5c06f4bf7650a503f4b731fd'
		};

		this.productS.updateData(`api/itemshopping/${status.id}/${status.status}`,
			{ userEmail: this.user['email'], userID: this.user['id'] }).subscribe(res => {

				console.log(res);
				jQuery('#confirm').modal('hide');
        this.toast.success('Order Canceled', 'Well Done', { positionClass: 'toast-top-right' });
        if(this.where == 'pending'){
        	this.firstNoShipped.splice(this.index, 1);
        }else{
          this.firstShipped.splice(this.index, 1);
        }
			},
				e => {
					this.toast.error('Something wrong happened, please try again', 'Error', { positionClass: 'toast-top-right' });
				});
  }
  
  //Function to open calendar to confirm order
  selectDate(id, index){
    this.index = index;
   let date = jQuery('#epa' + id).val();
   console.log("Item ID", id, date);
   this.confirmOrder(id);

  }

  //Create form controls and shipping docs form

  createFormControl(){
    this.invoice = new FormControl('', Validators.required);
    this.healthCert = new FormControl('', Validators.required);
    this.packingList = new FormControl('', Validators.required);
    this.awb = new FormControl('', Validators.required);
    this.certificateOrigin = new FormControl('');
    this.creditNote = new FormControl('');
  }

  createForm(){
    this.trackingForm = new FormGroup({
        invoice: this.invoice,
        healthCert: this.healthCert,
        packingList: this.packingList,
        awb: this.awb,
        certificateOrigin: this.certificateOrigin,
        creditNote: this.creditNote

    }, {
      updateOn: 'submit'
    });
  }

  //Validate each input fields of the form

  validateAllFormFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => { 
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);            
      }
    });
  }


  //Check if form is valid
  saveTracking(){
  
    if(this.trackingForm.valid){
      console.log("PDFs validos");
      console.log(this.trackingForm.value);
      this.sendToAPI();
    }else{
      this.validateAllFormFields(this.trackingForm);
    }
    }


    //Save docs in DATABASE
    sendToAPI(){
      let data = [
          this.trackingForm.get('invoice').value,
          this.trackingForm.get('healthCert').value,
          this.trackingForm.get('packingList').value,
          this.trackingForm.get('awb').value,
          this.trackingForm.get('certificateOrigin').value,
          this.trackingForm.get('creditNote').value
        ]
  
      let numItems = data.length; 
      data.forEach((element, index) => {
        console.log(index, numItems);
        
          this.productS.uploadPDF(element, this.itemId).subscribe(res =>{
            console.log(res);
              this.toast.success("Order marked as document fulfillment!",'Upload Succesfully',{positionClass:"toast-top-right"});

              jQuery('#shippingDocs').modal('hide');

          }, error => {
            console.log(error);
          })
        });
  
  
  
  
  }

  //Get file on input change and change the name before upload it

  handleFileInput(event, name) {
   

    if(event.target.files.length > 0) {
      let file = event.target.files;
      let ext = file[0].name.split(".");
      console.log("Nombre", name + '.' + ext[1]);

       var blob = file[0].slice(0, file[0].size, file[0].type); 
       console.log(blob);
       var newFile = new File([blob], name + '.' + ext[1], {type: file[0].type});

        console.log(newFile);
      // file[0].name=name;

      this.trackingForm.get(`${name}`).setValue(newFile);
    }
  }

  renameFilename(file, name) {
    return file.renameFilename = name + "." + file['name'].split('.').pop();
}
  
//Open shipping docs modal
openShippingModal(id, index){
  jQuery('#shippingDocs').modal('show');
  this.itemId = id;

}

generateCollapse(items, index, order, date, address){
  console.log("Items to add", items, index);
  items.forEach(element => {

   
    

    var markup = `<tr _ngcontent-c3>
    <td _ngcontent-c3>${order}</td>
    <td _ngcontent-c3>${date}</td>
    <td _ngcontent-c3>${address}</td>
    <td _ngcontent-c3>${element.quantity.value} kg </td>
    <td _ngcontent-c3>${element.fish.seafood_sku}</td>
    <td _ngcontent-c3> ${element.fish.name}</td>
    <td _ngcontent-c3>
    <button _ngcontent-c3 [owlDateTimeTrigger]="dt1"  *ngIf="${element.updateInfo} == null"><img _ngcontent-c3  src="../../assets/svg/calendar-blank.svg" alt=""></button>
    <button _ngcontent-c3 *ngIf="shipped.items[0].updateInfo != null" (click)="showModal(${element.id},'cancel', i, 'shipped')"><img _ngcontent-c3  src="../../assets/svg/close.svg" alt=""></button>
    <button _ngcontent-c3 *ngIf="shipped.items[0].updateInfo != null" (click)="openShippingModal(${element.id}, i)"><img _ngcontent-c3  src="../../assets/svg/attachment.svg" alt=""></button>
    <input  (change)="selectDate(${element.id})" type="hidden" [min]="min" [max]="max"  [owlDateTime]="dt1" id="epa${element.id}">
    <owl-date-time _ngcontent-c3="" _nghost-c4="" ng-reflect-picker-type="calendar"></owl-date-time>
        </td>
  </tr>`;
  // jQuery("#shipped-table tbody").append(markup);
  jQuery('#shipped-table > tbody > tr').eq(index).after(markup);

  });

}
}
