
// $(document).ready(function(){
//	$('#add-itme').submit(function(){
// 	var todoText = $('#new-item').val();
// 	var listItem;
// 	if(todoText){
// 		listItem = '<li><label><input class="todoListTime" type="checkbox">' + todoText + '<label></label>';
// 		$(this).append(listItem);
// 		$(this).trigger('reset');
// 	 }
//   return false;
//  });
	// $('things-to-do').on('click', '.todoListItem', function(e){
	// 	console.log(this); or
	//  console.log(e); or
	//  console.log(e.target);
	// $('#clear-list').on('click', function(){
	// 	$('things-to-do').on('click', '.todoListItem .edit', function(e){
	// });
	// $('#clear-complet').on('click', function(){
	// 	$('things-to-do' .done-zo).remove(){
	// });

	// });
// });


$(document).ready(function(){
	$('#item-adder').submit(function(e){
		e.stopPropagation();
	var todoList = $('#yourItems').val();
	var yourItems;

	if(todoList){
		yourItems = '<li><label><input type="checkbox">' + todoList + '</label>';

		$(this).append(yourItems);
		$(this).trigger('reset');
	 }

  return false;


	});

});