import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import PropTypes from 'prop-types'
import {
  Button,
  ButtonGroup,
  PageNumber,
  PaginationContainer,
  PaginationInfo,
  SrOnly,
  TotalItems,
} from './styles/Pagination.style'

export function Pagination({ pageIndex, totalCount, perPage, onPageChange }) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <PaginationContainer>
      <TotalItems>
        <i>
          Total de {totalCount} item(s)
        </i>
      </TotalItems>

      <PaginationInfo>
        <PageNumber>
          Página {pageIndex} de {pages}
        </PageNumber>

            <ButtonGroup>
              <Button onClick={() => onPageChange(1)} disabled={pageIndex === 1}>
                  <ChevronsLeft />
                  <SrOnly>Primeira página</SrOnly>
              </Button>
              <Button onClick={() => onPageChange(pageIndex - 1)} disabled={pageIndex === 1}>
                  <ChevronLeft />
                  <SrOnly>Página anterior</SrOnly>
              </Button>
              <Button onClick={() => onPageChange(pageIndex + 1)} disabled={pages <= pageIndex}>
                  <ChevronRight />
                  <SrOnly>Próxima página</SrOnly>
              </Button>
              <Button onClick={() => onPageChange(pages)} disabled={pages <= pageIndex}>
                  <ChevronsRight />
                  <SrOnly>Última página</SrOnly>
              </Button>
          </ButtonGroup>
      </PaginationInfo>
    </PaginationContainer>
  )
}

Pagination.propTypes = {
  pageIndex: PropTypes.number,
  totalCount: PropTypes.number,
  perPage: PropTypes.number,
  onPageChange: PropTypes.func,
}
