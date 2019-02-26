/*var yourNavigation = $(".site-header");
    stickyDiv = "sticky";
    yourHeader = $(".site-header").height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});*/

/* Sticky Menu */
var $header = $(".site-header"),
	$clone = $header.before($header.clone().addClass("clone"));

$(window).on("scroll", function() {
	var fromTop = $(window).scrollTop();
	$("body").toggleClass("down", (fromTop > 400));
});

/* Search */
$(document).ready(function(){
  	$(".search-button").click(function(){
	  $(".search-box").toggle();
	});
	
	$(".login-button").click(function(){
	  $("#login_wrapper").toggle();
	});
	
	$("#login_exit").click(function(){
	  $("#login_wrapper").toggle();
	});
});

/* Mobile Menu */
(function(){
  'use strict';

  class Component {
        
    printError(error) {
 
      if (typeof error !== 'string' || error.length === 0) {
        return console.log('you did not give arguments');
      }
      
      return console.log(error);
    }    
    
    toggleСlass(node, className) {
      return  node.classList.toggle(className);
    }    
  }
  
  class Menu extends Component {
    
    constructor(settings) {
      super();
      this.menuNode = settings.menuNode;
    }
    
    toggleMenuState(className) {      
      
      if (typeof className !== 'string' || className.length === 0){
        return super.printError('you did not give the class name for the toggleState function');
      } 
      
      return super.toggleСlass(this.menuNode, className);
    }
  }

  let jsMenuNode = document.querySelector('body');
  
  let demoMenu = new Menu ({
    menuNode: jsMenuNode
  });
  
  function callMenuToggle() {
    demoMenu.toggleMenuState('js-menu_activated');
  }
  
  jsMenuNode.querySelector('.js-menu__toggle').addEventListener('click', callMenuToggle);
})();
