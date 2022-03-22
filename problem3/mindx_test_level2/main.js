const myApi = 'http://localhost:3000/pictures';

const start = function() {
    getPic(function(pictures) {
        renderPic(pictures)
    })
}
    
const getPic = function(callback) {
    fetch(myApi)
        .then(function(res) {
            return res.json();
        })
        .then(callback)
}




const handleClick = function(id, state){
    console.log(state)
    visualState = document.querySelector(`.des${id}`).style.visibility
    console.log(visualState)
    if (visualState == 'hidden') {
            state = 'visible';
            document.querySelector(`.des${id}`).style.visibility = state;
        }
    if (visualState == 'visible') {
            state = 'hidden';
            document.querySelector(`.des${id}`).style.visibility = state;
        }
};




const renderPic = function(pictures) {
    pictures.map(function(picture) {
        var state = 'hidden';
        const containerPictures = document.querySelector('.pictures');
        const imgBox = document.createElement('div');
        imgBox.setAttribute('class',`picBox`);
        imgBox.setAttribute('onclick', `handleClick('${picture.id}', '${state}')`);
        //des
        const imgDes = document.createElement('h5');
        imgDes.innerText = `${picture.description}`;
        imgDes.setAttribute('class', `des des${picture.id}`)
        imgDes.setAttribute('style', `visibility: ${state}`)
        imgBox.appendChild(imgDes)
        //img
        const imgPic = document.createElement('img');
        imgPic.setAttribute('src', `${picture.imgUrl}`)
        imgPic.setAttribute('class', 'image')
        //
        imgPic.setAttribute('id', `${picture.id}`)
        imgBox.appendChild(imgPic)
        containerPictures.appendChild(imgBox);
    })
};

start();

