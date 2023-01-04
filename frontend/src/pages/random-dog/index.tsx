import { useState } from 'react'
import { Button, Container } from './styles'

export function RandomDogPage (): JSX.Element {
  const [image, setImage] = useState('/dog.svg')
  const [loadingImage, setLoadingImage] = useState(false)

  async function handleClick (): Promise<void> {
    setLoadingImage(true)

    const response = await fetch('https://random.dog/woof')
    const text = await response.text()

    if (text.endsWith('mp4') || text.endsWith('gif') || text.endsWith('webm')) {
      return await handleClick()
    }

    setImage(`https://random.dog/${text}`)
  }

  return (
    <Container>
      <div className="content">
        <img onLoad={() => setLoadingImage(false)} src={image} alt={'Um lindo cachorro resgatado da random dog api'} />
        <Button disabled={loadingImage} onClick={handleClick}>
          {loadingImage ? 'Carregando nova imagem...' : 'Procurar uma imagem aleatória de cães'}
        </Button>
      </div>
    </Container>
  )
}
