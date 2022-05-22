import { Component, OnInit } from '@angular/core';
import tinymce from 'tinymce';

@Component({
  selector: 'app-noteeditor',
  templateUrl: './noteeditor.component.html',
  styleUrls: ['./noteeditor.component.scss'],
})
export class NoteeditorComponent implements OnInit {

  title:any;
  tag:any;
  content:any;
  notetype:any;

  constructor() { }

  ngOnInit() {}

  
  ngAfterViewInit() {
    tinymce.init({
      selector: '#notecontent',
      height: 300,
      plugins : [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen",
        "insertdatetime media nonbreaking save table contextmenu directionality",
        "emoticons template paste textcolor colorpicker textpattern"
      ],
      toolbar : 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
      image_advtab : true,
      //images_upload_url: 'https://mystudyappapi.profeworld.com/mainapi/adminlogic/picuploadpostinline.ashx', //images_upload_url: 'https://mystudyappapi.profeworld.com/mainapi/adminlogic/picuploadpostinline.ashx',
      images_upload_handler: function (blobInfo, success, failure) {
        var reader = new FileReader();
        reader.readAsDataURL(blobInfo.blob());
        reader.onload = function () {
            success(<string>this.result);
        }}
    });
  }


}
