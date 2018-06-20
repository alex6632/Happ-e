import { Component } from '@angular/core';

@Component({
  selector: 'bloc-situation',
  templateUrl: './situation.component.html'
})
export class SituationComponent {

  demenagement = false;
  fournisseur = true;

  ngOnInit() {
    const button = $('.bloc-situation .button');
    button.click(function () {
      button.removeClass('active');
      $(this).addClass('active'); 
    });
  }
  
  toggleDemenagement() {
    if (this.demenagement === false) {
      this.demenagement = !this.demenagement;
      this.fournisseur = false;
    }
  }

  toggleFournisseur() {
    if (this.fournisseur === false) {
      this.fournisseur = !this.fournisseur;
      this.demenagement = false;
    }
  }
}
