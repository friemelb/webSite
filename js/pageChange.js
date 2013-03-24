$(document).ready(function() {
	$('.cs3-no').cs3({
			pagination : {
				container : '.cs3-no .cs3-pagination'
			},
			navigation : {
				next : '.cs3-no .cs3-slide-next',
				prev : '.cs3-no .cs3-slide-prev',
			hideOnStart : true,
			showOnlyOnHover : true	
			},
			effects : 'bulb',
					autoplay : {
						enabled : true,
						delay : 5000,
						disableOnInteraction : true	
					},
		ambilight: {
			enabled : true,
			size : 50	
		}
		});
});


$('#menu ul li a').click(function (event) {
    var selected = $("#menu ul li").find('.selected').get(0);
    $(selected).removeClass('selected');
    $(this).addClass('selected');
    $('#page').addClass('bounceOutLeft');
});

var AnimationListener = function (e) {
    if (e.animationName == 'bounceOutLeft') {
        var selected = $("#menu ul li").find('.selected').get(0);
		var html = '<label>' + $(selected).context.innerHTML + '</label>';
		
		
		switch($(selected).context.accessKey){
			case '1':
			//home page
			html = '<div id="content">'+
		    '<div class="cs3-wrap cs3-skin-no">'+
		      '<div class="cs3 cs3-no">'+
		        '<div class="cs3-slide"><img src="css/images/forest1.png" width="750" height="500"></div>'+
		        '<div class="cs3-slide"><img src="css/images/forest2.png" width="750" height="500"></div>'+
		        '<div class="cs3-slide"><img src="css/images/forest3.png" width="750" height="500"></div>'+
		        '<div class="cs3-slide"><img src="css/images/forest4.png" width="750" height="500"></div>'+
		        '<div class="cs3-skin-border-1"></div>'+
		        '<div class="cs3-skin-border-2"></div>'+
		        '<div class="cs3-shadow"><div class="cs3-shadow-left"><div class="cs3-shadow-right"><div class="cs3-shadow-mid"></div></div></div></div>'+
		        '<div class="cs3-slide-prev"></div>'+
		        '<div class="cs3-slide-next"></div>'+
		        '<div class="cs3-pagination-wrap">'+
		        '<div class="cs3-pagination"></div>'+
		        '</div>'+
		      '</div>'+
		    '</div>'+
		'</div>'+	
		'</div>'+
		'<div id="sidebar">'+
			'<div id="tbox1">'+
				'<h2 class="homePageHeader">Mission</h2>'+
				'<ul class="style2">'+
					'<li class="first">'+
						'<h3><a href="#">Elegant Design</a></h3>'+
						'<p><a href="#">We create software that is easy to use and understand.</a></p>'+
					'</li>'+
					'<li>'+
						'<h3><a href="#">Reliablity</a></h3>'+
						'<p><a href="#">Our software will always be in a sound state and will not let the user down.</a></p>'+
					'</li>'+
					'<li>'+
						'<h3><a href="#">Accessibility</a></h3>'+
						'<p><a href="#">Our products will be cloud bassed and released on major mobil platforms.</a></p>'+
					'</li>'+
					'<li>'+
						'<h3><a href="#">Made in America</a></h3>'+
						'<p><a href="#">We pride ourselves on creating all our code in the US and will never out source support.</a></p>'+
					'</li>'+
				'</ul>'+
			'</div>'+
		'</div>';	
			break;
			case '2':
			//Projects
			html = '<div id="tbox1">'+
				'<ul class="style2">'+
				'<li class="first">'+
					'<h3><a href="#">Overview</a></h3>'+
					'<p><a href="#">We are working on creating a taxidermy management system for taxidermy shops. We are brainstorming some incredible ideas on how to help the owner manage their trade better and keep in better contact with their clients. We are not only working on the one project we still have a few different ideas still on the white board. For instance, we are toying with the idea of helping hunters and fishers manage their information. This would allow them to be more successful at their trade. In the future we will have mobile apps on the market place that integrate with our system. We will also be a mostly cloud based system where the user will never have to install software.</a></p>'+
				'</li>'+
					'<li class=>'+
						'<h3><a href="#">Cloud Application</a></h3>'+
						'<p><a href="#">Taxidermy management system</a></p>'+
						'<p><a href="#">Hunter management system</a></p>'+
					'</li>'+
					'<li>'+
						'<h3><a href="#">Mobile Application</a></h3>'+
						'<p><a href="#">Augmented reality locator</a></p>'+
					'</li>'+
				'</ul>'+
			'</div>';
			break;
			case '3':
			//About
			html='<div id="tbox1">'+
				'<ul class="style2">'+
				'<li class="first">'+
					'<h3><a href="#">Overview</a></h3>'+
					'<p><a href="#">Muddy Water Software is a software company that specializes in design and implementation of outdoors software.Any of the software we create is with the user in mind.We will never create a confusing software, it will always be very user friendly.The company has strong roots in the country and always has the outdoors in mind when designing any software.Currently we have professional software engineers on the team that are supported by industry experts to insure that whatever is created will be a accurate and useful product.</a></p>'+
				'</li>'+
					'<li class=>'+
						'<h3><a href="#">Company Information</a></h3>'+
						'<p><a href="#">We are are software company that is currently based in Austin, Texas. We have a firm belief in creating easy to understand and use software. </a></p>'+
					'</li>'+
					'<li>'+
						'<h3><a href="#">Staff Information</a></h3>'+
						'<p><a href="#">We have multiple software engineers who love the outdoors and are passionate about creating user friendly software. The industry experts have more than thiry years worth of experiance they bring to the table to help create usefull software.</a></p>'+
					'</li>'+
				'</ul>'+
			'</div>';
			break;
			case '4':
			//This is the blog page
			html = '<div id="tbox1">'+
				'<ul class="style2">'+
				'<li class="first">'+
					'<h3><a href="#">A Good Start</a></h3>'+
					'<h3 class="date"><a href="#">1/27/2013</a></h3>'+
					'<p><a href="#">Web site is built, but will always be improved. Time to start the flag ship product.</a></p>'+
				'</li>'+
					'<li>'+
						'<h3><a href="#">Getting up and running</a></h3>'+
						'<h3 class="date"><a href="#">1/19/2013</a></h3>'+
						'<p><a href="#">Building the website is comming along well and will be finalized soon.</a></p>'+
					'</li>'+
					'<li>'+
						'<h3><a href="#">Plan Plan Plan </a></h3>'+
						'<h3 class="date"><a href="#">12/20/2012</a></h3>'+
						'<p><a href="#">We have been in planning mode looking into technology, layouts, and ideas.</a></p>'+
					'</li>'+
					'<li>'+
						'<h3><a href="#">Pie in the sky</a></h3>'+
						'<h3 class="date"><a href="#">10/1/2012</a></h3>'+
						'<p><a href="#">A group of very talented software engineers have been getting together talking about outdoor software.</a></p>'+
					'</li>'+
				'</ul>'+
			'</div>';
			break;
			case '5':
			//Contact
			html = '<div id="tbox1">'+
				'<ul class="style2">'+
					'<li class="first">'+
						'<h3><a href="#">We would love to hear from you and will be more than happy to answer any of your questions.</a></h3>'+
						'<a>Name</a><br><input type="text" class="contactName"><br>'+
						'<a>Email</a><br><input type="text" class="contactEmail"><br>'+
						'<a>Subject</a><br><input type="text" class="contactSubject"><br>'+
						'<a>Note</a><br><textarea class="contactNote"></textarea><br>'+
						'<button onclick="sendMail(); return false">Send</button>'+
					'</li>'+
				'</ul>'+
			'</div>';
			break;
			
		}
		
        $('#page').html(html);

		if($(selected).context.accessKey == "1"){
			$('.cs3-no').cs3({
					pagination : {
						container : '.cs3-no .cs3-pagination'
					},
					navigation : {
						next : '.cs3-no .cs3-slide-next',
						prev : '.cs3-no .cs3-slide-prev',
					hideOnStart : true,
					showOnlyOnHover : true	
					},
					effects : 'bulb',
							autoplay : {
								enabled : true,
								delay : 5000,
								disableOnInteraction : true	
							},
				ambilight: {
					enabled : true,
					size : 50	
				}
				});
			
			
		}

		
        $('#page').removeClass('bounceOutLeft');
        $('#page').addClass('bounceInRight');
    }
}

var body = document.getElementById("page");
var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
	for (var p = 0; p < pfx.length; p++) {
		if (!pfx[p]) type = type.toLowerCase();
		element.addEventListener(pfx[p]+type, callback, false);
	}
}
PrefixedEvent(body, "AnimationEnd", AnimationListener);

function sendMail() {
	var msg = 'Name: ' +$('.contactName').val();
	msg += ';Email: ' +$('.contactEmail').val();
	msg += ';Note: ' +$('.contactNote').val();
	
    var link = "mailto:info@muddywatersoftware.com"
			+ "?cc="
             + "&subject=" + escape($('.contactSubject').val())
             + "&body=" + escape(msg);
    window.location.href = link;
}
