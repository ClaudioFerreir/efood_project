import Tag from '../Tag'
import {
  Card,
  CardHeader,
  CardTemplate,
  Description,
  ProductTag,
  Rate
} from './styles'

import starImg from '../../assets/icons/star.png'

const Product = () => (
  <div>
    <Card>
      <img src="//placehold.it/472x217" alt="" />
      <ProductTag>
        <Tag>Destaque da semana</Tag>
        <Tag>Japonesa</Tag>
      </ProductTag>
      <CardTemplate>
        <CardHeader>
          <h3>Nome do Produto</h3>
          <Rate>
            4.9 <img src={starImg} alt="star rate" />
          </Rate>
        </CardHeader>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nisi
          eveniet sunt sequi commodi minima esse ullam, harum incidunt cumque,
          officia, dolorem ex. Maiores quod rerum pariatur debitis earum. Autem.
        </Description>
        <Tag useLink>Saiba mais</Tag>
      </CardTemplate>
    </Card>
  </div>
)

export default Product
