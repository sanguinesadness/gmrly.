// Add smooth scrolling to all links
$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        let hash = this.hash;
        $('.content').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){

        window.location.hash = hash;
        });
    }
});