(function( $ ) {
    $.fn.fix = function(options) {

        var settings = $.extend({
            'bottomLimit' : this.parent(),
            'bottomMargin' : 0
        }, options);
        
        $this = this;
        
        this.parent().css('min-height' , this.height());
        //save data
        var position = this.css("position");
        var cssTop = this.css("top");
        var cssLeft = this.css("left");
        
        //save real position
        var realTop = this.offset().top;
        var realLeft = this.offset().left;
        var height = this.height();
        var width = this.width();
        
        $(window).scroll(function(){
            bottomOffset = settings.bottomLimit.offset().top - settings.bottomMargin;
            if(realTop < $(window).scrollTop()){
                if(bottomOffset != null && $(window).scrollTop()+height > bottomOffset ){
                    $this.css({
                        'position' : 'relative',
                        'top' : bottomOffset - height - realTop,
                        'left' : 0
                    });
                }else{
                    $this.css({
                        'position' : 'fixed',
                        'top' : '0',
                        'left' : realLeft,
                        'width' : width
                    });
                }
            }else{
                $this.css({
                    'position' : position,
                    'top' : cssTop,
                    'left' : cssLeft
                });
            }
        });
        $(window).resize(function(){
            
            if($this.css('position') == 'fixed'){
            $this.css({
                'position' : position,
                'top' : cssTop,
                'left' : cssLeft
            });
            realLeft = $this.offset().left;
            $this.css({
                        'position' : 'fixed',
                        'top' : '0',
                        'left' : realLeft,
                        'width' : width
                    });
            }else{
                realLeft = $this.offset().left;
            }
        });
        
    };
})( jQuery );