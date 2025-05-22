import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private formBuilder = inject(FormBuilder);

  contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  // Verificar antes de enviar el formulario al correo
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      emailjs
        .send(
          'service_xqntcvk',
          'template_nj53ryo',
          templateParams,
          'sKendoWe39N_fk0j6'
        )
        .then((res) => {
          console.log('Email successfully sent!', res.status, res.text);
          alert('Email successfully sent!');
        })
        .catch((err) => {
          console.error('Error sending email:', err);
        });
    } else {
      alert('Por favor, completa todos los campos del formulario.');
      console.log('Formulario inválido', this.contactForm);
    }
  }
}
