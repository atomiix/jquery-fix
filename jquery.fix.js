(function( $ ) {
    $.fn.fix = function() {

        $this = this;
        var position = this.css("position");
        var top = this.css("top");
        var top = this.position().top;
        var bottom = this.parent().height() + top - this.height();

        $(window).scroll(function(){
            console.log(bottom);
            if($(window).scrollTop() >= top){
                $this.css({
                    "position": "fixed", 
                    'top' : '0'
                });
                if($(window).scrollTop() > bottom){
                    $this.css({
                        'position' : 'absolute', 
                        'top' : bottom+"px"
                        });
                }
            }else{
                $this.css({
                    "position": position, 
                    'top' : top
                });
            }
        });
    };
})( jQuery );