import { engine, AvatarAttach, AvatarAnchorPointType, TextShape, Transform, GltfContainer } from "@dcl/sdk/ecs"
import { Color4, Vector3 } from "@dcl/sdk/math"

const parentEntity = engine.addEntity()


AvatarAttach.create(parentEntity, {
  anchorPointId: AvatarAnchorPointType.AAPT_NAME_TAG,
})
const SIText = engine.addEntity()
TextShape.create(SIText, { text: "", fontSize: 2, textColor: Color4.Green(), outlineColor: Color4.Black(), outlineWidth: .1 })
const weatherEn = engine.addEntity()

Transform.create(weatherEn, { position: Vector3.create(-2, -4.6, -5),scale: Vector3.create(.75,.75,.75), parent: parentEntity })
GltfContainer.create(weatherEn, {
  src: ''
})


Transform.create(SIText, { position: Vector3.create(0, .2, 0), parent: parentEntity })

export function createSnow() {

  const BAMutableText = TextShape.getMutable(SIText);
  BAMutableText.text = `It's Snowing`;
  const sunShape = GltfContainer.getMutable(weatherEn)
  sunShape.src = "models/snow.glb"

  console.log('snow')
}

export function createRain() {
  const sunShape = GltfContainer.getMutable(weatherEn)
  sunShape.src = "models/rain.glb"

  
  const BAMutableText = TextShape.getMutable(SIText);
  BAMutableText.text = `It's Raining`;

  console.log('Rain')
}


export function createSun() {
  const sunShape = GltfContainer.getMutable(weatherEn)
  sunShape.src = "models/SUN.glb"
  const BAMutableText = TextShape.getMutable(SIText);
  BAMutableText.text = `It's Sunny`;

  console.log('Sun')
}


export function createClouds() {
  // let cloud = engine.addEntity()
  // GltfContainer.create(cloud, {
  //   src: 'models/CLOUDS.glb'
  // })
  // Transform.create(cloud, { position: Vector3.create(0, 2, 0), parent: parentEntity })
  const sunShape = GltfContainer.getMutable(weatherEn)
  sunShape.src = "models/CLOUDS.glb"
  const BAMutableText = TextShape.getMutable(SIText);
  BAMutableText.text = `It's Cloudy`;

  console.log('Clouds')
}

export function createdrkClouds() {
  // let cloud = engine.addEntity()
  // GltfContainer.create(cloud, {
  //   src: 'models/DARK_CLOUDS.glb'
  // })
  // Transform.create(cloud, { position: Vector3.create(0, 2, 0), parent: parentEntity })
  const BAMutableText = TextShape.getMutable(SIText);
  BAMutableText.text = `It's Gloomy`;
  const sunShape = GltfContainer.getMutable(weatherEn)
  sunShape.src = "models/DARK_CLOUDS.glb"

  console.log('drkClouds')
}

export function createDust() {
  const BAMutableText = TextShape.getMutable(SIText);
  BAMutableText.text = `It's Dusty`;


}




export function checkWeather(weathercode: any) {
    switch (weathercode) {
      case 0:
        createSun()
        break;
      case 1:
        createClouds()
        break;
      case 2:
        createdrkClouds()
        break;
      case 3:
        createClouds()
        break;
      case 4:
        createDust()
        break;
      case 5:
        createRain()
        break;
      case 6:
        createRain()
        break;
      case 7:
        createSnow()
        break;
      case 8:
        createRain()
        break;
      case 9:
        createRain()
        break;
  
    }
  
  }