import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './step2.component.html'
})
export class Step2Component {
  
  error = '';

  constructor(private router: Router) {}
  
  ngOnInit() {
    document.getElementById('step2').setAttribute("disabled", "disabled");
  }
  
  check() {
    const offer = $("input[name='offer']:checked").val();

    if ( !offer ) { 
      this.error = 'Vous devez choisir une offre';
    } else {
      this.error = '';
      document.getElementById('step2').removeAttribute('disabled');
    }
    return this.error;
  }

  validation() {
    const error = this.check();
    if (error === '') {
      this.router.navigateByUrl('/souscrire/etape-3');
    }
  }

}
