import TextField from '../FormFields/TextField'
import Button from '../../components/FormFields/Button'
import s from './Registration.module.scss'

const Registration = () => {
   return(
    <div className={s.registration}>
        <div className={s.registrationTitle}>
            <p className={s.title}>Register on Alikah Ads for Free </p>
            <p className={s.description}>Enter your Email Address below</p>
        </div>
        <form action="" className={s.formRegistration}>
                <TextField type='text' label='Email'/>
                <div className={s.submitBtn}>
                <Button>Register Here</Button>
                </div>
        </form>
        <div className={s.googleApi}>
            <div className={s.separator}>OR</div>
            <div className={s.gLoginBtn}><Button variant="outline"><img src="./icons/alikah-ads-gmail-icon.svg" alt="alikah ads sign in with gmail" /> Login with gmail</Button></div>
            <p className={s.modalTrigger}>what does this mean?</p>
        </div>
    </div>
   )
}

export default Registration