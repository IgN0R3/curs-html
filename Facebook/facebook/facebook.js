const numberOfLikesElement = document.getElementById("numberOfLikes");
let numberOfLikes = 10;
let isLiked = false;
const likeButton = document.getElementById("likeButton");
numberOfLikesElement.innerHTML = numberOfLikes;

likeButton.addEventListener("click",function() {
    isLiked = !isLiked
    if(isLiked){
        numberOfLikes++;
        numberOfLikesElement.innerHTML = numberOfLikes;
        likeButton.style.color = '#4287f5';        
    }else{
        numberOfLikes--;
        numberOfLikesElement.innerHTML = numberOfLikes;
        likeButton.style.color = 'gray';  
    }
});