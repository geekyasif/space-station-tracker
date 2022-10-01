import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [loading, setLoading] = useState(false)
  const [latitude, setLatitude] = useState(0.1278)
  const [longitude, setLongitude] = useState(0.1278)


  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('http://api.open-notify.org/iss-now.json')
      const data = await res.json()
      setLatitude(data['iss_position']['latitude'])
      setLongitude(data['iss_position']['longitude'])
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      {/* { !loading ? <Map eventData={eventData} /> : <Loader /> } */}
      { !loading ? <Map center={{lat: latitude, lng: longitude}}/> : <Loader /> }
    </div>
  );
}

export default App;
