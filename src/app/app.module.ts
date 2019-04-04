import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { ProductService } from './services/product.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { MenuItems } from './core/menu/menu-items';
import { MenuNavComponent } from './core/menu/menu-nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IsLoginService } from './core/login/is-login.service';
import { LanguageService } from './core/language/language.service';
import { CartService } from './core/cart/cart.service';
import { OrdersService } from './core/orders/orders.service';
import { AddProductComponent } from './add-product/add-product.component';
import { ArchiveProductsComponent } from './archive-products/archive-products.component';
import { SearchComponent } from './search/search.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FishComponent } from './fish/fish.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AccountComponent } from './account/account.component';
import { SellerRouterService } from './services/seller-router.service';
import { BuyerRouterService } from './services/buyer-router.service';
import { RouterProtectionService } from './services/router-protection.service';
import { AdminRouterService } from './services/admin-router.service';
import { MyProductsComponent } from './my-products/my-products.component';
import { CartComponent } from './cart/cart.component';
import { Http, HttpModule } from '@angular/http';
import { ConfirmationEmailComponent } from './confirmation-email/confirmation-email.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { SingleStoreComponent } from './single-store/single-store.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { FeaturedSellerComponent } from './featured-seller/featured-seller.component';
import { FeaturedStoreComponent } from './featured-store/featured-store.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { environment } from '../../environments/environment';
import { TrackingComponent } from './tracking/tracking.component';
import { ProductsComponent } from './products/products.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { CommentsComponent } from './comments/comments.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersItemsComponent } from './orders-items/orders-items.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { RecentPurchasesComponent } from './recent-purchases/recent-purchases.component';
import { OrderPurchaseComponent } from './order-purchase/order-purchase.component';
import { ChartComponent } from './chart/chart.component';
import { DocumentsComponent } from './documents/documents.component';
import { TrackingCodeComponent } from './tracking-code/tracking-code.component';
import { FeaturedTypesComponent } from './featured-types/featured-types.component';
import { FishTypeMenuComponent } from './fish-type-menu/fish-type-menu.component';
import { BrowseComponent } from './browse/browse.component';
import { SfsPayComponent } from './sfs-pay/sfs-pay.component';
import { HelpComponent } from './help/help.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GuidesComponent } from './guides/guides.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AboutComponent } from './about/about.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { Interceptor } from './interceptor/interceptor';
import { FilterPipePipe } from './filter-pipe.pipe';
import { ShippingRatesComponent } from './shipping-rates/shipping-rates.component';
import { ShippingRatesService } from './services/shipping-rates.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CountriesService } from './services/countries.service';
import { PricingChargesService } from './services/pricing-charges.service';
import { OrderService } from './services/orders.service';
import { ThanksComponent } from './thanks/thanks.component';
import { PricingChargesComponent } from './pricing-charges/pricing-charges.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminOrdersShippedComponent } from './admin-orders-shipped/admin-orders-shipped.component';
import { ProductManagmentComponent } from './product-managment/product-managment.component';
import { PendingProductsComponent } from './pending-products/pending-products.component';
import { AdminOrderOutDeliveryComponent } from './admin-order-out-delivery/admin-order-out-delivery.component';
import { AdminOrderDeliveredComponent } from './admin-order-delivered/admin-order-delivered.component';
import { AdminOrderArrivedComponent } from './admin-order-arrived/admin-order-arrived.component';
import { PaymentsComponent } from './payments/payments.component';
import { RepaymentsComponent } from './repayments/repayments.component';
import { RefundsComponent } from './refunds/refunds.component';
import { RefundCasesComponent } from './refund-cases/refund-cases.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ItemsByStatusComponent } from './items-by-status/items-by-status.component';
import { CanceledDeliveredItemsComponent } from './canceled-delivered-items/canceled-delivered-items.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { AdminCountriesComponent } from './admin-countries/admin-countries.component';
import { ShippingByCityComponent } from './shipping-by-city/shipping-by-city.component';
import { ManageStoreTrimmingComponent } from './manage-store-trimming/manage-store-trimming.component';
import { ReviewcartComponent } from './reviewcart/reviewcart.component';
import { AdminLogisticManagmentComponent } from './admin-logistic-managment/admin-logistic-managment.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
import { CitiManagmentComponent } from './citi-managment/citi-managment.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ngfModule } from 'angular-file';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { FilternumberPipe } from './filternumber.pipe';
import { NgProgressModule } from 'ngx-progressbar';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationBuyerComponent } from './registration-buyer/registration-buyer.component';
import { Select2Module } from 'ng2-select2';
import { RegistrationSellerComponent } from './registration-seller/registration-seller.component';
import { NonsellerRouterService } from './services/nonseller-router.service';
import { TitleService } from './title.service';
import { AppPreloadingStrategy } from './app_preloading_strategy';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    data: { preload: false, delay: true },
  },
  {
    path: 'home', redirectTo: '/',
    data: { preload: false, delay: true }
  },
  {
    path: 'register', component: RegistrationBuyerComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'register-seller',
    component: RegistrationSellerComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [SellerRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'fish-type/:category/:page',
    component: ArchiveProductsComponent,
    canActivate: [BuyerRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'search/:search/:page',
    component: SearchComponent,
    canActivate: [BuyerRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'product/:id',
    component: SingleProductComponent,
    canActivate: [NonsellerRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'product-categories',
    component: FishComponent, canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
    canActivate: [SellerRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'account',
    component: EditAccountComponent,
    canActivate: [RouterProtectionService],
    data: { preload: false, delay: true }
  },
  {
    path: 'my-products',
    component: MyProductsComponent,
    canActivate: [SellerRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'manage-products',
    component: MyProductsComponent,
    canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [RouterProtectionService],
    data: { preload: false, delay: true }
  },
  {
    path: 'verification/:userid/:id',
    component: ConfirmationEmailComponent,
    data: { preload: true, delay: false }
  },
  {
    path: 'store/:id',
    component: SingleStoreComponent,
    canActivate: [RouterProtectionService],
    data: { preload: false, delay: true }
  },
  {
    path: 'featured-products',
    component: FeaturedProductsComponent,
    canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'featured-seller',
    component: FeaturedSellerComponent,
    canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'featured-types',
    component: FeaturedTypesComponent,
    canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'fish-types-menu',
    component: FishTypeMenuComponent,
    canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'admin',
    component: AdministratorComponent,
    canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [BuyerRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'tracking',
    component: TrackingComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'products/:query/:page',
    component: ProductsComponent,
    canActivate: [RouterProtectionService],
    data: { preload: false, delay: true }
  },
  {
    path: 'seller',
    component: SellerComponent,
    canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'buyer',
    component: BuyerComponent,
    canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [RouterProtectionService],
    data: { preload: false, delay: true }
  },
  {
    path: 'orders-items/:id',
    component: OrdersItemsComponent,
    canActivate: [RouterProtectionService],
    data: { preload: false, delay: true }
  },
  { path: 'comments', component: CommentsComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'recovery-password/:code', component: RecoveryPasswordComponent,
  data: { preload: true, delay: false } },
  { path: 'verify-users', component: VerifyUserComponent, canActivate: [AdminRouterService],
  data: { preload: true, delay: false } },
  { path: 'recent-purchases', component: RecentPurchasesComponent, canActivate: [SellerRouterService],
  data: { preload: false, delay: true } },
  { path: 'order-purchase/:item', component: OrderPurchaseComponent, canActivate: [SellerRouterService],
  data: { preload: false, delay: true } },
  { path: 'chart', component: ChartComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'documents', component: DocumentsComponent, canActivate: [RouterProtectionService],
  data: { preload: false, delay: true } },
  { path: 'tracking-code/:item', component: TrackingCodeComponent, canActivate: [RouterProtectionService],
  data: { preload: false, delay: true } },
  { path: 'browse', component: BrowseComponent,
  data: { preload: false, delay: true } },
  { path: 'sfspay', component: SfsPayComponent,
  data: { preload: false, delay: true } },
  { path: 'help', component: HelpComponent,
  data: { preload: false, delay: true } },
  { path: 'contact-us', component: ContactUsComponent,
  data: { preload: false, delay: true } },
  { path: 'guides', component: GuidesComponent,
  data: { preload: false, delay: true } },
  { path: 'terms-conditions', component: TermsConditionsComponent,
  data: { preload: false, delay: true } },
  { path: 'privacy-policy', component: PrivacyPolicyComponent,
  data: { preload: false, delay: true } },
  { path: 'cookies-policy', component: CookiesPolicyComponent,
  data: { preload: false, delay: true } },
  { path: 'about-us', component: AboutComponent,
  data: { preload: false, delay: true } },
  { path: 'advanced-search', component: AdvancedSearchComponent, canActivate: [BuyerRouterService],
  data: { preload: false, delay: true } },
  { path: 'shipping-rates', component: ShippingRatesComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'pricing-charges', component: PricingChargesComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'orders-shipped', component: AdminOrdersShippedComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'orders-arrived', component: AdminOrderArrivedComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'seller-fulfills-orders', component: AdminOrdersComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'orders-out-for-delivery', component: AdminOrderOutDeliveryComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'orders-delivered', component: AdminOrderDeliveredComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'payment-management', component: PaymentsComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'manage-orders', component: ManageOrdersComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'logistic-management', component: AdminLogisticManagmentComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'repayments', component: RepaymentsComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'refunds', component: RefundsComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'refund-cases', component: RefundCasesComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'reviewcart', component: ReviewcartComponent, canActivate: [BuyerRouterService],
  data: { preload: false, delay: true } },
  { path: 'checkout', component: CheckoutComponent, canActivate: [BuyerRouterService],
  data: { preload: false, delay: true } },
  { path: 'confirmation', component: ConfirmationComponent, canActivate: [BuyerRouterService],
  data: { preload: false, delay: true } },
  { path: 'thanks', component: ThanksComponent, canActivate: [BuyerRouterService],
  data: { preload: false, delay: true } },
  { path: 'items-status', component: ItemsByStatusComponent, canActivate: [BuyerRouterService],
  data: { preload: false, delay: true } },
  { path: 'pending-products', component: PendingProductsComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'historical-orders', component: CanceledDeliveredItemsComponent, canActivate: [BuyerRouterService],
  data: { preload: false, delay: true } },
  { path: 'products-list/page/:number', component: ProductListComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'manage-countries', component: AdminCountriesComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'manage-shipping-cities', component: ShippingByCityComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'manage-store-trimming', component: ManageStoreTrimmingComponent, canActivate: [SellerRouterService],
  data: { preload: false, delay: true } },
  { path: 'port-loading-management', component: CitiManagmentComponent, canActivate: [AdminRouterService],
  data: { preload: false, delay: true } },
  { path: 'forgot-password', component: ForgotPasswordComponent,
  data: { preload: false, delay: true } }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddProductComponent,
    ArchiveProductsComponent,
    SearchComponent,
    EditProductComponent,
    FishComponent,
    SingleProductComponent,
    AccountComponent,
    MyProductsComponent,
    CartComponent,
    ConfirmationEmailComponent,
    SingleStoreComponent,
    FeaturedProductsComponent,
    FeaturedSellerComponent,
    FeaturedStoreComponent,
    AdministratorComponent,
    FavoritesComponent,
    TrackingComponent,
    ProductsComponent,
    SellerComponent,
    BuyerComponent,
    CommentsComponent,
    OrdersComponent,
    OrdersItemsComponent,
    RecoveryPasswordComponent,
    VerifyUserComponent,
    RecentPurchasesComponent,
    OrderPurchaseComponent,
    ChartComponent,
    DocumentsComponent,
    TrackingCodeComponent,
    FeaturedTypesComponent,
    FishTypeMenuComponent,
    BrowseComponent,
    SfsPayComponent,
    HelpComponent,
    ContactUsComponent,
    GuidesComponent,
    TermsConditionsComponent,
    AboutComponent,
    AdvancedSearchComponent,
    FilterPipePipe,
    ShippingRatesComponent,
    CheckoutComponent,
    ConfirmationComponent,
    ThanksComponent,
    PricingChargesComponent,
    AdminOrdersComponent,
    AdminOrdersShippedComponent,
    ProductManagmentComponent,
    PendingProductsComponent,
    AdminOrderOutDeliveryComponent,
    AdminOrderDeliveredComponent,
    AdminOrderArrivedComponent,
    PaymentsComponent,
    RepaymentsComponent,
    RefundsComponent,
    RefundCasesComponent,
    ManageOrdersComponent,
    ItemsByStatusComponent,
    CanceledDeliveredItemsComponent,
    ProductListComponent,
    AdminCountriesComponent,
    ShippingByCityComponent,
    ManageStoreTrimmingComponent,
    ReviewcartComponent,
    AdminLogisticManagmentComponent,
    PrivacyPolicyComponent,
    CookiesPolicyComponent,
    CitiManagmentComponent,
    EditAccountComponent,
    FilternumberPipe,
    ForgotPasswordComponent,
    RegistrationBuyerComponent,
    RegistrationSellerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: AppPreloadingStrategy
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFontAwesomeModule,
    FileUploadModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: function (http: Http) { return new TranslateStaticLoader(http, '/assets/i18n', '.json'); },
      deps: [Http]
    }),
    NgxSmartModalModule.forRoot(),
    BarRatingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TooltipModule,
    ngfModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes
    }),
    NgProgressModule,
    Select2Module

  ],
  providers: [
    AppPreloadingStrategy,
    AuthenticationService,
    MenuItems,
    IsLoginService,
    ProductService,
    SellerRouterService,
    BuyerRouterService,
    NonsellerRouterService,
    RouterProtectionService,
    LanguageService,
    AdminRouterService,
    CartService,
    OrdersService,
    ShippingRatesService,
    CountriesService,
    PricingChargesService,
    TitleService,
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'en' },
    OrderService, {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
