import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ProgramsService } from '../services/programs.service';
import { RegisterService } from '../services/register.service';
import { Program } from '../models/program.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public sucess: boolean = false;
  public error: string = '';
  public programsList: Program[] = [];
  public registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    family_name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    email: new FormControl('', [Validators.email]),
    phone: new FormControl('', [
      Validators.pattern('^[0-9]*$'),
      Validators.maxLength(10),
    ]),
    program: new FormControl(''),
    comment: new FormControl(''),
  });

  constructor(
    private programService: ProgramsService,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.getPrograms();
  }

  public getPrograms() {
    this.programService.getAllPrograms().subscribe((res) => {
      res.forEach((elem) => {
        let alreadyExist = this.programsList.find(
          (x: Program) => x.id == elem.id
        );
        if (!alreadyExist) {
          this.programsList.push(elem);
        }
      });
    });
  }

  public register() {
    const data = this.registerForm.value;
    this.registerService.register(data).subscribe({
      next: (data) => {
        this.sucess = true;
        this.registerForm.reset();
      },
      error: (error) => {
        this.error = error.messsage;
      },
    });
  }

  get name(): any {
    return this.registerForm.get('name');
  }

  get family_name(): any {
    return this.registerForm.get('family_name');
  }

  get email(): any {
    return this.registerForm.get('email');
  }

  get phone(): any {
    return this.registerForm.get('phone');
  }

  get program(): any {
    return this.registerForm.get('program');
  }

  get comment(): any {
    return this.registerForm.get('comment');
  }
}
