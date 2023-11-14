// Home Carousel
$('.home-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// Navbar
window.addEventListener('scroll', function () {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})



$(document).ready(function () {
    // Existing code...

    // Clone the images and append them to create a continuous scrolling effect
    var originalImages = $('.image-container');
    var clonedImages = originalImages.clone();
    $('#horizontal-scroll-container').append(clonedImages);

    // Adjust the scroll speed by changing the value inside animate
    function scrollImages() {
        $('#horizontal-scroll-container').animate({
            marginLeft: '-=1' // Adjust the value to control the scrolling speed
        }, 2000, 'linear', function () {
            // Move the first image to the end to create a continuous effect
            $('#horizontal-scroll-container .image-container:first').appendTo('#horizontal-scroll-container');
            $(this).css('marginLeft', '0');
            scrollImages(); // Call the function recursively for continuous scrolling
        });
    }

    // Start the continuous scrolling
    scrollImages();

});

$(document).ready(function () {
    function showItemList(title, items) {
        // Display the modal

        const modal = document.getElementById('itemModal');
        modal.style.display = 'block';

        // Set the modal title
        document.getElementById('modalTitle').textContent = title;

        // Populate the item list
        const itemList = document.getElementById('itemList');
        itemList.innerHTML = '';
        items.forEach(item => {
            const node = document.createElement("li");
            const textnode = document.createTextNode(item);
            node.appendChild(textnode);
            itemList.appendChild(node);
        });
    }

    function hideModal() {
        // Hide the modal
        const modal = document.getElementById('itemModal');
        modal.style.display = 'none';
    }
});


// // Open modal
// $('body').addClass('modal-opened');

// // Close modal
// $('body').removeClass('modal-opened');

// Function to open the modal







