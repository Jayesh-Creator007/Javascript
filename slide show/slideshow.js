let arr = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjmE0dJtJpb7AzSo1K-N5iwn5JJyDzEqe15EspNd_2gGqIPYhbNYSKh3po_quNY9U5p8&usqp=CAU", "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1", "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg", "https://tinypng.com/images/social/website.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s", "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg", "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"]
var sum = 2;
function cala() {
    sum += 1
    // console.log(sum);
    // console.log(arr[sum]);
    document.getElementById("img").innerHTML = `<img src=${arr[sum]} art="image" width="200" height="200"/>`
}
function cal() {
    sum -= 1
    // console.log(arr[sum]);
    // console.log(sum);
    document.getElementById("img").innerHTML = `<img src=${arr[sum]} art="image" width="200" height="200"/>`


}

