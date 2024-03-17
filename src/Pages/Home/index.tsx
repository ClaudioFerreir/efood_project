import HeaderHome from '../../Components/HeaderHome'
import RestaurantsList from '../../Components/RestaurantsList'
import Footer from '../../Components/Footer'
import Loader from '../../Components/Loader'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <Loader />
  }

  return (
    <>
      <HeaderHome />
      <RestaurantsList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
