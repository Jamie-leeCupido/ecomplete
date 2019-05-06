// This is my simple Smooth scroller, this takes to you to the top of the page when clicked
$("#back_to_top").click(function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})