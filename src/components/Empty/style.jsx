import styled from 'styled-components'

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const EmptyImg = styled.img`
  height: 200px;
  object-fit: cover;
  object-position: center;
`

export default StyledEmpty

export { EmptyImg }
