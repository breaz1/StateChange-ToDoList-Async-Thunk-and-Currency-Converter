import { getElementError } from '@testing-library/react'
import axios from 'axios'
import React from 'react'
import Valuta from './Valuta'

const ConvertMoney = () => {
    const [obj, setObj] = React.useState({})
    React.useEffect(_ => {
      axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(res => {
          setObj(res.data.Valute)
        })
        .catch(console.log)
    })
    const Result=()=>{
      let select1 = document.getElementById('1')
      let select2 = document.getElementById('2')
      const input = document.getElementById('3')
      let res = document.getElementById('4')
      let val1=[]
      Object.keys(obj).filter(k => obj[k].NumCode===select1.value ? val1=obj[k] : console.log(''))
      let val2=[]
      Object.keys(obj).filter(k => obj[k].NumCode===select2.value ? val2=obj[k]: console.log(''))
      let nom = val2.CharCode
      val1 = val1.Value/val1.Nominal
      val2 = val2.Value/val2.Nominal
      if (input !== null)
      {
        let count = input.value
        let result = ((count*val1)/val2)
        result = result
        res.innerHTML = result +" " +nom
      }

    }
    return (
        <div className='flex flex-col'>
            <form action="select1.php" method="post">
            <p>From</p>
            <select id = '1'>
            {Object.keys(obj).map(k => <Valuta key={k} data={obj[k]} />)}
            </select>
            <p>To</p>
            <select id = '2'>
            {Object.keys(obj).map(k => <Valuta key={k} data={obj[k]} />)}
            </select>
            <input id='3' type='number' className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm' placeholder='How much?' defaultValue=''/>
            </form>
            <button className='bg-lime-300  hover:bg-lime-400  transition-all p-2 text-sm' onClick={()=>Result()}>Convert</button>

            <p id ='4'  className='font-bold my-5'></p>
        </div>
    )
}

export default ConvertMoney
