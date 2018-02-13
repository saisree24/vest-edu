import { NgModule } from '@angular/core';


import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatTabsModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule

} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
