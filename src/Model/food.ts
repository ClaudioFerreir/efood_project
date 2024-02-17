class Food {
  id: number
  image: string
  title: string
  description: string
  details: JSX.Element
  price: number

  constructor(
    id: number,
    image: string,
    title: string,
    description: string,
    details: JSX.Element,
    price: number
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
    this.details = details
    this.price = price
  }
}

export default Food
