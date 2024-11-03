import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 6em;
  padding-inline: 2em;
  display: flex;
  flex-direction: column;
`

export const SectionProfileInfo = styled.section`
  height: 12em;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProfileImg = styled.img`
  width: 10em;
  height: 10em;
  border: 1px solid #44bb01;
  border-radius: 100px;
  box-shadow: 0 0px 10px #44bb0142;
`

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-block: 5px;
`

export const InfoLabel = styled.span`
  padding-left: 5px;
  font-size: 15px;
`

export const ContainerContact = styled.div`
  background: #e3e3e3;
  height: 90%;
  width: 30%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 85%;
  border-radius: 20px;
  border: unset;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    border: 1px solid #0000;
    box-shadow: 0 0px 10px #00000082;
    transform: translateY(-1px) translateX(-1px);
  }
`

export const AboutSection = styled.section``
