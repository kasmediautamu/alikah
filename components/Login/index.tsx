import React from "react";
import Link from 'next/link'
import TextField from "../FormFields/TextField";
import CheckBox from "../FormFields/CheckBox";
import s from "./Login.module.scss";
import Button from "../FormFields/Button";

const Auth = () => {
  return (
    <div className={s.auth}>
      <form className={s.form}>
        <p className={s.title}>Log in</p>
        <div className={s.field}>
          <TextField label="Email/Username" />
        </div>
        <div className={s.field}>
          <TextField type="password" label="Password" />
        </div>
        <div className={s.field}>
          <TextField type="password" label="Password" />
          <CheckBox label="stay logged in" />
        </div>
        <div className="registrationLinkBtn">
            <Link href='/my-account'><Button onClick={()=>{console.log('logged in')}}>Login here</Button></Link>
        </div>
      </form>
      <div className={s.registrationLink}>
        <p className="registrationLinkTitle">First Time On Alikah</p>
        <p className="registrationLinkTitle">
          You can take advantage of Alikah features by Managing and Editing Ads
          easily, Read and reply your mesages any time. And By access your best ads
          anytime wherever you are. All these services are free at Alikah.
        </p>
        <div className="registrationLinkBtn">
            <Link href='/register'><Button>Register Here</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
