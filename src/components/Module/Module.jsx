import React, { Component } from 'react';
import './Module.scss';

class Module extends Component {
    render() {
        return (
            <div class="main">
        <div class="container">
        <div class="intro" id="head">
            <h2>
                <label for="">
                <span class="fas fa-bars"></span>
            </label>
            Viewing All exams<label class="label2"><i class="fa fa-plus-square" aria-hidden="true"></i></label>
        </h2>
          
            
        </div>
       
        <div class="footer">
            <select name="pets" class="pet-select1">
                <option value="">--Select Course--</option>
                <option value=""></option>
                <option value=""></option>
                
            </select>

            <select name="pets" class="pet-select2">
                <option value="">--Items Per Page--</option>
                <option value=""></option>
                <option value=""></option>
                
            </select>

            <select name="pets" class="pet-select3">
                <option value="">--Go To--</option>
                <option value=""></option>
                <option value=""></option>
                
            </select>
                 
        </div>
       
        <div class="middle">
            <table id="Insitute">
                <tr>
                  <th>Exam Title</th>
                  <th>Course Title</th>
                  <th>Duration</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>About Data - Weekly Assessment</td>
                  <td>SnowFlake</td>
                  <td>30(minutes)</td>
                  <td id="icons" ><i class="fas fa-medkit"></i>
                    <i class="fa fa-plus-square"></i>
                    <i class="fas fa-pen-square"></i>
                    <i class="far fa-trash-alt"></i></td>
                </tr>
                <tr id="users">
                  <td>Week - 2 Assessment SnowFlake</td>
                  <td>SnowFlake</td>
                  <td>25(minutes)</td>
                  <td id="icons" ><i class="fas fa-medkit"></i>
                    <i class="fa fa-plus-square"></i>
                    <i class="fas fa-pen-square"></i>
                    <i class="far fa-trash-alt"></i></td>
                </tr>
                <tr id="users">
                  <td >Week - 3 SF Assessment </td>
                  <td>SnowFlake</td>
                  <td>25(minutes)</td>
                  <td id="icons" ><i class="fas fa-medkit"></i>
                    <i class="fa fa-plus-square"></i>
                    <i class="fas fa-pen-square"></i>
                    <i class="far fa-trash-alt"></i></td>
                </tr>
                <tr id="users">
                  <td>Week - 4 SF Assessment </td>
                  <td>SnowFlake</td>
                  <td>50(minutes)</td>
                  <td id="icons" ><i class="fas fa-medkit"></i>
                    <i class="fa fa-plus-square"></i>
                    <i class="fas fa-pen-square"></i>
                    <i class="far fa-trash-alt"></i></td>
                </tr>
                <tr id="users">
                  <td>AWS Assessment</td>
                  <td>Aws Cloud</td>
                  <td>30(minutes)</td>
                  <td id="icons" ><i class="fas fa-medkit"></i>
                    <i class="fa fa-plus-square"></i>
                    <i class="fas fa-pen-square"></i>
                    <i class="far fa-trash-alt"></i></td>
                </tr>
                <tr id="users">
                  <td>Week - 5 SF Assessment </td>
                  <td>SnowFlake</td>
                  <td>60(minutes)</td>
                  <td id="icons" ><i class="fas fa-medkit"></i>
                    <i class="fa fa-plus-square"></i>
                    <i class="fas fa-pen-square"></i>
                    <i class="far fa-trash-alt"></i></td>
                </tr>
                <tr id="users">
                  <td>SnowFlake pro Care</td>
                  <td>SnowFlake</td>
                  <td>20(minutes)</td>
                  <td id="icons" ><i class="fas fa-medkit"></i>
                    <i class="fa fa-plus-square"></i>
                    <i class="fas fa-pen-square"></i>
                    <i class="far fa-trash-alt"></i></td>
                </tr>
                <tr id="users">
                  <td>AWS Assessment</td>
                  <td>AWS Cloud</td>
                  <td>25(minutes)</td>
                  <td id="icons" ><i class="fas fa-medkit"></i>
                    <i class="fa fa-plus-square"></i>
                    <i class="fas fa-pen-square"></i>
                    <i class="far fa-trash-alt"></i></td>
                </tr>
                
              </table>
        </div>
        
       
    </div>
    </div>
        );
    }
}

export default Module;
