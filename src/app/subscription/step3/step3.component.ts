import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './step3.component.html'
})
export class Step3Component {

  data = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: ''
  };
  errors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: ''
  };
  valid = {
    firstName: 2,
    lastName: 2,
    email: 2,
    password: 2,
    confirm: 2
  };

  constructor(private router: Router) {}

  ngOnInit() {
    document.getElementById('step3').setAttribute("disabled", "disabled");
    $('.icon-eye').click(function () {
      const _ = $(this);
      if (_.prev().attr('type') === 'password') {
        _.prev().attr('type', 'text');
      } else {
        _.prev().attr('type', 'password');
      }
    })
  }

  isEmpty(field: string): boolean {
    let error = false;
    const isEmptyRegex = /^\s*$/;
    error = isEmptyRegex.test(field);
    return error;
  }

  isEmail(email: string): boolean {
    let valid = true;
    let empty = false;
    let format = false;

    const isEmptyRegex = /^\s*$/;
    empty = isEmptyRegex.test(email);
    if (empty) return valid = false;

    const isEmailRegex = /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    format = !isEmailRegex.test(email);
    if (format) {
      return valid = false;
    }
    return valid = true;
  }

  checkField(field, value) {
    switch (field) {
      case 'firstName':
        if (value.length >= 2) {
          this.errors.firstName = '';
          this.data.firstName = value;
          this.valid.firstName = 1;
        } else if (value.length === 0) {
          this.errors.firstName = "Pas de prénom, pas de souscription ! :D";
          this.valid.firstName = 0;
        } else {
          this.errors.firstName = "'" + value + "'... Drôle de prénom ! :o";
          this.valid.firstName = 0;
        }
        break;
      case 'lastName':
        if (value.length >= 2) {
          this.errors.lastName = '';
          this.data.lastName = value;
          this.valid.lastName = 1;
        } else if (value.length === 0) {
          this.errors.lastName = "Pas de nom, pas de souscription ! :D";
          this.valid.lastName = 0;
        } else {
          this.errors.lastName = "'" + value + "'... Drôle de nom ! :o";
          this.valid.lastName = 0;
        }
        break;
      case 'email':
        this.valid.email = this.isEmail(value) ? 1 : 0;
        if (this.valid.email === 1) {
          this.errors.email = '';
          this.data.email = value;
        } else {
          this.errors.email = 'Oups, ce mail semble incorrect ;(';
        }
        break;
      case 'password':
        if (value.length >= 8) {
          this.errors.password = '';
          this.data.password = value;
          this.valid.password = 1;
        } else {
          this.errors.password = "8 caractères mini, pour votre sécurité ;)";
          this.valid.password = 0;
        }
        break;
      case 'confirm':
        if (this.data.password === value) {
          this.errors.confirm = '';
          this.data.confirm = value;
          this.valid.confirm = 1;
        } else {
          this.errors.confirm = "Humm, les mots de passe ont l'air différents...";
          this.valid.confirm = 0;
        }
        break;
    }
    if (this.valid.firstName === 1 && this.valid.lastName === 1 && this.valid.email === 1 && this.valid.password === 1 && this.valid.confirm === 1) {
      document.getElementById('step3').removeAttribute('disabled');
    } else {
      document.getElementById('step3').setAttribute("disabled", "disabled");
    }
  }

  validation() {
    if (this.valid.firstName && this.valid.lastName && this.valid.email && this.valid.password && this.valid.confirm) {
      this.router.navigateByUrl('/souscrire/etape-4');
    }
  }
}
