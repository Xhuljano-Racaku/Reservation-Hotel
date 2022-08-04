import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup= new FormGroup({});

  constructor(private builder: FormBuilder, private router: Router, private contact: ContactService) { }

  onSubmit(contactForm: any) {
    console.log(contactForm)
    this.contact.PostMessage(contactForm)
    .subscribe(response => {
    console.log(response)
    this.contactForm.reset();
        setTimeout(()=> {
          this.router.navigate(['/']);
          },30)
    location.href = 'https://mailthis.to/confirm'
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
    }

  ngOnInit(): void {
      this.contactForm = this.builder.group({
      'Fullname': new FormControl('', [Validators.required]),
      'Email': new FormControl('', [Validators.required, Validators.email]),
      'Comment': new FormControl('', [Validators.required])
      })
  }

}
