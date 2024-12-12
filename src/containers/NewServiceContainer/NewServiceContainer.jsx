import { createService } from '@/api/create-service'
import { getCategories } from '@/api/get-categories'
import { uploadImgService } from '@/api/upload-img-service'
import Button from '@/components/Button/Button'
import { Combobox } from '@/components/Combobox/Combobox'
import { ImageInput } from '@/components/ImageInput/ImageInput'
import Input from '@/components/Input/Input'
import { InputMoney } from '@/components/InputMoney/InputMoney'
import TitleWithLine from '@/components/TitleWithLine/TitleWithLine'
import { useAuth } from '@/contexts/AuthContext'
import { Field, Form, Formik } from 'formik'
import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { newServiceSchema } from './newServiceSchema'
import {
  Container,
  ContainerError,
  ContainerForm,
  ErrorMsg
} from './styles/NewServiceContainer.style'

export function NewServiceContainer() {
  const { getUserId } = useAuth()

  const [categories, setCategories] = useState({})
  const [selectedCategory, setSelectedCategory] = useState('')
  const [priceValue, setPriceValue] = useState({ value: '', float: 0, formatted: '' })
  const [fileName, setFileName] = useState('Alterar Imagem')

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await createService({
        id: getUserId,
        description: values?.description,
        category: values?.category,
        price: values?.price,
        avarageTime: values?.avarageTime,
      })

      setTimeout(async () => {
        if (values?.image) {
          const formData = new FormData()
          formData.append('image', values?.image)
    
          await uploadImgService({ id: response?.id, formData })
        }
  
        console.log(values)
        toast.success('Serviço criado com sucesso.')
        setSubmitting(false)
      }, [1000])
    } catch {
      toast.error('Ops! Algo de errado aconteceu, tente novamente.')
    } finally {
      setSelectedCategory('')
      setPriceValue({ value: '', float: 0, formatted: '' })
      setFileName('Alterar Imagem')
      resetForm()
    }
  }

  const buscarCategorias = async () => {
    const response = await getCategories()
    const formattedCategories = Object.entries(response).map(([key, value]) => ({
      name: value,
      value: key,
    }))
    setCategories(formattedCategories)
  }


  useEffect(() => {
    buscarCategorias()
  }, [])

  return (
    <Container>
      <TitleWithLine title="Adicionar um serviço" styleContainer={{ padding: '1rem 1rem 2rem 1rem' }} />

      <ContainerForm>
        <Formik
          initialValues={{
            image: '',
            description: '',
            category: '',
            price: '',
            avarageTime: ''
          }}
          validationSchema={newServiceSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting, setFieldValue }) => (
            <Form style={{ width: '100%' }}>
              <ImageInput
                name="image"
                id="image-new-service"
                onChange={(file) => setFieldValue('image', file)}
                style={{ margin: '2rem 0', height: 40, padding: 5 }}
                fileName={fileName}
                setFileName={setFileName}
              />
              {errors.image && touched.image && (
                <ContainerError>
                  <ErrorMsg>{errors.image}</ErrorMsg>
                </ContainerError>
              )}

              <Field
                as={Input}
                name="description"
                id="description-new-service"
                type="text"
                placeholder="Nome"
                borderColor="#44BB01"
                borderColorHover="#44BB01"
                shadowColor="#44bb0142"
                style={{ margin: errors.description && touched.description ? '.3rem 0' : '1rem 0', height: 40, padding: 5 }}   
                borderRadius={15}
              />
              {errors.description && touched.description && (
                <ContainerError>
                  <ErrorMsg>{errors.description}</ErrorMsg>
                </ContainerError>
              )}

              {!isEmpty(categories) && (
                <>
                  <Field
                    as={Combobox}
                    name="category"
                    id="category-new-service"
                    type="text"
                    placeholder="Categoria"
                    borderColor="#44BB01"
                    borderColorHover="#44BB01"
                    shadowColor="#44bb0142"
                    style={{ margin: errors.category && touched.category ? '.3rem 0' : '1rem 0', height: 40, padding: 5 }}   
                    borderRadius={15}
                    itens={categories}
                    value={selectedCategory}
                    onChange={(event) => {
                      setSelectedCategory(event.target.value)
                      setFieldValue('category', event.target.value)
                    }}
                  />
                  <>
                    {errors.category && touched.category && (
                      <ContainerError>
                        <ErrorMsg>{errors.category}</ErrorMsg>
                      </ContainerError>
                    )}
                  </>
                </>
              )}

              <Field
                as={InputMoney}
                name="price"
                id="price-new-service"
                type="text"
                placeholder="Preço por hora"
                borderColor="#44BB01"
                borderColorHover="#44BB01"
                shadowColor="#44bb0142"
                style={{ margin: errors.price && touched.price ? '.3rem 0' : '1rem 0', height: 40, padding: 5 }}   
                borderRadius={15}
                value={priceValue?.value}
                onChange={(values) => {
                  setPriceValue(values)

                  const numericValue = parseFloat(values?.replace(/[^\d,]/g, '')?.replace(',', '.'))
                  console.log(values, numericValue)
                  setFieldValue('price', numericValue)
                }}
              />
              {errors.price && touched.price && (
                <ContainerError>
                  <ErrorMsg>{errors.price}</ErrorMsg>
                </ContainerError>
              )}

              <Field
                as={Input}
                name="avarageTime"
                id="avarege-time-new-service"
                type="number"
                placeholder="Média de tempo de duração por hora"
                borderColor="#44BB01"
                borderColorHover="#44BB01"
                shadowColor="#44bb0142"
                style={{ margin: errors.avarageTime && touched.avarageTime ? '.3rem 0' : '1rem 0', height: 40, padding: 5 }}   
                borderRadius={15}
              />
              {errors.avarageTime && touched.avarageTime && (
                <ContainerError>
                  <ErrorMsg>{errors.avarageTime}</ErrorMsg>
                </ContainerError>
              )}
                      
              <Button
                id="confirm-new-service-button" 
                text="Confirmar"
                type="submit"
                disabled={isSubmitting || selectedCategory === ''}
              />
            </Form>
          )}
        </Formik>
      </ContainerForm>
    </Container>
  )
}