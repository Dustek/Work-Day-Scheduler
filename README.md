# Work Day Scheduler

## Overview

The purpose of this project is to create Javascript, HTML and CSS code that forms a day task scheduler, which dynamically changes based on the current date/hour as well as allows the user to save text

## Background

The project uses CSS, HTML and Javascript. It also uses Javascript plugins such as Jquerry to make coding easier and Dayjs to give time/date functionality.

## Usage

To use the project, simply open the main page (index.html). You will see the current date, as well as time slots for the working day hours, which dynamically change colour based on the current time. You can also save text in the time slots by pressing the "save" button(s).

## Creation Process

I started this project by creating the HTML time-block divisions within the container class. I used Bootstrap to make the container a row grid, and I divided the 3 divs within it using Bootstrap column functionality - a small div for displaying the hour, a large div for the input text area, and another small div for the save button. I then styled the divs using the classes in the provided CSS file then created 9 copies, each representing an hour of a work day 9-5. I gave each time block a data-hour to be used in Javascript logic

I began the Javascript logic by displaying the current date in the #currentDay element by getting the date from Jays and formatting it. I also had to incoporate advanced Dayjs plugin to properly display the date.

I then implemented the code to dynamically update the class - past, present and future, of each time block based on the current time from Dayjs. This changes the colour of each block based on current user time.

I then created the code for each save button to save the text input and associated hour as an object into an array of objects called "inputs". At this point, I had to implement logic that checks if there already exists an object for a given hour, in which case it will overwrite the input text. Finally each click of the button saves the updated array of objects "events" into local storage, by converting it into a string.

Lastly, I tackled the issue of filling out each hour block with information from local storage if it exists. For this I created logic that either fills out the "events" variable from local storage or creates an empty array at the start of the code. Then, each time block's hour gets checked against the "hour" keys of the objects in the array, to see if there is a match. If there is, the code sets the textarea to the data from the key.

## Acknowledgements

I would like to give credit to my instructor, Abdul, as well as all the TA's and fellow students who have helped me learn how to complete this project.

## Link to website:

https://dustek.github.io/Coding-Quiz/