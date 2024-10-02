import {styled} from 'styled-components';
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { useState } from 'react';

export const EmployeeForm =()=>{
    const [passwordType,setPasswordType] = useState('password');
    const [confirmPasswordType,setConfirmPasswordType] = useState('password');
    const [show,setShow] = useState('true');

    const toggleIcon=()=>{
        setShow(!show);
    }
  
    const [EmployerData,setEmployerData] = useState({
        companyName:'',
        fName:'',
        lName:'',
        number:'',
        email:'',
        jobTitle:'',
        dJobTitle:'',
        password:'',
        confirmPassword:'',
    });
    
    const handleInput=(e)=>{
        const { name,value } = e.target;
        setEmployerData((prev)=>({ 
            ...prev, 
            [name]:value,
        }))
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
        setConfirmPasswordType(confirmPasswordType === 'password' ? 'text' : 'password');
    }   
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(EmployerData)
    }   
    return(
        <>
        <div>
            <Form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <input type='text' name='companyName' 
                           placeholder='comany name' required 
                           className='inpt'
                            value={EmployerData.companyName}
                            onChange={handleInput}
                           />
                    <div className='name-div'>
                        <div>
                            <input type='text' name='fName' 
                                   placeholder='first name' autoComplete='off' 
                                   className='inpt'
                                   onChange={handleInput}
                                   value={EmployerData.fName}
                                   />
                        </div>
                        <div>
                             <input type='text' name='lName' 
                                    placeholder='last name' autoComplete='off' 
                                    className='inpt'
                                    onChange={handleInput}
                                    value={EmployerData.lName}
                                    />
                        </div>
                    </div>
                    <input type='email' name='email' 
                           placeholder='work email address' 
                           required autoComplete='off' className='inpt'
                           onChange={handleInput}
                           value={EmployerData.email}
                           />
                    <input type='number' name='number' 
                           placeholder='phone number' required autoComplete='off' 
                           className='inpt'
                           onChange={handleInput}
                           value={EmployerData.number}
                           />
                    <input type='text' name='jobTitle' 
                           placeholder='your job title' required autoComplete='off' 
                           className='inpt'
                           onChange={handleInput}
                           value={EmployerData.jobTitle}
                           />
                    <input type='text' name='dJobTitle' 
                           placeholder='enter the job title you desire to fill here' 
                           required autoComplete='off' className='inpt'
                           onChange={handleInput}
                           value={EmployerData.dJobTitle}
                           />
                    <div className='name-div'>
                        <div className='icon-div'>
                            <input type= {show ?  'password' : 'text'}
                                   name='password' 
                                   placeholder='password' required autoComplete='off' 
                                   className='inpt'
                                   onChange={handleInput}
                                   value={EmployerData.password}   

                                   />     
                             <span onClick={toggleIcon}>     
                            {show ? <BsEyeSlash className='icon'/> : <BsEye className='icon'/>}       
                            </span>
                        </div>
                        <div className='icon-div' >
                            <input type= {show ? 'password': 'text'} 
                            name='confirmPassword' 
                                   placeholder='password confirmation' required 
                                   autoComplete='off' className='inpt'
                                   value={EmployerData.confirmPassword}
                                   onChange={handleInput}
                                   />
                             <span onClick={toggleIcon}>     
                            {show ? <BsEyeSlash className='icon'/> : <BsEye className='icon'/>}       
                            </span>
                        </div>
                    </div>
                    <div className='text-container'>
                        <div className='checkboxContainer'>
                            <div className='checkBox'>
                                <input type='checkbox'/> 
                                <label>Subscribe to Newsletter</label>
                            </div>
                            <div className='checkBox'>
                                <input type='checkbox'/> 
                                <label>I accept Terms of Us</label>
                            </div>
                        </div>
                        <div className='signinContainer'>
                            <CiUser className='icon userIcon'/>
                            <p>have account? <span> sign in</span></p>
                        </div>
                    </div>
                    <div className='form-btn'>
                        <button className='btn'>submit</button>
                    </div>
                </div>
            </Form>
        </div>
        </>
    );
}
const Form = styled.form`
    .form-container{
        display:flex;
        justify-content: center;
        align-item:center;
        flex-direction:column;
        gap:1.5rem; 
        margin-block:3rem;
    }
.inpt{
     padding: 1.5rem;
    border: .1rem solid #c9c9c9;
    border-radius: .5rem;
    font-size: 1rem;
    text-transform:capitalize;
    outline: none;
    background: #f2f4f7;
    width: 100%;
}
.name-div{
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap:1rem;
}
.icon-div{
    position: relative; 
}
.icon{
    position:absolute;
    top:1.5rem;
    right:2rem;
    font-size:1.5rem;
    color:#808080;
}
.icon .ShowIcon{
    color:#ed7402;
}
.form-btn{
    text-align:center;
    padding-block:1rem;
}
.form-btn .btn{
    text-transform:uppercase;
    padding:1rem 2rem;
    color:#fff;
    background:#db7602;
    border:none;
    outline:none;
    font-weight:500;
    border-radius:.5rem;
    letter-spacing:.1rem;
    cursor:pointer;
}
.text-container{ 
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
}
.checkboxContainer{
    display:flex;
    justify-content:center;
    align-item:center;
    flex-direction:column;
    gap:1rem;
    padding-block:.5rem;
    font-size:1rem;
}
.checkBox{
    display:flex;
    gap:1rem;  
}
.signinContainer{
    position: relative;
}
.userIcon{
    position: absolute;
    top:.3rem;
    right:13rem;
    color: #2e2c2b;
}
.signinContainer p{
    font-size:1.1rem;
    padding:.5rem 1rem;
    text-align:right;
}

${'' /* responsive code */}

@media (max-width:723px){
    .signinContainer p{
    text-align:left;
    margin-left:1rem;
}
.userIcon{
    top:.3rem;
    left:0;
    color: #2e2c2b;
}
.text-container{
    display:grid;
    grid-gap:1rem;
}
}
`;