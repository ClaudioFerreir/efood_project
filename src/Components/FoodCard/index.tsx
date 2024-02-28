import { useState } from 'react'

import { ButtonContainer } from '../Button/styles'

import {
  Action,
  Card,
  CardCover,
  CloseTag,
  Description,
  FoodImg,
  ImageContainer,
  ImageThumbNail,
  Modal,
  ModalContainer
} from './styles'
import { CardapioItem } from '../../Pages/Home'
import Button from '../Button'

import zoom from '../../assets/icons/zoom.png'
import fechar from '../../assets/icons/fechar.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type ModalState = {
  title: string
  isVisible: boolean
  url: string
  details: string
  portion: string
  price: number
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

type Props = {
  item: CardapioItem
}

const FoodCard = ({ item }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item))
    dispatch(open())
  }

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
      <Card key={item.id}>
        <CardCover
          onClick={() => {
            setModal({
              title: item.nome,
              isVisible: true,
              url: item.foto,
              details: item.descricao,
              portion: item.porcao,
              price: item.preco
            })
          }}
        >
          <ImageContainer>
            <div>
              <ImageThumbNail src={item.foto} alt={`${item.nome}`} />
            </div>
            <Action>
              <img src={zoom} alt="Clique aqui para mais detalhes" />
            </Action>
          </ImageContainer>
          <h3>{item.nome}</h3>
          <p>{getDescricao(item.descricao)}</p>
        </CardCover>
        <ButtonContainer
          title="clique aqui para adicionar no carrinho"
          onClick={addToCart}
        >
          Adicionar ao carrinho
        </ButtonContainer>
      </Card>
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
            <Button title="adicionar ao carrinho" onClick={addToCart}>
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
