import React, { useState } from 'react'
import Button from '../../FormFields/Button'
import DropdownSelect from '../../FormFields/Select'
import s from './Step1.module.scss'

const Step1Form = () => {
  const [category, setCategory] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

  const fileUploadHandler = (event) => {
		    setSelectedFile(event.target.files[0]);
		    setIsSelected(true);

	};
  return (
    <>
    <div className={s.catLoc}>
        <div className={s.adCategory}>
          <DropdownSelect
            items={['Farm & Machinery', 'Jobs', 'Vehicles']}
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
            items={['Central Region', 'Eastern Region', 'Northern Region']}
            value={location === '' ? 'Select Location*' : location}
            onChange={(value: string) => {
              setLocation(value)
            }}
            /*
             * render a city select depending on region chosen
             */
          />
        </div>
      </div>
    <form className={s.step1form}>

      {/* need to implement logic for multiple file uploads
      *https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
      */}
      <div className={s.adImages}>
          <p>Add Photo</p>
          <p>
            First picture is the title picture. Each picture shouldn't exceed 3MB. Supported formats
            are *.jpg, *.gif and *.png
          </p>
          <input type="file" name="file" onChange={fileUploadHandler}  accept="image/png, image/jpg, image/.gif" multiple/>
        </div>
        <Button type="submit"> Next </Button>
    </form>
    </>
  )
}

export default Step1Form
