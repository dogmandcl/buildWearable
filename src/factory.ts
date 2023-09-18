import { AvatarAnchorPointType, AvatarAttach, Billboard, Entity, GltfContainer, TextShape, Transform, engine } from "@dcl/sdk/ecs";
import { Color4, Vector3 } from "@dcl/sdk/math";
import { createSun, createClouds, createdrkClouds, createDust, createRain, createSnow, checkWeather } from "./weather";
import { Fselect } from "./ui";


export function createPText(text: Entity) {
  async function updatePTemperature() {
    try {
      const parisResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=48.8567&longitude=2.3510&current_weather=true");
      const parisData = await parisResponse.json();



      console.log(parisData);

      const parisMutableText = TextShape.getMutable(text);


      if (parisData && parisData.current_weather && parisData.current_weather.temperature) {
        const parisTemperature = parisData.current_weather.temperature;
        let parisTempF = ((parisTemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
        parisMutableText.text = `Current Paris Temperature: ${parisTemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          parisMutableText.text = `Current Paris Temperature: ${parisTempF}°F`;}
        
        const weather = parisData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        parisMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
    
  }
  updatePTemperature()


}


export function createLtext(text: Entity) {

  async function updateLTemperatures() {
    try {

      const londonResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.509865&longitude=-0.118092&current_weather=true");
      const londonData = await londonResponse.json();



      console.log(londonData);

      const londonMutableText = TextShape.getMutable(text);




      if (londonData && londonData.current_weather && londonData.current_weather.temperature) {
        const londonTemperature = londonData.current_weather.temperature;
        let TempF = ((londonTemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
        londonMutableText.text = `Current London Temperature: ${londonTemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          londonMutableText.text = `Current London Temperature: ${TempF}°F`;}
        const weather = londonData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        londonMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }

  updateLTemperatures()

}

export function createNtext(text: Entity) {

  async function updateNTemperatures() {
    try {
      const NYCResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=40.730610&longitude=-73.935242&current_weather=true");
      const NYCData = await NYCResponse.json();


      console.log(NYCData);

      const NYCMutableText = TextShape.getMutable(text);



      if (NYCData && NYCData.current_weather && NYCData.current_weather.temperature) {
        const NYCTemperature = NYCData.current_weather.temperature;
        let TempF = ((NYCTemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
        NYCMutableText.text = `Current NYC Temperature: ${NYCTemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          NYCMutableText.text = `Current NYC Temperature: ${TempF}°F`;}
        const weather = NYCData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        NYCMutableText.text = 'Temperature data not available';
      }

    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateNTemperatures()

}
export function createDtext(text: Entity) {

  async function updateDTemperatures() {
    try {

      const DubaiResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=25.168282&longitude=55.250286&current_weather=true");
      const DubaiData = await DubaiResponse.json();




      console.log(DubaiData);


      const DubaiMutableText = TextShape.getMutable(text);


     
      if (DubaiData && DubaiData.current_weather && DubaiData.current_weather.temperature) {
        const DubaiTemperature = DubaiData.current_weather.temperature;
        let TempF = ((DubaiTemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
        DubaiMutableText.text = `Current Dubai Temperature: ${DubaiTemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          DubaiMutableText.text = `Current Dubai Temperature: ${TempF}°F`;}
        const weather = DubaiData.current_weather.weathercode;
        checkWeather(weather)

      } else {
        DubaiMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateDTemperatures()

}


export function createBKtext(text: Entity) {


  async function updateBKTemperatures() {
    try {



      const BangokResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=13.736717&longitude=100.523186&current_weather=true");
      const BangkokData = await BangokResponse.json();

      console.log(BangkokData);

      const BangkokMutableText = TextShape.getMutable(text);


      if (BangkokData && BangkokData.current_weather && BangkokData.current_weather.temperature) {
        const BangkokTemperature = BangkokData.current_weather.temperature;
        let TempF = ((BangkokTemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
          BangkokMutableText.text = `Current Bangkok Temperature: ${BangkokTemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          BangkokMutableText.text = `Current Bangkok Temperature: ${TempF}°F`;}
        const weather = BangkokData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        BangkokMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateBKTemperatures()


}

export function createBAtext(text: Entity) {



  async function updateBATemperatures() {
    try {


      const BAResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.920345&longitude=-57.969559&current_weather=true");
      const BAData = await BAResponse.json();


      console.log(BAData);


      const BAMutableText = TextShape.getMutable(text);


      if (BAData && BAData.current_weather && BAData.current_weather.temperature) {
        const BATemperature = BAData.current_weather.temperature;
        let TempF = ((BATemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
          BAMutableText.text = `Current Buenos Aires Temperature: ${BATemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          BAMutableText.text = `Current Buenos Aires Temperature: ${TempF}°F`;}
        const weather = BAData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        BAMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateBATemperatures()


}

export function createSItext(text: Entity) {


  async function updateSITemperatures() {
    try {


      const SIResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=1.287953&longitude=103.851784&current_weather=true");
      const SIData = await SIResponse.json();


      console.log(SIData);


      const BAMutableText = TextShape.getMutable(text);


      if (SIData && SIData.current_weather && SIData.current_weather.temperature) {
        const BATemperature = SIData.current_weather.temperature;
        let TempF = ((BATemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
          BAMutableText.text = `Current Singapore Temperature: ${BATemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          BAMutableText.text = `Current Singapore Temperature: ${TempF}°F`;}
        const weather = SIData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        BAMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateSITemperatures()


}
export function createSHtext(text: Entity) {



  async function updateSITemperatures() {
    try {


      const SIResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=31.267401&longitude=121.522179&current_weather=true");
      const SIData = await SIResponse.json();


      console.log(SIData);


      const BAMutableText = TextShape.getMutable(text);


      if (SIData && SIData.current_weather && SIData.current_weather.temperature) {
        const BATemperature = SIData.current_weather.temperature;
        let TempF = ((BATemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
          BAMutableText.text = `Current Shanghai Temperature: ${BATemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          BAMutableText.text = `Current Shanghai Temperature: ${TempF}°F`;}
        const weather = SIData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        BAMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateSITemperatures()


}
export function createMtext(text: Entity) {


  async function updateSITemperatures() {
    try {


      const SIResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.644466&longitude=37.395744&current_weather=true");
      const SIData = await SIResponse.json();


      console.log(SIData);


      const BAMutableText = TextShape.getMutable(text);


      if (SIData && SIData.current_weather && SIData.current_weather.temperature) {
        const BATemperature = SIData.current_weather.temperature;
        let TempF = ((BATemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
          BAMutableText.text = `Current Moscow Temperature: ${BATemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          BAMutableText.text = `Current Moscow Temperature: ${TempF}°F`;}
        const weather = SIData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        BAMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateSITemperatures()


}
export function createJtext(text: Entity) {



  async function updateSITemperatures() {
    try {


      const SIResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-26.195246&longitude=28.034088&current_weather=true");
      const SIData = await SIResponse.json();


      console.log(SIData);


      const BAMutableText = TextShape.getMutable(text);


      if (SIData && SIData.current_weather && SIData.current_weather.temperature) {
        const BATemperature = SIData.current_weather.temperature;
        let TempF = ((BATemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
          BAMutableText.text = `Current Jonhansenburg Temperature: ${BATemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          BAMutableText.text = `Current Jonhansenburg Temperature: ${TempF}°F`;}
        const weather = SIData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        BAMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateSITemperatures()


}

export function createMCtext(text: Entity) {


  async function updateSITemperatures() {
    try {


      const SIResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.451054&longitude=-99.125519&current_weather=true");
      const SIData = await SIResponse.json();


      console.log(SIData);


      const BAMutableText = TextShape.getMutable(text);


      if (SIData && SIData.current_weather && SIData.current_weather.temperature) {
        const BATemperature = SIData.current_weather.temperature;
        let TempF = ((BATemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
          BAMutableText.text = `Current Mexico City Temperature: ${BATemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          BAMutableText.text = `Current Mexico City Temperature: ${TempF}°F`;}
        const weather = SIData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        BAMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateSITemperatures()


}



export function createRtext(text: Entity) {


  async function updateSITemperatures() {
    try {


      const SIResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.9027835&longitude=12.4963655&current_weather=true");
      const SIData = await SIResponse.json();


      console.log(SIData);


      const BAMutableText = TextShape.getMutable(text);


      if (SIData && SIData.current_weather && SIData.current_weather.temperature) {
        const BATemperature = SIData.current_weather.temperature;
        let TempF = ((BATemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
          BAMutableText.text = `Current Roma Temperature: ${BATemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          BAMutableText.text = `Current Roma Temperature: ${TempF}°F`;}
        const weather = SIData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        BAMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateSITemperatures()


}

export function createBtext(text: Entity) {


  async function updateSITemperatures() {
    try {


      const SIResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.531677&longitude=13.381777&current_weather=true");
      const SIData = await SIResponse.json();


      console.log(SIData);


      const BAMutableText = TextShape.getMutable(text);


      if (SIData && SIData.current_weather && SIData.current_weather.temperature) {
        const BATemperature = SIData.current_weather.temperature;
        let TempF = ((BATemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
          BAMutableText.text = `Current Berlin Temperature: ${BATemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          BAMutableText.text = `Current Berlin Temperature: ${TempF}°F`;}
        const weather = SIData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        BAMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateSITemperatures()


}

export function createLAtext(text: Entity) {



  async function updateSITemperatures() {
    try {


      const SIResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=34.052235&longitude=-118.243683&current_weather=true");
      const SIData = await SIResponse.json();


      console.log(SIData);


      const BAMutableText = TextShape.getMutable(text);


      if (SIData && SIData.current_weather && SIData.current_weather.temperature) {
        const BATemperature = SIData.current_weather.temperature;
        let TempF = ((BATemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
          BAMutableText.text = `Current  LA  Temperature: ${BATemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          BAMutableText.text = `Current  La Temperature: ${TempF}°F`;}
        const weather = SIData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        BAMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateSITemperatures()


}


export function createSYtext(text: Entity) {



  async function updateSYTemperatures() {
    try {


      const SIResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-33.870453&longitude=-151.208755&current_weather=true");
      const SIData = await SIResponse.json();


      console.log(SIData);


      const BAMutableText = TextShape.getMutable(text);


      if (SIData && SIData.current_weather && SIData.current_weather.temperature) {
        const BATemperature = SIData.current_weather.temperature;
        let TempF = ((BATemperature * 9/5) + 32).toFixed(2);
        if(!Fselect){
          BAMutableText.text = `Current  Sydney Temperature: ${BATemperature}°C`;}
        if(Fselect){
          console.log("FFFFFF")
          BAMutableText.text = `Current  Sydney Temperature: ${TempF}°F`;}
        const weather = SIData.current_weather.weathercode;
        checkWeather(weather)
      } else {
        BAMutableText.text = 'Temperature data not available';
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  }
  updateSYTemperatures()


}