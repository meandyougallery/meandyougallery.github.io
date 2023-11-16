const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg", "image17.jpg", "image18.jpg", "image19.jpg", "image20.jpg", "image21.jpg", "image22.jpg", "image23.jpg", "image24.jpg", "image25.jpg", "image26.jpg", "image27.jpg", "image28.jpg", "image29.jpg", "image30.jpg", "image31.jpg", "image32.jpg", "image33.jpg"]; // Add your image file names here
let currentImageIndex = 0;

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("gallery-image").src = images[currentImageIndex];
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("gallery-image").src = images[currentImageIndex];
}
