
/* Function ดึงข้อมูลจากการ Search */
function appendImageElement(keydown, index){
    const imgElement = document.createElement("img");
    imgElement.className = "img" +index;
    imgElement.src = `https://source.unsplash.com/225x225/?${keydown}&sig=${index}`;
    const galleryElement = document.querySelector(".gallery");
    galleryElement.appendChild(imgElement);
}


/* Function Remove ข้อมูลเดิม เมื่อมีการ Search ใหม่ */
function removeAllimage() {
    const galleryElement = document.querySelector(".gallery");
    galleryElement.innerHTML = "";
}

/* Function สำหรับเงื่อนไข */
function searchPhoto(event){
    const keyword = event.target.value;
    if(event.key === "Enter" && keyword){
        removeAllimage();
        for(let i = 1; i<=20; i++) {
            appendImageElement(keyword, i);
        }
    }
}


/* function main() */
function main(){
    const inputElement = document.getElementsByClassName("search")
    inputElement[0].addEventListener("keydown", searchP
}
main();
