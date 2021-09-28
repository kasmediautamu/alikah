import React,{ useState } from 'react'
import Step1Form from './Step1'
import s from './CreateAd.module.scss'
import DatingForm from './Dating'
import DropdownSelect from '../FormFields/Select'
import categories from '../../../dummyData/categories.json'
import ServicesForm from './Services'
import EducationForm from './Education'
import FashionForm from './Fashion'
import ElectronicsForm from './Electronics'

const CreateAd = () => {
  const [form, setForm] = useState('')
  const categoryArray = categories.categories
  return (
    <div className={s.newAd}>
      <div className={s.newAdHeader}>
        <p>Create Your Ad</p>
      </div>
      <div>
      <DropdownSelect
            items={categoryArray }
            value={form === '' ? 'Select Category*' : form}
            onChange={(value) => {
              setForm(value)
            }}
            /*
             * render a city select depending on region chosen
             */
          />
      </div>
      <div className="content">
        {form === 'Dating' && <><DatingForm /></>}
        {form === 'Services' && <><ServicesForm /></>}
        {form === 'Vehicles' && <>vehicles form</>}
        {form === 'Fashion' && <><FashionForm /></>}
        {form === 'Jobs' && <>jobs form</>}
        {form === 'Electronics & Furniture' && <><ElectronicsForm /></>}
        {form === 'Education & Books' && <><EducationForm /></>}
        {form === 'Local Manufacturers' && <>manufacture form</>}
        {form === 'PPE & Covid19 essentials services' && <>ppe form</>}
        {form === 'Property' && <>property form</>}
      </div>
    </div>
  )
}

export default CreateAd
