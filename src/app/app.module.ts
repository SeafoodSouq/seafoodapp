//import { BrowserModule } from '@angular/platform-browser';
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
import { SellerRouterService } from './services/seller-router.service';
import { BuyerRouterService } from './services/buyer-router.service';
import { AdminRouterService } from './services/admin-router.service';
import { RouterProtectionService } from './services/router-protection.service';
import { CountriesService } from './services/countries.service';

import { Http, HttpModule } from '@angular/http';
import { ConfirmationEmailComponent } from './confirmation-email/confirmation-email.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { FeaturedSellerComponent } from './featured-seller/featured-seller.component';
import { FeaturedStoreComponent } from './featured-store/featured-store.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { environment } from '../../environments/environment';

import { ProductsComponent } from './products/products.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';

import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { VerifyUserComponent } from './verify-user/verify-user.component';

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
import { PricingChargesService } from './services/pricing-charges.service';
import { OrderService } from './services/orders.service';
import { ThanksComponent } from './thanks/thanks.component';
import { PricingChargesComponent } from './pricing-charges/pricing-charges.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { AdminCountriesComponent } from './admin-countries/admin-countries.component';
import { ShippingByCityComponent } from './shipping-by-city/shipping-by-city.component';
import { ManageStoreTrimmingComponent } from './manage-store-trimming/manage-store-trimming.component';
import { ReviewcartComponent } from './reviewcart/reviewcart.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
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
    path: '',
    component: HomeComponent,
    data: { preload: true, delay: true },
  },
  {
    path: 'cart',
    loadChildren: 'app/lazy.module#LazyModule',
    data: { preload: false, delay: true },
  },
  {
    path: 'home', redirectTo: '/',
    data: { preload: true, delay: true }
  },
  {
    path: 'register',
    component: RegistrationBuyerComponent,
    data: { preload: true, delay: true }
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
    path: 'browse', component: BrowseComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'sfspay', component: SfsPayComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'help', component: HelpComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'contact-us', component: ContactUsComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'guides', component: GuidesComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'terms-conditions', component: TermsConditionsComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'privacy-policy', component: PrivacyPolicyComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'cookies-policy', component: CookiesPolicyComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'about-us', component: AboutComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'advanced-search', component: AdvancedSearchComponent, canActivate: [BuyerRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'shipping-rates', component: ShippingRatesComponent, canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'pricing-charges', component: PricingChargesComponent, canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },

  {
    path: 'reviewcart', component: ReviewcartComponent, canActivate: [BuyerRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'checkout', component: CheckoutComponent, canActivate: [BuyerRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'confirmation', component: ConfirmationComponent, canActivate: [BuyerRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'thanks', component: ThanksComponent, canActivate: [BuyerRouterService],
    data: { preload: false, delay: true }
  },

  {
    path: 'manage-countries', component: AdminCountriesComponent, canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'manage-shipping-cities', component: ShippingByCityComponent, canActivate: [AdminRouterService],
    data: { preload: false, delay: true }
  },
  {
    path: 'manage-store-trimming', component: ManageStoreTrimmingComponent, canActivate: [SellerRouterService],
    data: { preload: false, delay: true }
  },

  {
    path: 'forgot-password', component: ForgotPasswordComponent,
    data: { preload: false, delay: true }
  },
  {
    path: 'verification/:userid/:id',
    component: ConfirmationEmailComponent,
    data: { preload: true, delay: false }
  },
  {
    path: 'recovery-password/:code', component: RecoveryPasswordComponent,
    data: { preload: true, delay: false }
  },
  {
    path: 'verify-users', component: VerifyUserComponent, canActivate: [AdminRouterService],
    data: { preload: true, delay: false }
  },
  { path: 'lazy', loadChildren: './lazy.module#LazyModule', data: { preload: false, delay: false }},
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
];

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,

    ConfirmationEmailComponent,

    AdministratorComponent,
    FavoritesComponent,

    ProductsComponent,
    SellerComponent,
    BuyerComponent,

    RecoveryPasswordComponent,
    VerifyUserComponent,
    FeaturedProductsComponent,
    FeaturedSellerComponent,
    FeaturedStoreComponent,
    BrowseComponent,
    SfsPayComponent,
    HelpComponent,
    ContactUsComponent,
    GuidesComponent,
    TermsConditionsComponent,
    AboutComponent,
    AdvancedSearchComponent,
    ShippingRatesComponent,
    CheckoutComponent,
    ConfirmationComponent,
    ThanksComponent,
    PricingChargesComponent,

    AdminCountriesComponent,
    ShippingByCityComponent,
    ManageStoreTrimmingComponent,
    ReviewcartComponent,
    
    PrivacyPolicyComponent,
    CookiesPolicyComponent,

    ForgotPasswordComponent,
    RegistrationBuyerComponent,
    RegistrationSellerComponent,
  ],
  imports: [
    //CommonModule,
    //BrowserModule,
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: AppPreloadingStrategy
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFontAwesomeModule,

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
