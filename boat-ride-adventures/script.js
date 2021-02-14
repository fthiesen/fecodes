document.onreadystatechange = function () {

    if (document.readyState == "interactive") {

        // mobile menu

        const menuToggle = document.querySelector('#menu-toggle');
        const mobileMenu = document.querySelector('#mobile-menu');

        const handleMobileMenuOpenClose = () => {

            mobileMenu.classList.toggle('is-active');
            menuToggle.classList.toggle('is-active');
            
            if ( mobileMenu.classList.contains('is-active')) {
                menuToggle.setAttribute('aria-expanded','true');
                menuToggle.setAttribute('aria-label','Close the menu');
                menuToggle.setAttribute('title','Close the menu');
                document.body.classList.toggle('lock-scrollbar');
            } else {
                menuToggle.setAttribute('aria-expanded','false');
                menuToggle.setAttribute('aria-label','Open the menu');
                menuToggle.setAttribute('title','Open the menu');
                setTimeout(function(){
                    document.body.classList.toggle('lock-scrollbar');
                },300);
            }

        };

        menuToggle.addEventListener('click', function() {
            handleMobileMenuOpenClose();
        });

        mobileMenu.addEventListener('click', function(){
            handleMobileMenuOpenClose();
        });

        // add a different animation delay to each mobile menu list item

        const lis = document.querySelectorAll('#mobile-menu li');

        let i = 1;
        for ( li of lis ) {
            li.style.animationDelay = (i * 0.1) + 's';
            i++;
        }

    }
}