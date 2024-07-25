// check if the image url has a image 

export const checkImageURL = (url) => {
    if(!url) return false
    else{
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp$)', 'i');
        return pattern.test(url);
    }
}; 