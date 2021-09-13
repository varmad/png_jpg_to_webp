
import imagemin from 'imagemin';
import webp from 'imagemin-webp';

const outputFolder = './images/webp'
const produceWebP = async () => {
  await imagemin(['images/*.png'], {
    destination: outputFolder,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  console.log('PNGs processed')
  await imagemin(['images/*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 65
      })
    ]
  })
  console.log('JPGs and JPEGs processed')
}
produceWebP()
console.log(`The WEBP images are stored in ${outputFolder}`)