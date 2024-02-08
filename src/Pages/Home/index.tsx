import HeaderHome from '../../Components/HeaderHome'
import RestaurantsList from '../../Components/RestaurantsList'
import restaurant from '../../Model/restaurant'

import sushiRest from '../../assets/images/sushi.png'
import pastaRest from '../../assets/images/pasta.png'

const destaque: restaurant[] = [
  {
    id: 1,
    image: sushiRest,
    infoTags: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    rate: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    to: '/perfil'
  },
  {
    id: 2,
    image: pastaRest,
    infoTags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/perfil'
  },
  {
    id: 3,
    image: pastaRest,
    infoTags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/perfil'
  },
  {
    id: 4,
    image: pastaRest,
    infoTags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/perfil'
  },
  {
    id: 5,
    image: pastaRest,
    infoTags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/perfil'
  },
  {
    id: 6,
    image: pastaRest,
    infoTags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/perfil'
  }
]

const Home = () => (
  <>
    <HeaderHome />
    <RestaurantsList restaurants={destaque} />
  </>
)

export default Home
