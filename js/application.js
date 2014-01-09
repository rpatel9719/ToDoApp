$(document).ready(function(){
$('#txt').keypress(function(e) {
		var value1 = '<div>&nbsp&nbsp&nbsp<input type="checkbox"> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
		var value2 =$('#txt').val();
		var value3 = '</div>';
		var value4 = '<hr style="height:2px;color:#333;background-color:#333;"/>';
		if ( e.which == 13 ) {
			$('.data').append(value1+value2+value3+value4);
			$(this).val("");
		}
});
});



