
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { DevUIModule } from "ng-devui";
import { I18nModule } from 'ng-devui/i18n';
import { IconModule } from 'ng-devui/icon';
import { LazyLoadModule } from 'ng-devui/utils';
import { NumberTransModule } from 'ng-devui/number-translation';

import {
  AutoCompletePopupComponent,
  DatepickerComponent,
  DragPreviewComponent,
  DrawerComponent,
  InputNumberComponent,
  LoadingBackdropComponent,
  LoadingComponent,
  ModalComponent,
  ModalContainerComponent,
  PopoverComponent,
  ReadTipComponent,
  SelectComponent,
  StepsGuideComponent,
  ToastComponent,
  TooltipComponent,
  TreeSelectComponent
} from "ng-devui";

import { BasicComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ClipboardModule,
    DevUIModule,
    I18nModule,
    IconModule,
    LazyLoadModule,
    NumberTransModule,
    TranslateModule.forRoot()
  ],
  declarations: [ BasicComponent,  ],
  entryComponents: [
    AutoCompletePopupComponent,
    DatepickerComponent,
    DragPreviewComponent,
    DrawerComponent,
    InputNumberComponent,
    LoadingBackdropComponent,
    LoadingComponent,
    ModalComponent,
    ModalContainerComponent,
    PopoverComponent,
    ReadTipComponent,
    SelectComponent,
    StepsGuideComponent,
    ToastComponent,
    TooltipComponent,
    TreeSelectComponent,
    
  ],
  bootstrap: [ BasicComponent ],
})
export class AppModule { }