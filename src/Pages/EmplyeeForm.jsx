import {styled} from 'styled-components';
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useState } from 'react';

export const EmployeeForm =()=>{
    const [comapnyName,setCompanyName] = useState('');
    const [fName,setFName] = useState('');
    const [lName,setLName] = useState('');
    const [number,setNumber] = useState('');
    const [email,setEmail] = useState('');
    const [jobTitle,setJobTitle] = useState('');
    const [dJobTitle,setDJobTitle] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setCPassword] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const employerData={
            comapnyName,fName,lName,number,email,jobTitle,dJobTitle,password,confirmPassword
        }
        console.log(employerData)
    }   
    return(
        <>
            <Form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <input type='text' name='companyName' 
                           placeholder='comany name' required autoComplete='off' 
                           className='inpt'
                            onChange={(e)=>setCompanyName(e.target.value)}
                           />
                    <div className='name-div'>
                        <div>
                            <input type='text' name='fNmae' 
                                   placeholder='first name' autoComplete='off' 
                                   className='inpt'
                                   onChange={(e)=>setFName(e.target.value)}
                                   />
                        </div>
                        <div>
                             <input type='text' name='lNmae' 
                                    placeholder='last name' autoComplete='off' 
                                    className='inpt'
                                    onChange={(e)=>setLName(e.target.value)}
                                    />
                        </div>
                    </div>
                    <input type='email' name='email' 
                           placeholder='work email address' 
                           required autoComplete='off' className='inpt'
                           onChange={(e)=>setNumber(e.target.value)}
                           />
                    <input type='number' name='number' 
                           placeholder='phone number' required autoComplete='off' 
                           className='inpt'
                           onChange={(e)=>setEmail(e.target.value)}
                           />
                    <div className='icon-div'>
                    <input type='text' name='title' 
                           placeholder='your job title' required autoComplete='off' 
                           className='inpt'
                           onChange={(e)=>setJobTitle(e.target.value)}
                           />
                           <AiOutlineExclamationCircle className='icon job-icon'/>
                    </div>       
                    <input type='text' name='title' 
                           placeholder='enter the job title you desire to fill here' 
                           required autoComplete='off' className='inpt'
                           onChange={(e)=>setDJobTitle(e.target.value)}
                           />
                    <div className='name-div'>
                        <div className='icon-div'>
                            <input type='password' name='userPassword' 
                                   placeholder='password' required autoComplete='off' 
                                   className='inpt'
                                   onChange={(e)=>setPassword(e.target.value)}
                                   />
                            <BsEye className='icon'/>
                        </div>
                        <div className='icon-div'>
                            <input type='password' name='confirmPassword' 
                                   placeholder='password confirmation' required 
                                   autoComplete='off' className='inpt'
                                   onChange={(e)=>setCPassword(e.target.value)}
                                   />
                            <BsEyeSlash className='icon'/>
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
    padding: 1.2rem;
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
    top:1.2rem;
    right:2rem;
    font-size:1.5rem;
    color:#808080;
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
    font-size:1.1rem;
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

@media (max-width:705px){
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