import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import Button from '../Button'

import zoom from '../../assets/icons/zoom.png'
import closeIcon from '../../assets/icons/fechar.png'

import { ButtonContainer } from '../Button/styles'
import * as S from './styles'

type ModalState = {
  title: string
  isVisible: boolean
  url: string
  details: string
  portion: string
  price: number
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

  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 95) + '...'
    }
  }

  return (
    <>
      <S.Card
        title={`Clique para mais detalhes do prato: ${item.nome}`}
        key={item.id}
      >
        <S.CardCover
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
          <S.ImageContainer>
            <div>
              <S.ImageThumbNail src={item.foto} alt={`${item.nome}`} />
            </div>
            <S.Action>
              <img src={zoom} alt="Clique aqui para mais detalhes" />
            </S.Action>
          </S.ImageContainer>
          <h3>{item.nome}</h3>
          <p>{getDescription(item.descricao)}</p>
        </S.CardCover>
        <ButtonContainer
          title="clique aqui para adicionar no carrinho"
          onClick={addToCart}
        >
          Adicionar ao carrinho
        </ButtonContainer>
      </S.Card>
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContainer className="container">
          <S.CloseTag
            src={closeIcon}
            alt="fechar o modal"
            onClick={closeModal}
          />
          <S.FoodImg src={modal.url} alt="imagem da comida" />
          <S.Description>
            <h4>{modal.title}</h4>
            <p>{modal.details}</p>
            <p>Serve: de {modal.portion}</p>
            <Button title="adicionar ao carrinho" onClick={addToCart}>
              {`Adicionar ao carrinho - ${parseToBrl(modal.price)}`}
            </Button>
          </S.Description>
        </S.ModalContainer>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default FoodCard
