import s from './CategoryList.module.scss'
import categories from '../../../dummyData/categories.json'
import Link from 'next/link'
const Navigation = () => {
  const category$ = categories.links
  console.log(category$)
  return (
    <div className={s.catwrapper}>
        <p className={s.title}>Browse By Category</p>
        {category$ && category$.map((category)=>{
            return(
              <Link href={category.link}>
              <div className={s.navTitle} key={category.title}>{category.title}</div>
              </Link>
            )
        })}
    </div>
  )
}

export default Navigation
