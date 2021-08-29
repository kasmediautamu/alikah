import Nav from '../Nav'
import Footer from '../Footer'
import s from './Layout.module.scss'
import Banner from '../Banner'
const Layout = ({ children }) => {
return (
    <div className={s.LayoutWrapper}>
        <Nav />
        <Banner />
        <div>
            {children}
        </div>
        <Footer />
    </div>
)

}

export default Layout