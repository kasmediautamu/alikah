import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../../../../redux/store'
import { signIn } from '../../../../redux/Actions/auth'
import Cookies from 'js-cookie'
import axios from 'axios'
// components
import Button from '../../FormFields/Button'
import DropdownSelect from '../../FormFields/Select'
import TextField from '../../FormFields/TextField'
import TextAreaField from '../../FormFields/Textarea'
// styles
import s from './Step1.module.scss'
// locah data
import categories from '../../../../dummyData/categories.json'
import countries from '../../../../dummyData/counties.json'
import sponsorships from '../../../../dummyData/sponsorships.json'
// redux
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const initialFormState = {
  title: '',
  description: '',
  saleprice: '',
  province: '',
  city: '',
  phone: '',
}

const StepForm1 = () => {
  /**
   * countries and categories
   */
  const Categories = categories.map((category) => {
    return category.title
  })
  /*
   *subcategories
   */

  const subcategory$ = categories.map((subcategory) => {
    return subcategory
  })

  const country = countries.map((country) => {
    return country.country_name
  })
  /**
   *sponsorships
   */

  const router = useRouter()
  const { redirect }: any = router.query

  /**redux */

  const userInfo = useAppSelector((state: any) => state.sign_in.userInfo)
  const dispatch = useDispatch()

  /**local state */

  const [image, setImage] = useState<any>('')
  const [url, setUrl] = useState<any>('')
  const [category, setCategory] = useState('')
  const [subcategory, setsubCategory] = useState('')
  const [subcategory$$, setsubCategory$$] = useState('')
  const [location, setLocation] = useState('')
  const [adprice, setadprice] = useState<Number>(0)
  // const [subscription, setSubscription] = useState<string>('')
  const [isPaid, setIspaid] = useState<Boolean>(false)
  const [isPublished, setIspublished] = useState<Boolean>(true)
  const [formData, setFormData] = useState(initialFormState)

  // subcategories

  // useEffect(() => {
  //   if (!userInfo._id) {
  //     router.push('/login')
  //   }
  // }, [])
  const submittedForm = {
    title: formData.title,
    userId: userInfo ? userInfo._id : null,
    category: category,
    subcategory: subcategory,
    description: formData.description,
    imageURL: [url],
    country: location,
    price: formData.saleprice,
    subscriptionType: adprice === 0 ? 'free' : 'Paid',
    isPaid: adprice > 0 ? true : false,
    subscriptionPrice: adprice,
    isPublished: isPublished,
    address: {
      province: formData.province,
      city: formData.city,
      phone: userInfo ? userInfo.phoneNumber : null,
    },
  }

  // uploads image
  const uploadImage = () => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'b20u7kvi')
    data.append('cloud_name', 'dygxgifft')
    fetch('  https://api.cloudinary.com/v1_1/dygxgifft/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url)
      })
      .catch((err) => console.log(err))
  }
  //submit form
  const onsubmit = async (e: any) => {
    e.preventDefault()
    setFormData({ ...formData })
    console.log({ submittedForm })
    try {
      const { data } = await axios.post('/api/user/register', {
        ...submittedForm,
      })
      // console.log(data)
      dispatch(signIn(data))
      Cookies.set('userInfo', data)
      router.push(redirect || '/')
    } catch (err) {
      // enqueueSnackbar(getError(err), { variant: 'error' });
      console.log(err)
    }
  }
  return (
    <div>
      <div className={s.adImages}>
        <p>Add Photo</p>
        <p>
          First picture is the title picture. Each picture shouldn't exceed 3MB. Supported formats
          are *.jpg, *.gif and *.png
        </p>
        <input
          type="file"
          accept="image/.png,image/.jpg, image/.gif"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <img src={url} />
        <Button className={s.uploadbutton} onClick={uploadImage}>Upload</Button>
      </div>
      {/* form fields */}

      <div className={s.catLoc}>
        <div className={s.adCategory}>
          <DropdownSelect
            items={Categories}
            value={category === '' ? 'Select Category*' : category}
            onChange={(value) => {
              setCategory(value)
            }}
            /**
             * render a subcategory select depending on category chosen
             */
          />
          {category === 'services' ? (
            <DropdownSelect
              items={category === 'services' ? subcategory$[0].subcategories : []}
              value={subcategory$$ === '' ? 'Select Sub Category*' : subcategory$$}
              onChange={(value) => {
                setCategory(value)
              }}
            />
          ) : (
            ''
          )}

          {category === 'vehicles' ? (
            <DropdownSelect
              items={category === 'vehicles' ? subcategory$[1].subcategories : []}
              value={subcategory$$ === '' ? 'Select Sub Category*' : subcategory$$}
              onChange={(value) => {
                setCategory(value)
              }}
            />
          ) : (
            ''
          )}
          {category === 'dating' ? (
            <DropdownSelect
              items={category === 'dating' ? subcategory$[2].subcategories : []}
              value={subcategory$$ === '' ? 'Select Sub Category*' : subcategory$$}
              onChange={(value) => {
                setCategory(value)
              }}
            />
          ) : (
            ''
          )}
          {category === 'Fashion' ? (
            <DropdownSelect
              items={category === 'Fashion' ? subcategory$[3].subcategories : []}
              value={subcategory$$ === '' ? 'Select Sub Category*' : subcategory$$}
              onChange={(value) => {
                setCategory(value)
              }}
            />
          ) : (
            ''
          )}
          {category === 'Property' ? (
            <DropdownSelect
              items={category === 'Property' ? subcategory$[4].subcategories : []}
              value={subcategory$$ === '' ? 'Select Sub Category*' : subcategory$$}
              onChange={(value) => {
                setCategory(value)
              }}
            />
          ) : (
            ''
          )}
          {category === 'Jobs' ? (
            <DropdownSelect
              items={category === 'Jobs' ? subcategory$[5].subcategories : []}
              value={subcategory$$ === '' ? 'Select Sub Category*' : subcategory$$}
              onChange={(value) => {
                setCategory(value)
              }}
            />
          ) : (
            ''
          )}
          {category === 'Electronics & Furniture' ? (
            <DropdownSelect
              items={category === 'Electronics & Furniture' ? subcategory$[6].subcategories : []}
              value={subcategory$$ === '' ? 'Select Sub Category*' : subcategory$$}
              onChange={(value) => {
                setCategory(value)
              }}
            />
          ) : (
            ''
          )}
          {category === 'Education & Books' ? (
            <DropdownSelect
              items={category === 'Education & Books' ? subcategory$[7].subcategories : []}
              value={subcategory$$ === '' ? 'Select Sub Category*' : subcategory$$}
              onChange={(value) => {
                setCategory(value)
              }}
            />
          ) : (
            ''
          )}
          {category === 'Local Manufacturers' ? (
            <DropdownSelect
              items={category === 'Local Manufacturers' ? subcategory$[8].subcategories : []}
              value={subcategory$$ === '' ? 'Select Sub Category*' : subcategory$$}
              onChange={(value) => {
                setCategory(value)
              }}
            />
          ) : (
            ''
          )}
          {category === 'PPE & Covid19 essentials services' ? (
            <DropdownSelect
              items={category === 'PPE & Covid19 essentials services' ? subcategory$[9].subcategories : []}
              value={subcategory$$ === '' ? 'Select Sub Category*' : subcategory$$}
              onChange={(value) => {
                setCategory(value)
              }}
            />
          ) : (
            ''
          )}
        </div>
        <div className={s.adLocation}>
          <DropdownSelect
            items={country}
            value={location === '' ? 'Select Country*' : location}
            onChange={(value) => {
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

        {/*step2 */}
        <div>
          {category === 'services' && (
            <>
              <TextField
                className={s.textField}
                label="Title*"
                fieldname={'title'}
                changefunction={onchange}
                // error={formError && formError.field_id === 'title' ? formError.message : ''}
              />
              <TextField
                className={s.textField}
                label="Company Name"
                fieldname={'company_name'}
                changefunction={onchange}
                // error={formError && formError.field_id === 'company_name' ? formError.message : ''}
              />
              {/* text area here */}
              <TextAreaField
                placeholder={'Description*'}
                label="Description*"
                textareaName="description"
                changefunction={onchange}
                // error={formError && formError.field_id === 'description' ? formError.message : ''}
              />
              <TextField
                className={s.textField}
                label="Price"
                fieldname={'saleprice'}
                changefunction={onchange}
                // error={formError && formError.field_id === 'price' ? formError.message : ''}
              />
              <div className="address">
                <p className={s.provideAd}>Please provide the address of your advert</p>
                <TextField
                  className={s.textField}
                  label="Province"
                  type="text"
                  fieldname={'province'}
                  changefunction={onchange}
                  // error={formError && formError.field_id === 'price' ? formError.message : ''}
                />
                <TextField
                  className={s.textField}
                  label="city"
                  type="text"
                  fieldname={'city'}
                  changefunction={onchange}
                  // error={formError && formError.field_id === 'price' ? formError.message : ''}
                />
              </div>
            </>
          )}
        </div>
        <div className={s.step2Form}>
          <div className={s.monetization}>
            <div className={s.titleMonetization}>
              <p>To Promote your ad</p>
              <p>
                Please, choose one of the following options then click submit, otherwise jump to
                button Submit for a free advert
              </p>
            </div>
            {sponsorships &&
              sponsorships.map((sponsorship) => {
                return (
                  <div
                    key={sponsorship.id}
                    className={s.field}
                    onClick={() => setadprice(sponsorship.price)}
                  >
                    <div className={s.subscriptionHead}>
                      <p className={s.subscriptionTitle}>{sponsorship.title}</p>
                      {adprice === sponsorship.price ? (
                        <img
                          src="./icons/selected-sponsorship.svg"
                          alt="alikah ads selected sponsorship"
                        />
                      ) : null}
                    </div>
                    <div className={s.subscriptionPackages}>
                      <div>
                        <p>{sponsorship.period}</p>
                      </div>
                      <p>Shs {sponsorship.price}</p>
                    </div>
                  </div>
                )
              })}
            <Button type="submit">Post Ad</Button>
            <p className={s.terms}>
              By clicking on Post Ad, you accept the Terms of Use, confirm that you will abide by
              the Safety Tips, and declare that this posting does not include any Prohibited Items.
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
export default StepForm1
