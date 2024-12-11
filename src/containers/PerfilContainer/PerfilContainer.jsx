import Avaliacoes from '@/components/Avaliacoes/Avaliacoes'
import Comentario from '@/components/Comentario/Comentario'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import TitleWithLine from '@/components/TitleWithLine/TitleWithLine'
import map from 'lodash/map'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  AvaliacoesContainer,
  CarouselContainer,
  ComentariosContainer,
  ContactContainer,
  Container,
  ContainerImgProfile,
  CoverImg,
  FooterProfileSideBar,
  InfosProfile,
  ProfileImg,
  ProfileSideBar,
  ProfilMain,
  SobreConteiner,
  StyledBriefcaseBusiness,
  StyledMapPin,
  StyledStar,
  TelefonesContainer,
  TextInfo,
  TextInfoContatos,
  TextSobre,
  TitleContatos,
  TitleName,
} from './styles/PerfilContainer.style'

const cardsInfos = [
  {
    id: 1,
    raiting: 3.2,
    serviceName: 'Encanador Profissional',
    location: 'Lajeado, RS',
    price: 'R$241,00',
    img: 'https://media.istockphoto.com/id/1440019701/pt/foto/close-up-of-plumber-repairing-sink-with-tool-in-bathroom.jpg?s=612x612&w=0&k=20&c=S63dVuXXBdjIYacxkwS1WT504Yt8Ou6q5TiIUF5uMUw=',
  },
  {
    id: 2,
    raiting: 4.5,
    serviceName: 'Eletricista Residencial',
    location: 'Porto Alegre, RS',
    price: 'R$320,00',
    img: 'https://media.istockphoto.com/id/1049775258/pt/foto/smiling-handsome-electrician-repairing-electrical-box-with-pliers-in-corridor-and-looking-at.jpg?s=612x612&w=0&k=20&c=zoH4Td-Ange_i8h0jjNgjHw-9qfhFeXlcPg2mOUuWNw=',
  },
  {
    id: 3,
    raiting: 4.0,
    serviceName: 'Jardineiro',
    location: 'Caxias do Sul, RS',
    price: 'R$180,00',
    img: 'https://img.freepik.com/fotos-gratis/jardineiro-com-weedwacker-cortando-a-grama-no-jardim_329181-20539.jpg',
  },
  {
    id: 4,
    raiting: 3.8,
    serviceName: 'Pintor',
    location: 'Santa Maria, RS',
    price: 'R$275,00',
    img: 'https://img.freepik.com/fotos-premium/pintor-pintando-uma-parede-com-rolo-de-pintura-decoracao-de-casa-conceito-de-reparo_106035-1090.jpg',
  },
  {
    id: 5,
    raiting: 4.3,
    serviceName: 'Técnico em Informática',
    location: 'Novo Hamburgo, RS',
    price: 'R$150,00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBqBhZ6UYdjKU_BQKxLXC3ku4RUHbJ1nz6w&s',
  },
  {
    id: 6,
    raiting: 4.9,
    serviceName: 'Marceneiro',
    location: 'Canoas, RS',
    price: 'R$380,00',
    img: 'https://img.freepik.com/fotos-gratis/carpinteiro-cortando-placa-de-mdf-dentro-da-oficina_23-2149451066.jpg',
  },
  {
    id: 7,
    raiting: 3.6,
    serviceName: 'Montador de Móveis',
    location: 'Gravataí, RS',
    price: 'R$200,00',
    img: 'https://img.freepik.com/fotos-gratis/trabalhador-de-montagem-de-moveis-em-pe-lendo-as-instrucoes-e-usando-uma-fita-metrica-ferramentas-de-trabalho_482257-24849.jpg',
  },
  {
    id: 8,
    raiting: 4.8,
    serviceName: 'Dedetizador',
    location: 'Pelotas, RS',
    price: 'R$310,00',
    img: 'https://img.freepik.com/fotos-gratis/pessoas-desinfetando-uma-area-de-risco-biologico_23-2148848550.jpg',
  },
  {
    id: 9,
    raiting: 4.2,
    serviceName: 'Cuidador de Idosos',
    location: 'Passo Fundo, RS',
    price: 'R$420,00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBz8VEC1ovqstOwMG2BmgLkpeSK9JG-aLcw&s',
  },
  {
    id: 10,
    raiting: 3.9,
    serviceName: 'Limpeza Pós-Obra',
    location: 'Erechim, RS',
    price: 'R$290,00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJm63hIVBxFzrdwoXxKzZXU79pIH1RqPCiQ&s',
  },
  {
    id: 11,
    raiting: 4.7,
    serviceName: 'Mecânico Automotivo',
    location: 'São Leopoldo, RS',
    price: 'R$350,00',
    img: 'https://img.freepik.com/fotos-gratis/trabalhador-de-servico-de-carro-muscular-reparando-o-veiculo_146671-19605.jpg',
  },
  {
    id: 12,
    raiting: 4.1,
    serviceName: 'Personal Organizer',
    location: 'Viamão, RS',
    price: 'R$230,00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjwnGjtU4_4P5i5vGcrRccI8I3bKj3hbBpA&s',
  },
  {
    id: 13,
    raiting: 4.4,
    serviceName: 'Faxineira',
    location: 'Bagé, RS',
    price: 'R$150,00',
    img: 'https://st2.depositphotos.com/2249091/10404/i/450/depositphotos_104040938-stock-photo-nothing-is-better-than-team.jpg',
  },
  {
    id: 14,
    raiting: 3.7,
    serviceName: 'Babá',
    location: 'Alvorada, RS',
    price: 'R$300,00',
    img: 'https://media.istockphoto.com/id/1028379220/pt/foto/mom-and-kid-girl-drawing-with-colored-pencils-at-home.jpg?s=612x612&w=0&k=20&c=DZ21athKVhmY3ENTIGRHaJqg9J67Zq1kLQ_LyPCBY-Y=',
  },
  {
    id: 15,
    raiting: 4.6,
    serviceName: 'Professor Particular de Matemática',
    location: 'Torres, RS',
    price: 'R$100,00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdG3efwvVznWSZ2f5d1bTdHYRpnzephJj73Q&s',
  },
]

const comentariosInfos = [
  {
    id: 1,
    nome: 'John Doe',
    avaliacao: 5,
    data: '01/11/2024',
    comentario:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, officia. Ad eius asperiores eveniet voluptates ullam eaque dignissimos necessitatibus minus, mollitia eos doloremque dolore, ab illum consectetur sed? Eum, recusandae?',
  },
  {
    id: 2,
    nome: 'John Doe',
    avaliacao: 3,
    data: '31/10/2024',
    comentario:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, officia. Ad eius asperiores eveniet voluptates ullam eaque dignissimos necessitatibus minus, mollitia eos doloremque dolore, ab illum consectetur sed? Eum, recusandae?',
  },
]

const PerfilContainer = () => {
  return (
    <Container>
      <ProfileSideBar>
        <CoverImg />

        <ContainerImgProfile>
          <ProfileImg src="../../../profile-image.png" />
        </ContainerImgProfile>

        <FooterProfileSideBar>
          <TitleName>John Doe</TitleName>

          <InfosProfile>
            <StyledBriefcaseBusiness />
            <TextInfo>Encanador</TextInfo>
          </InfosProfile>

          <InfosProfile>
            <StyledMapPin />
            <TextInfo>Lajeado, RS</TextInfo>
          </InfosProfile>

          <InfosProfile>
            <StyledStar />
            <TextInfo>4.3(123)</TextInfo>
          </InfosProfile>

          <ContactContainer>
            <div>
              <TitleContatos>EMAIL:</TitleContatos>
              <TextInfoContatos>johndoe@gmail.com</TextInfoContatos>
            </div>

            <TelefonesContainer>
              <TitleContatos>TELEFONE(S):</TitleContatos>
              <TextInfoContatos>(51) 99999-9999</TextInfoContatos>
              <TextInfoContatos>(51) 98888-8888</TextInfoContatos>
            </TelefonesContainer>
          </ContactContainer>
        </FooterProfileSideBar>
      </ProfileSideBar>

      <ProfilMain>
        <TitleWithLine title="Serviços" fontSize="1.5rem" styleContainer={{ padding: '1rem' }} />

        <CarouselContainer>
          <Swiper slidesPerView={2} spaceBetween={10}>
            {map(cardsInfos, info => (
              <SwiperSlide key={info.id}>
                <ServiceCard cardInfos={info} hasBoxShadow={false} />
              </SwiperSlide>
            ))}
          </Swiper>
        </CarouselContainer>

        <TitleWithLine title="Sobre" fontSize="1rem" styleContainer={{ padding: '1rem' }} />
        <SobreConteiner>
          <TextSobre>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, deleniti ut? Ea temporibus quae laboriosam voluptatum
            aliquid animi fuga iusto, iure ullam quia deserunt consequuntur ab earum quisquam nam sapiente? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Odio, iste nisi labore pariatur cupiditate corporis possimus nesciunt inventore
            consequuntur explicabo adipisci deleniti eaque, sed quisquam asperiores tenetur illum praesentium beatae?
          </TextSobre>
        </SobreConteiner>

        <TitleWithLine title="Avaliações" fontSize="1rem" styleContainer={{ padding: '1rem' }} />
        <AvaliacoesContainer>
          <Avaliacoes
            qtdTotal={123}
            umaEstrelaQtd={0}
            duasEstrelaQtd={0}
            tresEstrelaQtd={2}
            quatroEstrelaQtd={21}
            cincoEstrelaQtd={100}
          />
        </AvaliacoesContainer>

        <ComentariosContainer>
          {map(comentariosInfos, comentario => (
            <Comentario
              key={comentario.id}
              nome={comentario.nome}
              avaliacao={comentario.avaliacao}
              data={comentario.data}
              comentario={comentario.comentario}
            />
          ))}
        </ComentariosContainer>
      </ProfilMain>
    </Container>
  )
}

export default PerfilContainer
