import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qualification-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './qualification-form.component.html',
  styleUrl: './qualification-form.component.css',
})
export class QualificationFormComponent {
  enteredFirstName = '';
  enteredLastName = '';
  enteredSummary = '';

  @Output() close = new EventEmitter();

  onSubmit() {
    console.log(this.enteredFirstName);
    console.log(this.enteredLastName);
    console.log(this.enteredSummary);
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
