import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todos';

  currentDate = new Date();
  searchForm!: FormGroup;

  isDisable!: string;
  
  isCompleteList: any[] = [];
  isNotCompleteList: any[] = []
  isComplete: boolean = false;


  constructor(private fb: FormBuilder) {
    this.isDisable = 'gray';
    this.searchForm = this.fb.group({
      searchItem: ['', Validators.required]
    })

  }

  ngOnInit(): void { }

  addTask(): any {
    if (this.searchForm.valid) {
      const searchItem = this.searchForm.controls.searchItem.value;
      let value = {
        name: searchItem, id: this.isNotCompleteList.length + 1, isCompleted: false
      };
      this.isNotCompleteList.unshift(value);
      this.searchForm.reset();
    }
  }

  removeTask(item: any): any {
    if (item.isCompleted === false) {
      const index = this.isNotCompleteList.indexOf(item);
      this.isNotCompleteList.splice(index, 1);
    } else {
      const index = this.isCompleteList.indexOf(item);
      this.isCompleteList.splice(index, 1);
    }   

    }
  

  toggleTask(number: number): any {
    if (number === 0) {
      this.isComplete = false
      this.isNotCompleteList = this.isNotCompleteList.filter((x) => {
        return x.isCompleted === false;
      });

    }

    if (number === 1) {
      this.isComplete = true
      this.isDisable = 'white';
      this.isCompleteList = this.isCompleteList.filter((x) => {
        return x.isCompleted === true;
      });
    }
  }

  toggleCompletion(item: any): any {
    if (item.isCompleted) {
      this.isCompleteList = this.isCompleteList.filter(r => { return r.name != item.name });
      console.log(this.isCompleteList);
      item.isCompleted = false;
      this.isNotCompleteList.push(item);
    } else {
      this.isNotCompleteList = this.isNotCompleteList.filter(r => { return r.name != item.name });
      item.isCompleted = true;
      this.isCompleteList.push(item);
    }
  }

}