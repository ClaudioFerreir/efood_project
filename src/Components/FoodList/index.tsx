import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  Action,
  Banner,
  ImageContainer,
  ListContainer,
  Title,
  Card,
  Modal,
  ModalContainer,
  CloseTag,
  FoodImg,
  Description,
  ImageThumbNail
} from './styles'

import zoom from '../../assets/icons/zoom.png'
import Button from '../Button'
import fechar from '../../assets/icons/fechar.png'
import { Cardapio, Restaurant } from '../../Pages/Home'

type ModalState = {
  title: string
  isVisible: boolean
  url: string
  details: string
  price: number
}

const FoodList = () => {
  const { id } = useParams()

  const [modal, setModal] = useState<ModalState>({
    title: '',
    isVisible: false,
    url: '',
    details: '',
    price: 0
  })

  const closeModal = () => {
    setModal({
      title: '',
      isVisible: false,
      url: '',
      details: '',
      price: 0
    })
  }

  const [cardapio, setCardapio] = useState<Cardapio[]>([])
  const [restaurant, setRestaurant] = useState<Restaurant>({
    id: 0,
    titulo: '',
    destacado: false,
    tipo: '',
    avaliacao: 0,
    descricao: '',
    capa: '',
    cardapios: []
  })

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        const restaurant = res.find(
          (restaurant: Restaurant) => restaurant.id === Number(id)
        )
        if (restaurant) {
          setRestaurant(restaurant)
          setCardapio(restaurant.cardapio)
        }
      })
  })

  return (
    <>
      <Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <Title className="container">
          <p>
            <span>{restaurant.tipo}</span>
          </p>
          <h2>{restaurant.titulo}</h2>
        </Title>
      </Banner>
      <ListContainer className="container">
        {cardapio.map((food, index) => (
          <Card key={food.id}>
            <ImageContainer
              onClick={() => {
                setModal({
                  title: food.nome,
                  isVisible: true,
                  url: food.foto,
                  details: food.descricao,
                  price: food.preco
                })
              }}
            >
              <div>
                <ImageThumbNail
                  src={food.foto}
                  alt={`Imagem ${index + 1} da comida ${food.nome}`}
                />
              </div>
              <Action>
                <img src={zoom} alt="Clique aqui para mais detalhes" />
              </Action>
            </ImageContainer>
            <h3>{food.nome}</h3>
            <p>{food.descricao}</p>
            <button>Adicionar ao carrinho</button>
          </Card>
        ))}
      </ListContainer>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContainer className="container">
          <CloseTag
            src={fechar}
            alt="fechar o modal"
            onClick={() => closeModal()}
          />
          <FoodImg src={modal.url} alt="imagem da comida" />
          <Description>
            <h4>{modal.title}</h4>
            {modal.details}
            <Button title="adicionar ao carrinho">
              {`Adicionar ao carrinho - R$ ${modal.price.toFixed(2)}`}
            </Button>
          </Description>
        </ModalContainer>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default FoodList
