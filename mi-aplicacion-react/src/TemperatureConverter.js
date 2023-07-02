import React,{useState} from 'react'

function TemperatureConverter(){
  const [temperature,setTemperature]=useState('');
  const [ originalUnit , setOriginalUnit]= useState('celsius');
  const [ targetUnit, setTargetUnit]=useState('faharenheit');
  const [convertedTemperature, setConvertedTemperature]=useState('');

  const convertTemperature =(e)=>{
    e.preventDefault();

    if (temperature !==""){
      let convertirTemp;

      if (originalUnit === 'celsius'){

        if (targetUnit === 'faharenheit'){
          convertirTemp = (parseFloat(temperature)*9/5)-32;

        }else if(targetUnit==='kelvin'){
          convertirTemp=parseFloat(temperature)+273.15;

        }
      }else if (originalUnit === ' faharenheit'){
        if (targetUnit === "celsius"){
          convertirTemp=(parseFloat(temperature)-32)*5/9;

        }else if(targetUnit==="kalvin"){
          convertirTemp=(parseFloat(temperature)+459.67)*5/9;

        }
      }else if (originalUnit === 'kalvin'){
        if (targetUnit === "celsius"){
          convertirTemp=parseFloat(temperature)-273.15;
        }else if (targetUnit === 'faharenheit'){
          convertirTemp =(parseFloat(temperature)*9/5)-459.67
        }
      }
      // permitirle 2 decimales con el toFixed
      setConvertedTemperature(convertirTemp.toFixed(2));
    }


  }
    return(
      <div>
        <h1>Conversor de temperatura</h1>
        <form onSubmit={convertTemperature}>
          <label>
            temperatura:
            <input
              type="number"
              value={temperature}
              onChange={(e)=>setTemperature(e.target.value)}
            /><br></br>
          </label><br></br>
          <label>
              
              unidad de medida original:
              <select value={originalUnit} 
              onChange={(e)=>setOriginalUnit(e.target.value)}
              >

                  <option value="celsius"> Celsius</option>
                  <option value="fahrenheit">Fahrenheit</option>
                  <option value="kelvin">Kelvin</option>
              </select><br></br>
          </label><br></br>
          <label>
            unidad de medida de destino:
            <select value={targetUnit} onChange={(e)=>setTargetUnit(e.target.value)}>
              
            <option value="celsius"> Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
          

            </select><br></br>
          </label><br></br>
          <button type="submit>">Convertir</button>
        </form>
        {convertedTemperature !=="" &&(<p>{convertTemperature} {targetUnit}</p>)}

      </div>
    )
}
export default TemperatureConverter;