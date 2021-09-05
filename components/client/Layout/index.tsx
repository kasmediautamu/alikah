import Nav from '../Nav'
import Footer from '../Footer'
import s from './Layout.module.scss'
import Banner from '../Banner'
import Category from '../PopularCategories'
const ClientLayout = ({ children }) => {
return (
    <div className={s.LayoutWrapper}>
        <Nav />
        <Banner />
        <Category />
        <div>
            {children}
        </div>
        <Footer />
    </div>
)

}

export default ClientLayout
