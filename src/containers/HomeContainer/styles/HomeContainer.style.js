import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 6em;
  padding-inline: 2em;
  display: flex;
  flex-direction: column;
`

export const BannerContainer = styled.div`
  color: #fff;
  background-color: #003912;
  border-radius: 12px;
  height: auto;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8.125rem;
`

export const TitleBanner = styled.h1`
  font-family: 'Gilda Display', serif;
  font-weight: 400;
  font-size: 4.75rem;
  text-align: center;
  line-height: 1.4;
  padding-bottom: 2rem;
`

export const SubtitleBanner = styled.i`
  color: #44bb01;
`

export const FormSearch = styled.div`
  display: flex;
  gap: 1rem;
`

export const CardsContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
  justify-items: center;
`

export const Line = styled.hr`
  flex: 1;
  margin: 0;
  border: none;
  border-top: 1px solid #44bb01;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem 3rem 1rem;
`
