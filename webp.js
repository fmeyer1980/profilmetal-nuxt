const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
 
imagemin(['assets/images/*.{jpg,png}'], 'assets/images', {
    use: [
        imageminWebp({quality: 80})
    ]
}).then(() => {
    console.log('Images optimized');
});