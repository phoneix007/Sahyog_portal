import React , {useState , useEffect} from 'react'

const HospitalList = () => {
 
 const [list , listController] = useState(null)
  
  useEffect(() => {
      fetch('http://api.openweathermap.org/data/2.5/weather?q=paris&appid=096d26f68423a11e91a97ce1b35f2a1f').
       then(data => {
         return data.json()
      }).then(data => {
          console.log(data);
          listController(data);
          console.log(list);
      }).catch(err => {
          console.log(err);
      })
  } , [])
    console.log("hello")
  return (
      <div>HospitalList</div>
  )

}

export default HospitalList