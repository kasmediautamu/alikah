import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../../../../redux/store'
import { signIn } from '../../../../redux/Actions/auth'
import Cookies from 'js-cookie'
import axios from 'axios'
import DatePicker from 'react-datepicker'

// components
import Button from '../../FormFields/Button'
import DropdownSelect from '../../FormFields/Select'
import TextField from '../../FormFields/TextField'
import TextAreaField from '../../FormFields/Textarea'
// styles
import s from './Property.module.scss'
// locah data

import southafrica from '../../../../dummyData/countries/southafrica.json'
import sponsorships from '../../../../dummyData/sponsorships.json'
import property from '../../../../dummyData/subcategories/property.json'
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
  size:'',
  minimumNights:''
}

const PropertyForm = () => {
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
  const [dwellingType, setDwellingType] = useState<string>('')
  const [forSaleBy, setForSaleBy] = useState<string>('')
  const [forRentBy, setForRentBy] = useState<string>('')
  const [sharebasis, setShareBasis] = useState<string>('')
  const [bedrooms, setBedrooms] = useState<string>('')
  const [bathrooms, setBathrooms] = useState<string>('')
  const [smoking, setSmoking] = useState<string>('')
  const [parking, setParking] = useState<string>('')
  const [petFriendly, setPetFriendly] = useState<string>('')
  const [preferedgender, setPreferredGender] = useState<string>('')
  const [furnished, setFurnished] = useState<string>('')
  const [pricingType, setPricingType] = useState<string>('Amount')
  const [formData, setFormData] = useState(initialFormState)
  const [formError, setFormError] = useState(null)
  const [message, setMessage] = useState('')

  /**date picker */
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  /**images array */
  const propertyImages = [url, url1, url2]
  //userId: userInfo ? userInfo._id : null
  const submittedForm = {
    title: formData.title,
    userId: '125',
    subcategory: subcategory,
    availableFrom: startDate,
    availableTo: endDate,
    dwellingType: dwellingType,
    bedRooms: bedrooms,
    shareBasis: sharebasis,
    parking: parking,
    bathrooms: bathrooms,
    size: formData.size,
    petFriendly: petFriendly,
    smoking: smoking,
    prefferedGender: preferedgender,
    furnished: furnished,
    minimumNights: formData.minimumNights,
    forRentBy: forRentBy,
    forSaleBy: forSaleBy,
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
        console.log(propertyImages)
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
        console.log(propertyImages)
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
      const { data } = await axios.post('/api/property', {
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
          items={property.property}
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
        {/* dwelling type */}
        <div className={s.timelines}>
          <div className={s.selectfrom}>
            <p>Dwelling Type</p>
            <DropdownSelect
              items={property.dwellingType}
              value={dwellingType === '' ? 'Select Dwelling Type' : dwellingType}
              onChange={(value) => {
                setDwellingType(value)
              }}
            />
          </div>
        </div>
        {/* minimum nights */}
        <TextField
          className={s.textField}
          label="Minimun Nights"
          fieldname={'minimumNights'}
          placeholderText={'Enter minimum nights'}
          changefunction={onchange}
        />
        {/* seller or renter */}
        <div className={s.timelines}>
        <div className={s.selectfrom}>
            <p>For Sale By:</p>
            <DropdownSelect
              items={property.forSaleBy}
              value={forSaleBy === '' ? 'Select' : forSaleBy}
              onChange={(value) => {
                setForSaleBy(value)
              }}
            />
          </div>
          <div className={s.selectfrom}>
            <p>For Rent By:</p>
            <DropdownSelect
              items={property.forRentBy}
              value={forRentBy === '' ? 'Select' : forRentBy}
              onChange={(value) => {
                setForRentBy(value)
              }}
            />
          </div>
        </div>
        {/* prefferd gender */}
        <div className={s.timelines}>
        <div className={s.selectfrom}>
            <p>Preferred Gender:</p>
            <DropdownSelect
              items={property.prefferredGender}
              value={preferedgender === '' ? 'Select Gender' : preferedgender}
              onChange={(value) => {
                setPreferredGender(value)
              }}
            />
          </div>
          <div className={s.selectfrom}>
            <p>Is it Furnished?</p>
            <DropdownSelect
              items={property.furnished}
              value={furnished === '' ? 'Is it Furnished?' : furnished}
              onChange={(value) => {
                setFurnished(value)
              }}
            />
          </div>
        </div>
        {/* share basis */}
        <div className={s.timelines}>
        <div className={s.selectfrom}>
            <p>Share Basis:</p>
            <DropdownSelect
              items={property.sharebasis}
              value={sharebasis === '' ? 'Select Share Basis' : sharebasis}
              onChange={(value) => {
                setShareBasis(value)
              }}
            />
          </div>
        </div>
        {/* rooms */}
        <div className={s.timelines}>
        <div className={s.selectfrom}>
            <p>Number Of Bedrooms</p>
            <DropdownSelect
              items={property.bedrooms}
              value={bedrooms === '' ? 'Select Number Of Bed Rooms' : bedrooms}
              onChange={(value) => {
                setBedrooms(value)
              }}
            />
          </div>
          <div className={s.selectfrom}>
            <p>Number Of Bathrooms</p>
            <DropdownSelect
              items={property.bathrooms}
              value={bathrooms === '' ? 'Select Number Of Bed Rooms' : bathrooms}
              onChange={(value) => {
                setBathrooms(value)
              }}
            />
          </div>
          <div className={s.selectfrom}>
            <p>Parking</p>
            <DropdownSelect
              items={property.parking}
              value={parking === '' ? 'Select Parking' : parking}
              onChange={(value) => {
                setParking(value)
              }}
            />
          </div>
        </div>
        {/* pet friendly, smoking, */}
        <div className={s.timelines}>
        <div className={s.selectfrom}>
            <p>Is it Pet Friendly?</p>
            <DropdownSelect
              items={property.petFriendly}
              value={petFriendly === '' ? 'Is it Pet Friendly?' : petFriendly}
              onChange={(value) => {
                setPetFriendly(value)
              }}
            />
          </div>
          <div className={s.selectfrom}>
            <p>Do you allow Smoking?</p>
            <DropdownSelect
              items={property.smoking}
              value={smoking === '' ? 'Select here' : smoking}
              onChange={(value) => {
                setSmoking(value)
              }}
            />
          </div>
        </div>

        {/* datepicker */}
        <div className={s.timelines}>
          <div className={s.datefields}>
            <p>Available From</p>
            <DatePicker
              className={s.datepicker}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className={s.datefields}>
            <p>Available To</p>
            <DatePicker
              className={s.datepicker}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
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
          label="Size(sqm)*"
          fieldname={'size'}
          placeholderText={'Enter size of Property'}
          changefunction={onchange}
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
export default PropertyForm
