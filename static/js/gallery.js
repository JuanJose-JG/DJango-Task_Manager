const gallery = document.querySelectorAll('#gallery img'),
    previewBox = document.getElementById('preview-box'),
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
            
            function preview(){
                currentImg.textContent = newIndex+1;
                let selectedImgUrl = gallery[newIndex].src;
                selectedImg.src = selectedImgUrl;
            }

            const prevBtn = document.getElementById('prev-btn'),
                nextBtn = document.getElementById('next-btn');

            if(newIndex == 0){
                prevBtn.classList.add("invisible");
            } else {
                prevBtn.classList.remove("invisible");
            }

            if(newIndex >= gallery.length-1){
                nextBtn.classList.add("invisible");
            } else {
                nextBtn.classList.remove("invisible");
            }
            if(i == 0){
                prevBtn.classList.add("invisible");
            } else {
                prevBtn.classList.remove("invisible");
            }

            prevBtn.onclick = ()=>{
                newIndex--;
                
                if(newIndex == 0){
                    prevBtn.classList.add("invisible");
                    preview();
                } else{
                    nextBtn.classList.remove("invisible");
                    preview();
                }
            }
            
            nextBtn.onclick = ()=>{
                newIndex++;
                
                if(newIndex >= gallery.length-1){
                    nextBtn.classList.add("invisible");
                    preview();
                } else{
                    prevBtn.classList.remove("invisible");
                    preview();
                }
            }

            preview();

            previewBox.classList.remove("invisible");

            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex;
                previewBox.classList.add("invisible");
            }
        }
    }
}