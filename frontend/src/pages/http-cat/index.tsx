import { useState, FormEvent, useRef } from 'react'
import { Container, Form } from './styles'

const httpCodes = [
  '100', '101',
  '200', '201', '202', '203', '204', '205', '206',
  '300', '301', '302', '303', '304', '305', '307',
  '400', '401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417',
  '500', '501', '502', '503', '504', '505'
]

export function HTTPCatPage (): JSX.Element {
  const [image, setImage] = useState({
    src: '/cat.svg',
    alt: 'Gatinho brincando com um novelo de lã'
  })

  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit (e: FormEvent): void {
    e.preventDefault()

    if (inputRef.current == null) return

    const { value } = inputRef.current

    if (!httpCodes.includes(value)) {
      setImage({
        src: '/cat_404.svg',
        alt: 'Código inexistente'
      })

      return
    }

    setImage({
      src: `https://http.cat/${value}`,
      alt: `Imagem resgatada da http-cat api, código ${value}`
    })
  }

  return (
    <Container>
      <div className="content">
        <img src={image.src} alt={image.alt} />
        <Form onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" placeholder='Escreva um código HTTP' required />
          <button type='submit'>Pesquisar</button>
        </Form>
      </div>
    </Container>
  )
}
