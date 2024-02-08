class Restaurant {
  id: number
  image: string
  infoTags: string[]
  title: string
  rate: number
  description: string
  to: string = '/perfil'

  constructor(
    id: number,
    image: string,
    infoTags: string[],
    title: string,
    rate: number,
    description: string,
    to: string
  ) {
    this.id = id
    this.image = image
    this.infoTags = infoTags
    this.title = title
    this.rate = rate
    this.description = description
    this.to = to
  }
}

export default Restaurant
