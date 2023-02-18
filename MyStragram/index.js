//ประกาศฟังก์ชัน
function appendImageElement(keydown, index){
    const imgElement = document.createElement("img");
    imgElement.className = "img" +index;
    imgElement.src = `https://source.unsplash.com/225x225/?${keydown}&sig=${index}`;
    const galleryElement = document.querySelector(".gallery");
    galleryElement.appendChild(imgElement);
}

/* Remove */
function removeAllimage() {
    const galleryElement = document.querySelector(".gallery");
    galleryElement.innerHTML = "";
}


function searchPhoto(event){
    const keyword = event.target.value;
    if(event.key === "Enter" && keyword){
        removeAllimage();
        for(let i = 1; i<=20; i++) {
            appendImageElement(keyword, i);
        }
    }
}

function main(){
    const inputElement = document.getElementsByClassName("search")
    inputElement[0].addEventListener("keydown", searchPhoto);
}

//----------------------------------------//
//เรียกใช้ฟังก์ชััน
    main();