import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  modalOpen = false;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_692xmee',
        'template_08mwokp',
        e.target as HTMLFormElement,
        'user_fho8Bk2ef5EPCShODrioc'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.success();
  }

  success() {
    this.modalOpen = true;

    setTimeout(() => (this.modalOpen = false), 3000);
  }

  constructor() {}

  ngOnInit(): void {}
}
