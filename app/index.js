import One from './demo-1'
const images = document.querySelectorAll('img.demo-1__gallery__image')
let imagesIndex = 0

Array.from(images).forEach(element => {
  const image = new Image()

  image.src = element.src
  image.onload = _ => {
    imagesIndex += 1

    if (imagesIndex === images.length) {
      new One()
      console.log("Init gallery!")
    }
  }
})
