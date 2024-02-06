class Restaurant {
  id: number
  image: string
  infoTags: string[]
  title: string
  rate: number
  description: string

  constructor(
    id: number,
    image: string,
    infoTags: string[],
    title: string,
    rate: number,
    description: string
  ) {
    this.id = id
    this.image = image
    this.infoTags = infoTags
    this.title = title
    this.rate = rate
    this.description = description
  }
}

export default Restaurant
