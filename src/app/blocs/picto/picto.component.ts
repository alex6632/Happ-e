import { Component } from '@angular/core';
import { routerTransition } from '../../router.animation';

@Component({
  selector: 'bloc-picto',
  templateUrl: './picto.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PictoComponent {
  
}
