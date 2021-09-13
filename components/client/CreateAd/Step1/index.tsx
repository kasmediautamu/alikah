import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../../FormFields/Button'
import DropdownSelect from '../../FormFields/Select'
import s from './Step1.module.scss'

// mockdata
import categories from '../../../../dummyData/categories.json'
import countries from '../../../../dummyData/counties.json'
import TextField from '../../FormFields/TextField'
import TextAreaField from '../../FormFields/Textarea'

type IForm = {
  $category: string
  $country: string
  $subscription: string
  imageURL?: [] | any
  title?: string
  description?: string
  price?: string
  company_name?: string
}
const initialFormState: IForm = {
  $category: '',
  $country: '',
  $subscription: '',
  imageURL: '',
  title: '',
  description: '',
  price: '',
  company_name: '',
}

const Step1Form = () => {
  /**
   * countries and categories
   */
  const Categories: any = categories.map((category) => {
    return category.title
  })
  const country: any = countries.map((country) => {
    return country.country_name
  })

  const router = useRouter()
  const contentType = 'application/json'

  /**
   * state
   */
  const [category, setCategory] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState()
  const [isSelected, setIsSelected] = useState(false)
  const [advertTitleError, setAdvertTitleError] = useState('')
  const [subscription, setSubscription] = useState<Number>(0)
  const [message, setMessage] = useState('')

  // form
  const [formData, setFormData] = useState(initialFormState)
  const [formError, setFormError] = useState<any | null>(null)
  const { title,$category, description,imageURL,price, $country} =
    formData

  const subForm = {
    title:formData.title,
    category:category,
    description:formData.description,
    imageURL:formData.imageURL,
    country:location,
    price:formData.price
  }
  const fileUploadHandler = (event) => {
    setSelectedFile(event.target.files[0])
    setIsSelected(true)
  }
  /*
   *validate form
   */
  //validate form
  const validateForm = () => {
    let error = {}
    if (category === '') {
      error = {
        field_id: 'category',
        message: 'Category is required',
      }
      return error
    }
    if (title === '') {
      error = {
        field_id: 'title',
        message: 'Title is required',
      }
      return error
    }
    if (description === '') {
      error = {
        field_id: 'description',
        message: 'Advert description is required',
      }
      return error
    }
    return error
  }

  const onsubmit = (e: any) => {
    e.preventDefault()
    setFormError(null)
    //validate
    let error = validateForm()
    if (error) {
      setFormError(error)
      setFormData({ ...formData })
    } else {
      setFormData({ ...formData })
    }
    console.log(formError)
    /*
     *submit form
     */
       postData(subForm)
    console.log(typeof(formData.price))
  }
  const onchange = (e: FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement
    setFormData({ ...formData, [target.name]: target.value })
  }
  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (subForm) => {
    try {
      const res = await fetch('/api/adverts', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(subForm),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error()
      }

      router.push('/')
    } catch (error) {
      setMessage('Failed to add your Advert')
    }
  }

  return (
    <>
      <div className={s.catLoc}>
        <div className={s.adCategory}>
          <DropdownSelect
            items={Categories}
            value={category === '' ? 'Select Category*' : category}
            onChange={(value: string) => {
              setCategory(value)
            }}
            /**
             * render a subcategory select depending on category chosen
             */
          />
        </div>
        <div className={s.adLocation}>
          <DropdownSelect
            items={country}
            value={location === '' ? 'Select Country*' : location}
            onChange={(value: string) => {
              setLocation(value)
            }}
            /*
             * render a city select depending on region chosen
             */
          />
        </div>
      </div>
      <form className={s.step1form} onSubmit={onsubmit}>
        {/* need to implement logic for multiple file uploads
         *https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
         */}
        <div className={s.adImages}>
          <p>Add Photo</p>
          <p>
            First picture is the title picture. Each picture shouldn't exceed 3MB. Supported formats
            are *.jpg, *.gif and *.png
          </p>
          <input
            type="file"
            name="file"
            onChange={fileUploadHandler}
            accept="image/png, image/jpg, image/.gif"
            multiple
          />
        </div>
        {/*step2 */}
        <div>
          {category === 'services' && (
            <>
              <TextField
                className={s.textField}
                label="Title*"
                fieldname={'title'}
                changefunction={onchange}
                error={formError && formError.field_id === 'title' ? formError.message : ''}
              />
              <TextField
                className={s.textField}
                label="Company Name"
                fieldname={'company_name'}
                changefunction={onchange}
                error={formError && formError.field_id === 'company_name' ? formError.message : ''}
              />
              {/* text area here */}
              <TextAreaField
                placeholder={'Description*'}
                label="Description*"
                textareaName="description"
                changefunction={onchange}
                error={formError && formError.field_id === 'description' ? formError.message : ''}
              />
              <TextField
                className={s.textField}
                label="Price"
                fieldname={'price'}
                changefunction={onchange}
                error={formError && formError.field_id === 'price' ? formError.message : ''}
              />
            </>
          )}
        </div>
        <div className={s.step2Form}>
          <div className={s.monetization}>
            <div className={s.titleMonetization}>
              <p>Promote your ad</p>
              <p>Please, choose one of the following options to post your ad</p>
            </div>
            <div className={s.field} onClick={() => setSubscription(0)}>
              <div className={s.subscriptionHead}>
                <p className={s.subscriptionTitle}>Standard Ad</p>
              </div>
            </div>
            <div className={s.field} onClick={() => setSubscription(7000)}>
              <div className={s.subscriptionHead}>
                <p className={s.subscriptionTitle}>Top</p>
                <span>Best Offer</span>
              </div>
              <div className={s.subscriptionPackages}>
                <div>
                  <p onClick={() => console.log('7 days')}>{'7 days'}</p>
                  <p onClick={() => console.log('30 days')}>{'30 days'}</p>
                </div>
                <p>Shs {'17,000'}</p>
              </div>
            </div>
            <div className={s.field} onClick={() => console.log('field')}>
              <div className={s.subscriptionHead}>
                <p className={s.subscriptionTitle}>Boost Premium</p>
              </div>
              <div className={s.subscriptionPackages}>
                <div>
                  <p onClick={() => console.log('month')}>{'1 month'}</p>
                </div>
                <p>Shs {'52,000'}</p>
              </div>
            </div>
            <Button type="submit">Post Ad</Button>
            <p className={s.terms}>
              By clicking on Post Ad, you accept the Terms of Use, confirm that you will abide by
              the Safety Tips, and declare that this posting does not include any Prohibited Items.
            </p>
          </div>
        </div>
      </form>
    </>
  )
}

export default Step1Form
