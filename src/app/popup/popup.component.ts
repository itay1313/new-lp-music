import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {}

  labelTop() {
  $(document).ready(function(){
    $('.input-group input').focus(function(){
      var me = $(this) ;
      $("label[for='"+me.attr('id')+"']").addClass("animate-label");
    }) ;
    $('.input-group input').blur(function(){
      var me = $(this) ;
      if ( me.val() == ""){
        $("label[for='"+me.attr('id')+"']").removeClass("animate-label");
      }
    }) ;
  })
  }

  closeDialog() {
    const newLocal = this.dialog.closeAll();
  }

  onSubmissionForm(itayForm:NgForm) {
      console.log(itayForm.value);
  }
}
