import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './subscription.component.html'
})
export class SubscriptionComponent {

  errors = {
    project: '',
    identity: ''
  };

  constructor(private router: Router) {}
  
  ngOnInit() {
    document.getElementById('step1').setAttribute("disabled", "disabled");
  }
  
  check() {
    console.log('check');
    const project = $("input[name='project']:checked").val();
    const identity = $("input[name='identity']:checked").val();

    if ( !project ) { 
      this.errors.project = 'Vous devez entrer votre projet';
    } else {
      this.errors.project = '';
    }
    if ( !identity ) {
      this.errors.identity = 'Vous devez entrer votre identité';
    } else {
      this.errors.identity = '';
    }
    if (project && identity) {
      document.getElementById('step1').removeAttribute('disabled');
    }
    return this.errors;
  }

  validation() {
    const errors = this.check();
    console.log(errors)
    if (errors.identity === '' && errors.project === '') {
      this.router.navigateByUrl('/souscrire/etape-2');
    }
  }

}
