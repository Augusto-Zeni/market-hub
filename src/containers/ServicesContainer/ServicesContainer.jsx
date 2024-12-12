import { getFeedHome } from "@/api/get-feed-home"
import Button from "@/components/Button/Button"
import Input from "@/components/Input/Input"
import { Pagination } from "@/components/Pagination/Pagination"
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import TitleWithLine from "@/components/TitleWithLine/TitleWithLine"
import { useQuery } from "@tanstack/react-query"
import { isEmpty } from "lodash"
import map from "lodash/map"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { z } from "zod"
import { CardsContainer, Container, ContainerFilter, Form, HrFilter } from "./styles/ServicesContainer.style"

export function ServicesContainer() {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search')

  const [searchValue, setSearchValue] = useState(search || '')

  const pageIndex = z.coerce.number()
    .parse(parseInt(searchParams.get('current_page'), 10) || 1)

  const { data: services } = useQuery({
    queryKey: ['services', search, pageIndex],
    queryFn: () => getFeedHome({ page: pageIndex, search }),
  })

  function handlePaginate(pageIndex) {
    setSearchParams(prev => {
      prev.set('current_page', (pageIndex).toString())

      return prev
    })
  }

  function handleSearchFilters() {
    setSearchParams(state => {
      if (searchValue) {
          state.set('search', searchValue)
      } else {
          state.delete('search')
      }

      state.set('page', '1')

      return state
    })
  }

  function handleClearFilters() {
    setSearchParams(state => {
      state.delete('search')
      state.set('current_page', '1')

      return state
    })

    setSearchValue('')
  }

  return (
    <Container>
      <TitleWithLine title="Serviços" styleContainer={{ padding: '3rem 1rem 2rem 1rem' }} />

      <ContainerFilter>
        <Form>
          <Input
            name="search"
            id="search"
            type="text"
            placeholder="Pesquise por um serviço"
            borderColor="#44BB01"
            borderColorHover="#44BB01"
            shadowColor="#44bb0142"
            style={{ margin: 0, width: '20rem', height: 40, padding: 5 }}   
            borderRadius={15}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button
            id="cadastrar-button"
            text="Pesquisar"
            style={{ width: '8rem' }}
            onClick={handleSearchFilters}
          />
          <Button
            id="cadastrar-button"
            text="Limpar Filtros"
            style={{ width: '8rem' }}
            onClick={handleClearFilters}
          />
        </Form>
        <HrFilter />
      </ContainerFilter>

      <CardsContainer>
        {!isEmpty(services?.data) && (
          <>
            {map(services?.data, service => (
              <ServiceCard
                key={service?.id}
                cardInfos={{
                  id: service?.id,
                  raiting: service?.stars?.average_stars,
                  serviceName: service?.description,
                  location: service?.profile?.location,
                  price: service?.price_per_hour,
                  img: service?.image_url
                }}
              />
            ))}
          </>
        )}
      </CardsContainer>

      
      <Pagination
        pageIndex={services?.current_page}
        totalCount={services?.total}
        perPage={services?.per_page}
        onPageChange={handlePaginate}
      />
    </Container>
  )
}