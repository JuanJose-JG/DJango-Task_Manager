const gallery = document.querySelectorAll('#gallery img'),
    previewBox = document.getElementById('preview-box'),
    imageBox = document.getElementById('image-box'),
    selectedImg = document.getElementById('selected-img'),
    currentImg = document.getElementById('current-img'),
    totalImg = document.getElementById('total-img'),
    closeIcon = document.getElementById('close');

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++){
        totalImg.textContent = gallery.length;

        let newIndex = i,
            clickImgIndex;

        gallery[i].onclick = ()=>{
            clickImgIndex = newIndex;
            console.log(i);
            
            function preview(){
                currentImg.textContent = newIndex+1;
                let selectedImgUrl = gallery[newIndex].src;
                selectedImg.src = selectedImgUrl;
            }

            const prevBtn = document.getElementById('prev-btn'),
                nextBtn = document.getElementById('next-btn');

            if(newIndex == 0){
                prevBtn.classList.add("hidden");
            } else {
                prevBtn.classList.remove("hidden");
            }

            if(newIndex >= gallery.length-1){
                nextBtn.classList.add("hidden");
            } else {
                nextBtn.classList.remove("hidden");
            }
            if(i == 0){
            prevBtn.classList.add("hidden");
            } else {
                prevBtn.classList.remove("hidden");
            }

            prevBtn.onclick = ()=>{
                newIndex--;
                
                if(newIndex == 0){
                    prevBtn.classList.add("hidden");
                    preview();
                } else{
                    nextBtn.classList.remove("hidden");
                    preview();
                }
            }
            
            nextBtn.onclick = ()=>{
                newIndex++;
                
                if(newIndex >= gallery.length-1){
                    nextBtn.classList.add("hidden");
                    preview();
                } else{
                    prevBtn.classList.remove("hidden");
                    preview();
                }
            }

            preview();

            previewBox.classList.remove("invisible");
            imageBox.classList.remove("scale-50");

            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex;
                previewBox.classList.add("invisible");
                imageBox.classList.add("scale-50");
            }
        }
    }
}