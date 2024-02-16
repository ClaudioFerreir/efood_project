import {
  CloseTag,
  Description,
  FoodImg,
  FullModal,
  ModalContainer
} from './styles'

import foodImg from '../../assets/images/image3.png'
import Button from '../Button'
import fechar from '../../assets/icons/fechar.png'

const Modal = () => (
  <FullModal>
    <ModalContainer className="container">
      <CloseTag src={fechar} alt="fechar o modal" />
      <FoodImg src={foodImg} alt="imagem da comida" />
      <Description>
        <h4>Pizza Marguerita</h4>
        <p>
          A pizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião. <br />
          Serve: de 2 a 3 pessoas
        </p>
        <Button title="adicionar ao carrinho">
          Adicionar ao carrinho - R$ 60,90
        </Button>
      </Description>
    </ModalContainer>
    <div className="overlay"></div>
  </FullModal>
)

export default Modal
