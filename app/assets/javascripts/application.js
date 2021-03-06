// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.datepicker
//= require bootstrap-sprockets
//= require best_in_place
//= require best_in_place.jquery-ui
//= require jquery.purr
//= require best_in_place.purr
//= require highcharts
//= require highcharts/highcharts-more
//= require highcharts/modules/exporting
//= require jquery-tablesorter
//= require_tree .

$(document).ready(function() {

  /* Activating Best In Place */
  $(".best_in_place").best_in_place();
  /* Active date pickers */
  $("input.date_picker").datepicker();

  $.datepicker.setDefaults({ dateFormat: "yy-mm-dd" })

  $(".tablesorter").tablesorter();

});