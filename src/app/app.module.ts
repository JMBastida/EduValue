import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { AccordionModule } from "ngx-bootstrap/accordion"
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { PopoverModule } from "ngx-bootstrap/popover";
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './home-page/header/header.component';
import { ListCardComponent } from './shared/list-card/list-card.component';
import { UniversityFiltersComponent } from './shared/filters/university-filters/university-filters.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { NonUniversityFiltersComponent } from './shared/filters/non-university-filters/non-university-filters.component';
import { RateModalComponent } from './views/rate-modal/rate-modal.component';
import { ModalModule } from './shared/services/modal/modal.module';
import { RatingComponent } from './rating/rating.component';
import { RateCardComponent } from './rating/rate-card/rate-card.component';
import { GoogleButtonComponent } from './shared/google-button/google-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ListCardComponent,
    UniversityFiltersComponent,
    FilterPipe, HighlightDirective, NonUniversityFiltersComponent, RateModalComponent, RatingComponent, RateCardComponent, GoogleButtonComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
