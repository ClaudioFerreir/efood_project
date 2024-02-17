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
        <br />
        Serve: de 2 a 3 pessoas
      </p>
    ),
    price: 60.9
  },
  {
    id: 2,
    image: pizza,
    title: 'Pizza Pepperoni',
    description:
      'Uma pizza clássica coberta com generosas fatias de pepperoni, queijo derretido e molho de tomate temperado.',
    details: (
      <p>
        A combinação irresistível de sabores defumados do pepperoni, o queijo
        derretido e o molho de tomate picante tornam esta pizza uma escolha
        popular para os amantes de carne. Cada mordida é uma explosão de sabor
        que cativa os sentidos. Esta pizza é perfeita para compartilhar com
        amigos e familiares em qualquer ocasião. Sirva com uma bebida
        refrescante para uma refeição satisfatória e reconfortante. <br />
        <br />
        Serve: de 2 a 3 pessoas
      </p>
    ),
    price: 60.9
  },
  {
    id: 3,
    image: pizza,
    title: 'Pizza Quatro Queijos',
    description:
      'Uma pizza indulgente coberta com uma mistura de quatro queijos: mussarela, parmesão, gorgonzola e provolone.',
    details: (
      <p>
        Cada mordida desta pizza oferece uma explosão de sabores diferentes,
        desde o cremoso até o picante. A combinação de queijos de alta qualidade
        derretidos sobre a massa crocante é simplesmente divina. Esta pizza é um
        deleite para os amantes de queijo e uma escolha sofisticada para uma
        noite especial. Sirva com um bom vinho tinto para aprimorar a
        experiência gastronômica. <br />
        <br />
        Serve: de 2 a 3 pessoas
      </p>
    ),
    price: 60.9
  },
  {
    id: 4,
    image: pizza,
    title: 'Pizza Vegetariana',
    description:
      'Uma pizza saudável e colorida, coberta com uma variedade de vegetais frescos, como pimentão, cebola, cogumelos e azeitonas.',
    details: (
      <p>
        Esta pizza é uma explosão de cores e sabores naturais. Os vegetais
        frescos adicionam uma textura crocante e um sabor vibrante que agrada
        até mesmo os não vegetarianos. Cada ingrediente é cuidadosamente
        selecionado para garantir uma mistura harmoniosa de sabores e uma
        experiência gastronômica satisfatória. Esta pizza é uma escolha
        nutritiva e deliciosa para uma refeição leve e saudável. Sirva com uma
        salada fresca para um banquete equilibrado. <br />
        <br />
        Serve: de 2 a 3 pessoas
      </p>
    ),
    price: 60.9
  },
  {
    id: 5,
    image: pizza,
    title: 'Pizza Frango com Catupiry',
    description:
      'Uma pizza brasileira clássica com frango desfiado, catupiry cremoso e uma pitada de orégano.',
    details: (
      <p>
        Esta pizza combina a suculência do frango desfiado com a cremosidade do
        catupiry, resultando em uma experiência de sabor única e deliciosa. Cada
        mordida é uma indulgência cremosa e reconfortante que agrada a todos os
        paladares. A adição de uma pitada de orégano acrescenta um toque de
        frescor e aroma. Esta pizza é uma escolha popular em todo o Brasil e é
        perfeita para qualquer refeição. Sirva com um suco natural para uma
        combinação perfeita. <br />
        <br />
        Serve: de 2 a 3 pessoas
      </p>
    ),
    price: 60.9
  },
  {
    id: 6,
    image: pizza,
    title: 'Pizza Calabresa',
    description:
      'Uma pizza tradicionalmente italiana com fatias de linguiça calabresa, cebola, pimentão e queijo mussarela.',
    details: (
      <p>
        A linguiça calabresa defumada é o destaque desta pizza, oferecendo um
        sabor rico e levemente picante. Combinado com os vegetais frescos e o
        queijo derretido, é uma opção clássica e satisfatória. Cada mordida é
        uma explosão de sabores que transporta os sentidos para as ruas de
        Nápoles. Esta pizza é perfeita para uma refeição reconfortante em
        família ou para compartilhar com amigos. Sirva com uma cerveja gelada
        para uma experiência autêntica. <br />
        <br />
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

type ModalState = {
  title: string
  isVisible: boolean
  url: string
  details: JSX.Element
  price: number
}

const FoodList = ({ title, tag }: Props) => {
  const { id } = useParams()

  const [modal, setModal] = useState<ModalState>({
    title: '',
    isVisible: false,
    url: '',
    details: <></>,
    price: 0
  })

  const closeModal = () => {
    setModal({
      title: '',
      isVisible: false,
      url: '',
      details: <></>,
      price: 0
    })
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
        {mock.map((food, index) => (
          <Card key={food.id}>
            <ImageContainer
              onClick={() => {
                setModal({
                  title: food.title,
                  isVisible: true,
                  url: food.image,
                  details: food.details,
                  price: food.price
                })
              }}
            >
              <div>
                <img
                  src={food.image}
                  alt={`Imagem ${index} da comida ${food.title}`}
                />
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
