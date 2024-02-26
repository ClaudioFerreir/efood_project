import { useState } from 'react'

import {
  Action,
  ImageContainer,
  ListContainer,
  Card,
  Modal,
  ModalContainer,
  CloseTag,
  FoodImg,
  Description,
  ImageThumbNail,
  CardCover
} from './styles'

import zoom from '../../assets/icons/zoom.png'
import Button from '../Button'
import fechar from '../../assets/icons/fechar.png'
import { CardapioItem } from '../../Pages/Home'

type ModalState = {
  title: string
  isVisible: boolean
  url: string
  details: string
  portion: string
  price: number
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

type Food = {
  items: CardapioItem[]
}

const FoodCard = ({ items }: Food) => {
  const [modal, setModal] = useState<ModalState>({
    title: '',
    isVisible: false,
    url: '',
    details: '',
    portion: '',
    price: 0
  })

  const closeModal = () => {
    setModal({
      title: '',
      isVisible: false,
      url: '',
      details: '',
      portion: '',
      price: 0
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 95) + '...'
    }
  }

  return (
    <>
      <ListContainer className="container">
        {items.map((food, index) => (
          <Card key={food.id}>
            <CardCover
              onClick={() => {
                setModal({
                  title: food.nome,
                  isVisible: true,
                  url: food.foto,
                  details: food.descricao,
                  portion: food.porcao,
                  price: food.preco
                })
              }}
            >
              <ImageContainer>
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
              <p>{getDescricao(food.descricao)}</p>
            </CardCover>
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
            <p>{modal.details}</p>
            <p>Serve: de {modal.portion}</p>
            <Button title="adicionar ao carrinho">
              {`Adicionar ao carrinho - ${formataPreco(modal.price)}`}
            </Button>
          </Description>
        </ModalContainer>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default FoodCard
