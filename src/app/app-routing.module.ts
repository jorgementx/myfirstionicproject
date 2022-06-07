import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'places',
    children: [
      {
        path: '',
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path: ':placeId',
        loadChildren: () => import('./places/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
      }
    ]
  },
  {
    path: 'new-place',
    loadChildren: () => import('./places/place-add/place-add.module').then( m => m.PlaceAddPageModule)
  },
  {
    path: 'text-editor',
    loadChildren: () => import('./text-editor/text-editor.module').then( m => m.TextEditorPageModule)
  },
  {
    path: 'anime-list',
    loadChildren: () => import('./anime-list/anime-list.module').then( m => m.AnimeListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
