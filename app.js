'use strict';
//use strict restricts global variables//
var form = document.getElementById('sample_form');
var table = document.getElementById('student_table');
var data = [];
function Student(first, last, status, plans) {
  this.first = first;
  this.last = last;
  this.enrolled = status;
  this.future_classes = plans;
}

function formData(event) {
  event.preventDefault();

  var first = event.target.first.value;
  var last = event.target.last.value;
  var enrolled = event.target.enrolled.checked;
  var futureClasses = event.target.future_classes.value;

  data.push(new Student(first, last, enrolled, futureClasses));
  creatTable();
  form.reset();
  //removes last input from mem?//
}

function creatTable() {
  var row;
  for (var i = 0; i < data.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + data[i].first + '</td>' +
            '<td>' + data[i].last + '</td>' +
            '<td>' + data[i].enrolled + '</td>' +
            '<td>' + data[i].future_Classes + '</td>';
  }
  table.appendChild(row);
}

form.addEventListener('submit', formData);
