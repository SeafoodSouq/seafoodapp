import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { OrderService } from '../services/orders.service';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from '../toast.service';
import { InventoryService } from '../services/inventory.service';
declare var jQuery: any;
@Component({
  selector: 'app-canceled-delivered-items',
  templateUrl: './canceled-delivered-items.component.html',
  styleUrls: ['./canceled-delivered-items.component.scss']
})
export class CanceledDeliveredItemsComponent implements OnInit {

  orders: any = [];
  orderStatus: any = [];
  status: any;
  newStatus: any;
  orderNumber: any;
  user: any;
  selectedStatus: string;
  selectedItemID: string;
  showNoData: boolean = false;

  public statuscancels = [];
  public pending_seller_confirmation = '';
  public pending_fulfillment = '';


  constructor(
    private orderService: OrderService,
    private toast: ToastrService,
    private auth: AuthenticationService,
    private invent: InventoryService
  ) { }

  ngOnInit() {
    this.user = this.auth.getLoginData();
    this.status = '0';
    this.getStatus();
    this.getOrders();
    this.invent.getIdentifier('orderstatus.delivered.cancelled_order.seller_cancelled_order').subscribe(it => {
      for(let t in it['orderstatus']){
        this.statuscancels.push(it['orderstatus'][t]);
      }
    });
    this.invent.getIdentifier('orderstatus.pending_seller_confirmation.pending_fulfillment').subscribe(it => {
      this.pending_seller_confirmation = it['orderstatus']['pending_seller_confirmation']['id'];
      this.pending_fulfillment = it['orderstatus']['pending_fulfillment']['id'];
    });
  }

  clear() {
    this.status = '0';
    this.orderNumber = '';
    this.getOrders();
  }

  onItemChange(selectedItem: string) {
    this.status = selectedItem;
    this.getOrders();
  }

  getOrders() {
    this.showNoData = false;
    console.log('status', this.status);
    console.log('orderNumber', this.orderNumber);

    if (
      (this.status === undefined && this.orderNumber === undefined) ||
      (this.status === '0' && (this.orderNumber === undefined || this.orderNumber === ''))
    ) {
      this.orderService.getCanceledDeliveredOrders(this.user['id']).subscribe(
        res => {
          if (res['length'] > 0) {
            this.orders = res;
            this.showNoData = false;
          } else {
            this.showNoData = true;
          }
        },
        error => {
          console.log(error);
          this.toast.error('Something happend, please refresh the page', 'System Error', { positionClass: 'toast-top-right' });
        }
      );
    } else if (this.status !== '0' && (this.orderNumber === undefined || this.orderNumber === '')) {// by status
      this.orderService.getOrdersBuyerByStatus(this.user['id'], this.status).subscribe(
        res => {
          if (res['length'] > 0) {
            this.orders = res;
            this.showNoData = false;
          } else {
            this.showNoData = true;
          }
          console.log(res);
        },
        error => {
          console.log(error);
          this.toast.error('Something happend, please refresh the page', 'System Error', { positionClass: 'toast-top-right' });
        }
      );
    } else if ((this.orderNumber !== undefined || this.orderNumber > 0) && this.status === '0') {// by order number
      this.orderService.getOrdersBuyerByNumber(this.user['id'], this.orderNumber).subscribe(
        res => {
          if (res['length'] > 0) {
            this.orders = res;
            this.showNoData = false;
          } else {
            this.showNoData = true;
          }
          console.log(res);
        },
        error => {
          console.log(error);
          this.toast.error('Something happend, please refresh the page', 'System Error', { positionClass: 'toast-top-right' });
        }
      );
    } else if (this.status !== '0' && this.orderNumber !== undefined || this.orderNumber !== '') {
      this.orderService.getOrdersBuyerByStatusAndNumber(this.user['id'], this.status, this.orderNumber).subscribe(
        res => {
          if (res['length'] > 0) {
            this.orders = res;
            this.showNoData = false;
          } else {
            this.showNoData = true;
          }
          console.log(res);
        },
        error => {
          console.log(error);
          this.toast.error('Something happend, please refresh the page', 'System Error', { positionClass: 'toast-top-right' });
        }
      );
    } else {
      this.orderService.getAllOrders().subscribe(
        res => {
          if (res['length'] > 0) {
            this.orders = res;
            this.showNoData = false;
          } else {
            this.showNoData = true;
          }
          console.log(res);
        },
        error => {
          console.log(error);
          this.toast.error('Something happend, please refresh the page', 'System Error', { positionClass: 'toast-top-right' });
        }
      );
    }
  }

  getStatus() {
    this.orderService.getOrderStatus().subscribe(
      res => {
        this.orderStatus = res;
      },
      error => {
        console.log(error);
        this.toast.error('Something happend, please refresh the page', 'System Error', { positionClass: 'toast-top-right' });
      }
    );
  }

}
