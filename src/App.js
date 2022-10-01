import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [loading, setLoading] = useState(false)
  const [latitude, setLatitude] = useState(-122.8756)
  const [longitude, setLongitude] = useState(42.3265)


  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    setLoading(true)
    const res = await fetch('http://api.open-notify.org/iss-now.json')
    const data = await res.json()
    console.log(data)
    setLatitude(parseFloat(data['iss_position']['latitude']))
    setLongitude(parseFloat(data['iss_position']['longitude']))
    setLoading(false)
  }

  return (
    <div>
      <Header />
      {/* { !loading ? <Map eventData={eventData} /> : <Loader /> } */}
      { !loading ? <Map center={{ lat: latitude, lng: longitude }} zoom={4}/> : <Loader /> }
    </div>
  );
}

export default App;
