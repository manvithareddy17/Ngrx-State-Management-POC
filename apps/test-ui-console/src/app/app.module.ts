import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ErrorsListComponent } from './errors-list/errors-list.component';
import {SharedDataAccessModule} from '@ngrxsample/shared/data-access'
import {SamErrorsComponent,SamFeatureShellModule} from '@ngrxsample/sam/feature-shell'
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  AutoCompleteModule, ButtonModule, CalendarModule, DataTableModule,
  DropdownModule, FieldsetModule, GrowlModule, InputTextModule,
  InputTextareaModule, MenubarModule, PanelModule, TabViewModule
  , RadioButtonModule, TreeModule, FileUploadModule, CheckboxModule,
  SplitButtonModule, InputMaskModule, ConfirmDialogModule, MultiSelectModule,
  ChartModule, AccordionModule, TieredMenuModule, SliderModule,
  DialogModule, ScrollPanelModule, OverlayPanelModule, EditorModule, ScheduleModule, DataGridModule
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorFormComponent } from './error-form/error-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ErrorsListComponent, ErrorFormComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    NxModule.forRoot(),
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    DataTableModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    FormsModule,
    GrowlModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    PanelModule,
    RadioButtonModule,
    SliderModule,
    TabViewModule,
    TreeModule,
    TieredMenuModule,
    CheckboxModule,
    SplitButtonModule,
    InputMaskModule,
    DialogModule,
    TableModule,
    ScrollPanelModule,
    ConfirmDialogModule,
    MultiSelectModule,
    ScrollPanelModule,
    ConfirmDialogModule,
    MultiSelectModule,
    ReactiveFormsModule,
    AccordionModule,
    OverlayPanelModule,
    ScheduleModule,
    AppRoutingModule,
    DataGridModule, DialogModule, TabViewModule,
    SamFeatureShellModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    SharedDataAccessModule,
    SamFeatureShellModule
  ],
  exports: [
    BrowserModule,
    ChartModule,
    FormsModule,
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    DataTableModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FormsModule,
    FileUploadModule,
    GrowlModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    PanelModule,
    RadioButtonModule,
    SliderModule,
    TabViewModule,
    TreeModule,
    TieredMenuModule,
    CheckboxModule,
    SplitButtonModule,
    InputMaskModule,
    ConfirmDialogModule,
    MultiSelectModule,
    ReactiveFormsModule,
    AccordionModule,
    DialogModule,
    TableModule,
    ScrollPanelModule,
    OverlayPanelModule,
    ScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
