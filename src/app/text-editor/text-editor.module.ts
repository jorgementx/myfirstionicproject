import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextEditorPageRoutingModule } from './text-editor-routing.module';

import { TextEditorPage } from './text-editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextEditorPageRoutingModule,
  ],
  declarations: [TextEditorPage]
})
export class TextEditorPageModule {}
