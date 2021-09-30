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
import s from './Vehicles.module.scss'
// local data
import southafrica from '../../../../dummyData/countries/southafrica.json'
import sponsorships from '../../../../dummyData/sponsorships.json'
import vehicles from '../../../../dummyData/subcategories/vehicles.json'
import ValidationMessage from '../../FormFields/Error'
// redux
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const initialFormState = {
  title: '',
  description: '',
  saleprice: '',
  province: '',
  city: '',
  phoneNumber: '',
  model: '',
  kilometers: '',
  engineDisplacement: '',
  year: '',
  color: '',
}

const VehiclesForm = () => {
  // useEffect(() => {
  //   if (!userInfo._id) {
  //     router.push('/login')
  //   }
  // }, [])
  const router = useRouter()
  const { redirect }: any = router.query

  /**redux */

  const userInfo = useAppSelector((state: any) => state.sign_in.userInfo)
  const dispatch = useDispatch()

  /**local state */

  const [image, setImage] = useState<any>('')
  const [url, setUrl] = useState<any>('')
  const [url1, setUrl1] = useState<any>('')
  const [url2, setUrl2] = useState<any>('')
  const [country, setCountry] = useState<string>('South Africa')
  const [province, setProvince] = useState<string>('')
  const [subscriptionType, setSubscriptionType] = useState<string>('Standard')
  const [promotionPrice, setPromotionPrice] = useState<Number>(0)
  const [subcategory, setSubCategory] = useState<string>('')
  const [condition, setCondition] = useState<string>('')
  const [forsaleBy, setForSaleBy] = useState<string>('')
  const [make, setMake] = useState<string>('')
  const [transmission, setTransmission] = useState<string>('')
  const [bodyType, setBodyType] = useState<string>('')
  const [fuelType, setFuelType] = useState<string>('')
  const [pricingType, setPricingType] = useState<string>('Amount')
  const [formData, setFormData] = useState(initialFormState)
  const [formError, setFormError] = useState(null)
  const [message, setMessage] = useState('')
  /**images array */
  const vehicleImages = [url, url1, url2]
  //userId: userInfo ? userInfo._id : null
  const submittedForm = {
    title: formData.title,
    userId: '125',
    subcategory: subcategory,
    //start
    condition: condition,
    forSaleBy: forsaleBy ,
    make: make ,
    model: formData.model,
    transmission: transmission,
    bodyType: bodyType,
    year: formData.year,
    kilometers: formData.kilometers,
    enginedisplacement: formData.engineDisplacement,
    colour: formData.color,
    fuelType: fuelType,
    //end
    description: formData.description,
    imageURL: [url, url1, url2],
    country: country,
    price: pricingType === 'Amount' ? formData.saleprice : pricingType,
    subscriptionType: subscriptionType,
    isPaid: promotionPrice > 0 ? true : false,
    subscriptionPrice: promotionPrice,
    isPublished: true,
    address: {
      province: province,
      city: formData.city,
      phoneNumber: formData.phoneNumber,
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
        console.log(vehicleImages)
      })
      .catch((err) => console.log(err))
  }
  const uploadImage1 = () => {
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
        setUrl1(data.url)
      })
      .catch((err) => console.log(err))
  }
  const uploadImage2 = () => {
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
        setUrl2(data.url)
        console.log(vehicleImages)
      })
      .catch((err) => console.log(err))
  }
  /*
   *validate form
   */
  const validateForm = () => {
    let error = {}
    if (formData.title === '') {
      error = {
        field_id: 'title',
        message: 'Title is required',
      }
      return error
    }
    if (formData.description === '') {
      error = {
        field_id: 'description',
        message: 'Advert Description is required',
      }
      return error
    }
    if (formData.phoneNumber === '') {
      error = {
        field_id: 'phoneNumber',
        message: 'Provide Phone Number To Reach You',
      }
      return error
    }
    if (formData.city === '') {
      error = {
        field_id: 'city',
        message: 'City is required',
      }
      return error
    }
    if (formData.saleprice === '') {
      error = {
        field_id: 'saleprice',
        message: 'Price is required',
      }
      return error
    }
    if (url == '') {
      error = {
        field_id: 'images',
        message: 'Upload At least One Image',
      }
      return error
    }
    if (province === '') {
      error = {
        field_id: 'province',
        message: 'Province is required',
      }
      return error
    }
    return error
  }
  //submit form
  const onsubmit = async (e: any) => {
    e.preventDefault()
    setFormError(null)
    setFormData({ ...formData })
    let error = validateForm()
    if (error) {
      setFormError(error)
      setFormData({ ...formData })
    } else {
      setFormData({ ...formData })
    }

    try {
      const { data } = await axios.post('/api/vehicles', {
        ...submittedForm,
      })
      // console.log(data)
      if (data) {
        setMessage('Your Ad has been posted')
      } else {
        setMessage('Something is Wrong, Please Again')
      }
      router.push(redirect || '/account')
    } catch (err) {
      // enqueueSnackbar(getError(err), { variant: 'error' });
      console.log(err)
    }
  }
  const onchange = (e) => {
    let target = e.target
    setFormData({ ...formData, [target.name]: target.value })
  }
  return (
    <div>
      <div className={s.adImages}>
        <p>Add Photo</p>
        <p>
          First picture is the title picture. Each picture shouldn't exceed 3MB. Supported formats
          are *.jpg, *.gif and *.png
        </p>
        <div className={s.imagegroup}>
          <div className={s.imagefield}>
            <input
              type="file"
              accept="image/.png,image/.jpg, image/.gif"
              onChange={(e) => setImage(e.target.files[0])}
            ></input>
            <Button className={s.uploadbutton} onClick={uploadImage}>
              Upload Image 1
            </Button>
            {url && (
              <>
                <img src="./icons/list-check.svg" />
              </>
            )}
          </div>
          <div className={s.imagefield}>
            <input
              type="file"
              accept="image/.png,image/.jpg, image/.gif"
              onChange={(e) => setImage(e.target.files[0])}
            ></input>
            <Button className={s.uploadbutton} onClick={uploadImage1}>
              Upload Image 2
            </Button>
            {url1 && (
              <>
                <img src="./icons/list-check.svg" />
              </>
            )}
          </div>
          <div className={s.imagefield}>
            <input
              type="file"
              accept="image/.png,image/.jpg, image/.gif"
              onChange={(e) => setImage(e.target.files[0])}
            ></input>
            <Button className={s.uploadbutton} onClick={uploadImage2}>
              Upload Image 3
            </Button>
            {url2 && (
              <>
                <img src="./icons/list-check.svg" />
              </>
            )}
          </div>
          {formError && formError.field_id === 'images' ? (
            <ValidationMessage>{formError.message}</ValidationMessage>
          ) : (
            ''
          )}
        </div>
      </div>
      <form onSubmit={onsubmit}>
        {/* sub category */}
        {message && <small className={s.postalert}>{message}</small>}
        <DropdownSelect
          items={vehicles.vehicles}
          value={subcategory === '' ? 'Select Sub Category*' : subcategory}
          onChange={(value) => {
            setSubCategory(value)
          }}
        />
        {formError && formError.field_id === 'subcategory' ? (
          <ValidationMessage>{formError.message}</ValidationMessage>
        ) : (
          ''
        )}
        <TextField
          className={s.textField}
          label="Title*"
          fieldname={'title'}
          placeholderText={'Enter Advert Title'}
          changefunction={onchange}
          error={formError && formError.field_id === 'title' ? formError.message : ''}
        />
        <div className={s.fieldgroup}>
          <div className={s.fields}>
            <p>Condition</p>
            <DropdownSelect
              items={vehicles.condition}
              value={condition === '' ? 'Select Condition' : condition}
              onChange={(value: string) => {
                setCondition(value)
              }}
            />
          </div>
          <div className={s.fields}>
            <p>For Sale By</p>
            <DropdownSelect
              items={vehicles.forsaleBy}
              value={forsaleBy === '' ? 'Select Seller' : forsaleBy}
              onChange={(value: string) => {
                setForSaleBy(value)
              }}
            />
          </div>
        </div>
        {subcategory === 'Auto Parts & Accessories' || subcategory ==='Motorcycle Parts & Accessories' ? (
          ''
        ) : (
          <>
            <div className={s.fieldgroup}>
              <div className={s.fields}>
                <p>Make</p>
                <DropdownSelect
                  items={subcategory === 'Motorcycles & Scooters' ?  vehicles.motorsmake :vehicles.make}
                  value={make === '' ? 'Select Make' : make}
                  onChange={(value: string) => {
                    setMake(value)
                  }}
                />
              </div>
              <div className={s.fields}>
                <TextField
                  className={s.textField}
                  label="Model"
                  fieldname={'model'}
                  placeholderText={'Enter model here'}
                  changefunction={onchange}
                />
              </div>
            </div>
            <div className={s.fieldgroup}>
              <div className={s.fields}>
                <p>Transmission</p>
                <DropdownSelect
                  items={vehicles.transmission}
                  value={transmission === '' ? 'Select Transmission' : transmission}
                  onChange={(value: string) => {
                    setTransmission(value)
                  }}
                />
              </div>
              <div className={s.fields}>
                <p>Body Type</p>
                <DropdownSelect
                  items={vehicles.bodyType}
                  value={bodyType === '' ? 'Select Body Type' : bodyType}
                  onChange={(value: string) => {
                    setBodyType(value)
                  }}
                />
              </div>
            </div>
            <div className={s.fieldgroup}>
              <div className={s.fields}>
                <TextField
                  className={s.textField}
                  label="Year"
                  fieldname={'year'}
                  placeholderText={'Enter the year it was made'}
                  changefunction={onchange}
                />
              </div>
              <div className={s.fields}>
                <TextField
                  className={s.textField}
                  label="Kilometers"
                  fieldname={'kilometer'}
                  placeholderText={'Enter kilometers covered'}
                  changefunction={onchange}
                />
              </div>
              <div className={s.fields}>
                {subcategory === 'Motorcycles & Scooters' ? (
                  <TextField
                    className={s.textField}
                    label="Engine Displacement (Optional)"
                    fieldname={'engineDisplacement'}
                    placeholderText={'Enter Engine Displacement'}
                    changefunction={onchange}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </>
        )}

        <div className={s.fieldgroup}>
          <div className={s.fields}>
            <TextField
              className={s.textField}
              label="Color"
              fieldname={'color'}
              placeholderText={'Enter Color here'}
              changefunction={onchange}
            />
          </div>

          <div className={s.fields}>
            <p>Fuel Type</p>
            <DropdownSelect
              items={vehicles.fuelType}
              value={fuelType === '' ? 'Select Fuel Type' : fuelType}
              onChange={(value: string) => {
                setFuelType(value)
              }}
            />
          </div>
        </div>
        <TextAreaField
          placeholder={'Description*'}
          label="Description*"
          textareaName="description"
          changefunction={onchange}
          error={formError && formError.field_id === 'description' ? formError.message : ''}
        />
        <TextField
          className={s.textField}
          label="Phone Number*"
          fieldname={'phoneNumber'}
          placeholderText={'Enter Phone Number To Reach You'}
          changefunction={onchange}
          error={formError && formError.field_id === 'phoneNumber' ? formError.message : ''}
        />

        {/* country, provinces, cities */}
        <div className={s.addressgroup}>
          <div className={s.stretchright}>
            <p>Country</p>
            <DropdownSelect
              items={['South Africa', 'Swaziland', 'Namibia', 'Zimbabwe', 'Malawi', 'Botswana']}
              value={country === '' ? 'Select Country' : country}
              onChange={(value: string) => {
                setCountry(value)
              }}
            />
          </div>
          <div className={s.stretchright}>
            <p>Province</p>
            <DropdownSelect
              items={southafrica.Provinces}
              value={province === '' ? 'Select Province' : province}
              onChange={(value: string) => {
                setProvince(value)
              }}
            />
          </div>
          {formError && formError.field_id === 'province' ? (
            <ValidationMessage>{formError.message}</ValidationMessage>
          ) : (
            ''
          )}
        </div>
        <div className={s.citygroup}>
          <TextField
            className={s.textField}
            label="City*"
            fieldname={'city'}
            placeholderText={`Enter Your City Here`}
            changefunction={onchange}
            error={formError && formError.field_id === 'city' ? formError.message : ''}
          />
        </div>
        <div className={s.pricing}>
          <p className={s.heading}>Price</p>
          <DropdownSelect
            items={['Amount', 'Negotiable', 'Free', 'Swap/Trade']}
            value={pricingType === '' ? 'Amount' : pricingType}
            onChange={(value) => {
              setPricingType(value)
            }}
            /*
             * render a city select depending on region chosen
             */
          />
          {pricingType === 'Amount' ? (
            <TextField
              className={s.textField}
              label="Price(R)*"
              fieldname={'saleprice'}
              placeholderText={'Enter Your Price'}
              changefunction={onchange}
              error={formError && formError.field_id === 'saleprice' ? formError.message : ''}
            />
          ) : (
            <>
              <p className={s.selectedPricing}>{pricingType}</p>
              <img src="./icons/list-check.svg" />
            </>
          )}
        </div>
        <div className={s.step2Form}>
          <div className={s.monetization}>
            <div className={s.titleMonetization}>
              <p>To Promote your ad, choose one of the following packages</p>
              <p>To post free Ad Click on Post Ad button</p>
            </div>
            {sponsorships &&
              sponsorships.map((sponsorship) => {
                return (
                  <div
                    key={sponsorship.id}
                    className={s.field}
                    onClick={() => setPromotionPrice(sponsorship.price)}
                  >
                    <div className={s.subscriptionHead}>
                      <p className={s.subscriptionTitle}>{sponsorship.title}</p>
                      {promotionPrice === sponsorship.price ? (
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
                      <p>R {sponsorship.price}</p>
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
export default VehiclesForm
