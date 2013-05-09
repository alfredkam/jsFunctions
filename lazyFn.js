/* some lazy functions */
/* these functions works with jQuery */


/* toggle between 2 values */
$.fn.toggleVal = function (str1, str2) {
     return this.html(this.html() == str1 && str2 || str1);
};

/* Mimic form event on hitting "enter key" */

$(element).keyup(function(event){
    if(event.keyCode == 13){
        //function();
    }
});


