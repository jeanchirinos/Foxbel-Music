import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDeezer } from 'context/DeezerContext'

export default function Search() {
  const { getSongs } = useDeezer()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.currentTarget))
    const { search } = formData

    getSongs(search.toString())
  }

  return (
    <S_Form onSubmit={handleSubmit}>
      <input type='search' name='search' placeholder='Buscar' />
      <button aria-label='Buscar'>
        <AiOutlineSearch />
      </button>
    </S_Form>
  )
}

const S_Form = styled.form`
  max-width: 524px;
  flex-grow: 1;
  position: relative;

  input {
    width: 100%;
    padding-inline: 1rem 2.2rem;
    padding-block: 0.3rem;
    border: 1px solid #828282;
    border-radius: 100px;
    font: inherit;
    font-size: 18px;
    background-color: transparent;
    color: var(--opposite);

    ::placeholder {
      color: var(--soft-gray);
    }

    :focus {
      outline-color: var(--primary);
    }
  }

  button {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);

    svg {
      display: block;
      color: var(--soft-gray);
    }
  }
`
