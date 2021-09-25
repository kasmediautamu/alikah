import CategoryItem from './CategoryItem'
import s from './CategoryList.module.scss'

export const NavItems = [
    {
        name: 'Education',
        links: [
            { title: 'University', to: '/category' },
            { title: 'High School', to: '/category' },
            { title: 'Techinical', to: '#' },
            { title: 'Nursery School', to: '#' },
        ],
        open: false,
      },
      {
        name: 'Personals',
        links: [
            { title: 'Men Interested In women', to: '#' },
            { title: 'Women Interested In Men', to: '#' },
            { title: 'Men Interested In Men', to: '#' },
            { title: 'Women Interested In Women', to: '#' },
            { title: 'Couples Interested In Couples', to: '#' },
            { title: 'Couples Interested In Singles', to: '#' },
            { title: 'Singles Interested In Couples', to: '#' },
            { title: 'Casual Encounters', to: '#' },

        ],
        open: false,
      },
      {
        name: 'Events',
        links: [
            { title: 'Music Concerts', to: '#' },
            { title: 'Football', to: '#' },
            { title: 'Weddings', to: '#' },
            { title: 'Birthdays', to: '#' },
            { title: 'Baby Showers', to: '#' },
            { title: 'Graduation', to: '#' },
            { title: 'Funerals', to: '#' },

        ],
        open: false,
      },
    {
    name: 'Vehicles',
    links: [
        { title: 'Mercedez Benz', to: '#' },
        { title: 'Mitsubishi', to: '#' },
    ],
    open: false,
  },
  {
    name: 'Property',
    links: [
      { title: 'Land', to: '#' },
      { title: 'Apartments', to: '#' },
      { title: 'Hotels', to: '#' },
    ],
    open: false,
  },
  {
    name: 'Fashion',
    links: [
      { title: 'Suits', to: '#' },
      { title: 'Modelling', to: '#' },
      { title: 'Baby Clothes', to: '#' },
      { title: 'Lady Clothes', to: '#' },
      { title: 'Lady Office Wear', to: '#' },
      { title: 'Gents Office wear', to: '#' },
      { title: 'Sports wear', to: '#' },
    ],
    open: false,
  },
  {
    name: 'Mobile & Gadgets',
    links: [
      { title: 'Nokia', to: '#' },
      { title: 'Techno', to: '#' },
      { title: 'Iphone', to: '#' },
      { title: 'Tablets', to: '#' },
    ],
    open: false,
  },
  {
    name: 'Jobs',
    links: [
      { title: 'Lawyer', to: '#' },
      { title: 'Secretary', to: '#' },
      { title: 'NGO/NonProfits', to: '#' },
      { title: 'Transport', to: '#' },
      { title: 'House Help', to: '#' },
    ],
    open: false,
  },
  {
    name: 'Home Appliances',
    links: [
      { title: 'Kitchen', to: '#' },
      { title: 'Bathrooms', to: '#' },
      { title: 'TVs', to: '#' },
      { title: 'Furniture', to: '#' },
      { title: 'Bedroom', to: '#' },
    ],
    open: false,
  },
  {
    name: 'Sports & Outdoor',
    links: [
      { title: 'Basket ball', to: '#' },
      { title: 'Golf', to: '#' },
      { title: 'Football', to: '#' },
      { title: 'Hockey', to: '#' },
      { title: 'Table Tenis', to: '#' },
    ],
    open: false,
  },
]
const Navigation = () => {
  return (
    <div className="nav">
        <p className={s.navTitle}>Browse Categories</p>
      <div className="nav__main">
        {NavItems.map((navItem, index) => {
          return <CategoryItem key={index} items={navItem} />
        })}
      </div>
    </div>
  )
}

export default Navigation
