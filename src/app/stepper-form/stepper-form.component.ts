import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css'],
})
export class StepperFormComponent implements OnInit {
  public formControl = 'step';
  constructor() {}

  ngOnInit(): void {}
}
