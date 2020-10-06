/*JavaScript Document*/
<!-- smooth scrolling-->
$('#navbar a, .btn').on('click', function(event) { //this line selects every navbar on my html and my btn class
	if(this.hash !== '') {
		event.preventDefault();
		
		const hash = this.hash;
		
		$('html, body').animate(
		{
			scrollTop: $(hash).offset().top -80
		},
		800
		);
	}
}); 