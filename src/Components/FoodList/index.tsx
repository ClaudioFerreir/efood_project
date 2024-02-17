import { useState } from 'react'
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
  Description
} from './styles'

import perfilBanner from '../../assets/images/BannerImg.png'

import pizza from '../../assets/images/image3.png'
import Food from '../../Model/food'
import zoom from '../../assets/icons/zoom.png'
import Button from '../Button'
import fechar from '../../assets/icons/fechar.png'

const mock: Food[] = [
  {
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    details: (
      <p>
        A pizza Margherita é uma pizza clássica da culinária italiana,
        reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
        uma base de massa fina e crocante, coberta com molho de tomate fresco,
        queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva
        extra-virgem. A combinação de sabores é perfeita, com o molho de tomate
        suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas
        de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma
        pizza simples, mas deliciosa, que agrada a todos os paladares e é uma
        ótima opção para qualquer ocasião. <br />
        Serve: de 2 a 3 pessoas
      </p>
    ),
    price: 60.9
  },
  {
    id: 2,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    details: (
      <p>
        A pizza Margherita é uma pizza clássica da culinária italiana,
        reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
        uma base de massa fina e crocante, coberta com molho de tomate fresco,
        queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva
        extra-virgem. A combinação de sabores é perfeita, com o molho de tomate
        suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas
        de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma
        pizza simples, mas deliciosa, que agrada a todos os paladares e é uma
        ótima opção para qualquer ocasião. <br />
        Serve: de 2 a 3 pessoas
      </p>
    ),
    price: 60.9
  },
  {
    id: 3,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    details: (
      <p>
        A pizza Margherita é uma pizza clássica da culinária italiana,
        reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
        uma base de massa fina e crocante, coberta com molho de tomate fresco,
        queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva
        extra-virgem. A combinação de sabores é perfeita, com o molho de tomate
        suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas
        de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma
        pizza simples, mas deliciosa, que agrada a todos os paladares e é uma
        ótima opção para qualquer ocasião. <br />
        Serve: de 2 a 3 pessoas
      </p>
    ),
    price: 60.9
  },
  {
    id: 4,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    details: (
      <p>
        A pizza Margherita é uma pizza clássica da culinária italiana,
        reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
        uma base de massa fina e crocante, coberta com molho de tomate fresco,
        queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva
        extra-virgem. A combinação de sabores é perfeita, com o molho de tomate
        suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas
        de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma
        pizza simples, mas deliciosa, que agrada a todos os paladares e é uma
        ótima opção para qualquer ocasião. <br />
        Serve: de 2 a 3 pessoas
      </p>
    ),
    price: 60.9
  },
  {
    id: 5,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    details: (
      <p>
        A pizza Margherita é uma pizza clássica da culinária italiana,
        reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
        uma base de massa fina e crocante, coberta com molho de tomate fresco,
        queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva
        extra-virgem. A combinação de sabores é perfeita, com o molho de tomate
        suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas
        de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma
        pizza simples, mas deliciosa, que agrada a todos os paladares e é uma
        ótima opção para qualquer ocasião. <br />
        Serve: de 2 a 3 pessoas
      </p>
    ),
    price: 60.9
  },
  {
    id: 6,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    details: (
      <p>
        A pizza Margherita é uma pizza clássica da culinária italiana,
        reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
        uma base de massa fina e crocante, coberta com molho de tomate fresco,
        queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva
        extra-virgem. A combinação de sabores é perfeita, com o molho de tomate
        suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas
        de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma
        pizza simples, mas deliciosa, que agrada a todos os paladares e é uma
        ótima opção para qualquer ocasião. <br />
        Serve: de 2 a 3 pessoas
      </p>
    ),
    price: 60.9
  }
]

type Props = {
  title: string
  tag: string
}

const FoodList = ({ title, tag }: Props) => {
  const { id } = useParams()

  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${perfilBanner})` }}>
        <Title className="container">
          <p>
            <span>{tag}</span>
          </p>
          <h2>
            {title} {id}
          </h2>
        </Title>
      </Banner>
      <ListContainer className="container">
        {mock.map((food) => (
          <Card key={food.id}>
            <ImageContainer
              onClick={() => {
                setModal(true)
              }}
            >
              <div>
                <img src={food.image} alt="Imagem da comida" />
              </div>
              <Action>
                <img src={zoom} alt="Clique aqui para mais detalhes" />
              </Action>
            </ImageContainer>
            <h3>{food.title}</h3>
            <p>{food.description}</p>
            <button>Adicionar ao carrinho</button>
          </Card>
        ))}
      </ListContainer>
      <Modal className={modal ? 'visible' : ''}>
        <ModalContainer className="container">
          <CloseTag
            src={fechar}
            alt="fechar o modal"
            onClick={() => closeModal()}
          />
          <FoodImg src={pizza} alt="imagem da comida" />
          <Description>
            <h4>Pizza Marguerita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br />
              Serve: de 2 a 3 pessoas
            </p>
            <Button title="adicionar ao carrinho">
              Adicionar ao carrinho - R$ 60,90
            </Button>
          </Description>
        </ModalContainer>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default FoodList
