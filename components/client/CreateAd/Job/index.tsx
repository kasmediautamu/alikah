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
import s from './Job.module.scss'
// locah data
import southafrica from '../../../../dummyData/countries/southafrica.json'
import sponsorships from '../../../../dummyData/sponsorships.json'
import job from '../../../../dummyData/subcategories/job.json'
import ValidationMessage from '../../FormFields/Error'
// redux
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const initialFormState = {
  title: '',
  description: '',
  saleprice: '',
  province: '',
  city: '',
  companyName:'',
  phoneNumber:''
}

const JobForm = () => {
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
  const [jobType, setJobType] = useState<string>('')
  const [advertisedBy, setAdvertisedBy] = useState<string>('')
  const [employmentEquity, setEmploymentEquity] = useState<string>('')
  const [pricingType, setPricingType] = useState<string>('Amount')
  const [formData, setFormData] = useState(initialFormState)
  const [formError, setFormError] = useState(null)
  const [message, setMessage] = useState('')
  /**images array */
  const jobImages = [url, url1, url2]
  //userId: userInfo ? userInfo._id : null
  const submittedForm = {
    title: formData.title,
    userId: '125',
    jobType: jobType,
    advertisedBy:advertisedBy,
    companyName:formData.companyName,
    employmentEquity:employmentEquity,
    subcategory: subcategory,
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
        console.log(jobImages)
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
        console.log(jobImages)
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
    if (formData.city === '') {
      error = {
        field_id: 'city',
        message: 'City is required',
      }
      return error
    }
    if (formData.phoneNumber === '') {
      error = {
        field_id: 'phoneNumber',
        message: 'Provide A Phone Number To Reach You',
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
      const { data } = await axios.post('/api/job', {
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
          items={job.jobs}
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
        <div className={s.selection}>
          <p className={s.selectiontitle}>
            Job Type
          </p>
        <div className={s.content}>
        <DropdownSelect
          items={job.jobType}
          value={jobType === '' ? 'Select Job Type*' : jobType}
          onChange={(value) => {
            setJobType(value)
          }}
        />
        </div>
        </div>
        <div className={s.selection}>
          <p className={s.selectiontitle}>
            Advertised By
          </p>
          <div className={s.content}>
        <DropdownSelect
          items={job.advertisedBy}
          value={advertisedBy === '' ? 'Advertised By*' : advertisedBy}
          onChange={(value) => {
            setAdvertisedBy(value)
          }}
        />
        </div>

        </div>
        <TextField
          className={s.textField}
          label="Company Name"
          fieldname={'companyName'}
          placeholderText={'Enter Company Name'}
          changefunction={onchange}
        />
         <div className={s.selection}>
          <p className={s.selectiontitle}>
            Employment Equity
          </p>
          <div className={s.content}>
        <DropdownSelect
          items={job.employmentEquity}
          value={employmentEquity === '' ? 'Select Employment Equity' : employmentEquity}
          onChange={(value) => {
            setEmploymentEquity(value)
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
export default JobForm
