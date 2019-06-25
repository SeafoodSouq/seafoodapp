import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reviewcart',
  templateUrl: './reviewcart.component.html',
  styleUrls: ['./reviewcart.component.scss']
})
export class ReviewcartComponent implements OnInit {

  shoppingCartId: any;
  checked: boolean = true;
  public myForm:FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName1 : new FormControl('', Validators.required),
      lastName1 : new FormControl('', Validators.required),
      companyName1 : new FormControl('', Validators.required),
      street1 : new FormControl('', Validators.required),
      city1 : new FormControl('', Validators.required),
      country1 : new FormControl('', Validators.required),
      sameAsBillingAddress : new FormControl(true, Validators.required),
      firstName2 : new FormControl('', Validators.nullValidator),
      lastName2 : new FormControl('', Validators.nullValidator),
      companyName2 : new FormControl('', Validators.nullValidator),
      street2 : new FormControl('', Validators.nullValidator),
      city2 : new FormControl('', Validators.nullValidator),
      country2 : new FormControl('', Validators.nullValidator),
    });

    this.myForm.valueChanges.subscribe(it=>{
      this.checked = it.sameAsBillingAddress;
    })

    this.route.queryParams.subscribe(params => {
      this.shoppingCartId = params['shoppingCartId'];
    });

  }



  goToNextPage() {
    let  val = this.myForm.value;
    this.http.patch('shoppingcart/' + this.shoppingCartId, { shippingDetails: val }).subscribe(() => {
      this.router.navigate(['/checkout'], { queryParams: { shoppingCartId: this.shoppingCartId } });
    });
  }

  back() {
    this._location.back();
  }

}
