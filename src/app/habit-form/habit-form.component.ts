import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HabitDataService } from "./habit-data.service";
import { CommonModule } from '@angular/common';
import { Habit } from '../habit';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-habit-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './habit-form.component.html',
  styleUrl: './habit-form.component.scss'
})
export class HabitFormComponent implements OnInit {
  public habits: Habit[] = [];
  private habitDataService: any;
  constructor(formBuilder: FormBuilder, habitDataService: HabitDataService) {
    this.habitDataService = habitDataService;
    this.habitForm = formBuilder.group({
      title: '',
      quantity: '',
      moreInfo: ''
    })
  }

  habitForm: any;
  @Output() addHabit: EventEmitter<any> = new EventEmitter();
  @Input() header!: string;
  // help() {}
  ngOnInit() {
    this.habitDataService.getJSON('/app/habit-data.json').subscribe((data: any) => {
      this.habits = data.habits;
    });
  }
  onSubmit(newHabit: any) {
    this.addHabit.emit(newHabit)
    this.habits.push(newHabit);
    this.habitForm.reset();
  }
}
