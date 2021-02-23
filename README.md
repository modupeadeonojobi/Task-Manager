## Task Manager
>A simple task app built with Angular.

## Table of contents
* [General info](#general-info)
<!--* [Screenshots](#screenshots) -->
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)



## General info
This app manages users task. A user can add new task, mark as completed and delete tasks.
At a glance, a user can see his active task.

<!--## Screenshots
![Example screenshot](stil in progress) -->

## Technologies
* Angular  - version 11.0.6.
* Bootstrap - version 4.6.0


## Setup
* Download the source code using git or else download and unzip the zip file.
* Open a terminal window and go to the project root folder.
* You need to have npm installed globally.
* Run npm i to install the required libraries.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples


    `addTask(): any {
    if (this.searchForm.valid) {
      const searchItem = this.searchForm.controls.searchItem.value;
      let value = {
        name: searchItem, id: this.isNotCompleteList.length + 1, isCompleted: false
      };
      this.isNotCompleteList.unshift(value);
      this.searchForm.reset();
    }
  }`
  

## Status
Project is: _completed_.


