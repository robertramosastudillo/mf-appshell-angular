import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'newClient',
  },
  {
    path: 'newClient',
    loadChildren: () =>
      import('mfNewClient/MfNewClientContentModule').then(
        (m) => m.MfNewClientContentModule
      ),
  },
  {
    path: 'preApproved',
    loadChildren: () =>
      import('mfPreApproved/MfPreApprovedContentModule').then(
        (m) => m.MfPreApprovedContentModule
      ),
  },
  { path: '**', redirectTo: 'newClient' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
