import { styled } from "styled-components";
import { EmployeeForm } from "./form";
// import { EmployeeForm } from "./EmplyeeForm";

export const RegistrationPage=()=>{
    return (
        <>
            <Section className="registration-container">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>create your <span>free</span> employee profile</p>
                <EmployeeForm/>
            </Section>
        </>
    );
}
const Section = styled.div`
background:#f9f9f9;
border-radius:.5rem;
max-width:50%;
margin: .5rem auto;
padding:1rem 4rem;
display:flex;
justify-content:center;
align-item:center;
flex-direction:column;
gap:1.5rem; 
h2{
    font-size:2.5rem;
    text-align:center;
    font-family: "Old Standard TT", serif;
}
p{
    text-align:center;
    font-size:1.4rem;
    text-transform:capitalize;
    word-spacing:.1rem;
    color:#808080;
}

${'' /* responsive code */}

@media (max-width:998px){
    max-width:70%;
}
@media (max-width:768px){
    max-width:80%;
    h2{
    font-size:2.4rem;
    }
}
@media (max-width:464px){
    max-width:100%;
    h2{
    font-size:2.2rem;
    }
}
`;