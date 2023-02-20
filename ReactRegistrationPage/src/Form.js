import { useState } from 'react';
import Select from 'react-select';
import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Textarea } from 'evergreen-ui'
import { useHistory } from "react-router-dom";
  

export default function Form() {

// States for registration
const [firstname, setFirstName] = useState('');
const [lastname, setLastName] = useState('');
const [aboutyourself, setAboutYourself] = useState('');
const [gender, setGender] = useState('');
const [skills, setSkills] = useState('');
//const [link, setLink] = useState('');
const [image, setImage] = useState('');
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const options = ['Java','React','NodeJS','.net']

// const ageData = [
//     {
//       value: 1,
//       label: "18-20"
//     },
//     {
//       value: 2,
//       label: "20-25"
//     },
//     {
//       value: 3,
//       label: "25-30"
//     }
    
//   ];
 
//   const [age, setAge] = useState('');

 
  
//   const handleAge = (e) => {
// 	setAge(e.target.value);
// 	setSubmitted(false);
// };
 

const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const handleFirstName = (e) => {
	setFirstName(e.target.value);
	setSubmitted(false);
};

const handleLastName = (e) => {
	setLastName(e.target.value);
	setSubmitted(false);
};

// const handleAboutYourself = (e) => {
// 	setAboutYourself(e.target.value);
// 	setSubmitted(false);
// };

const handleGender = (e) => {
	setGender(e.target.value);
	setSubmitted(false);
};
// const handleSkills = (e) => {
// 	setSkills(e.target.value);
// 	setSubmitted(false);
// };
const handleImage = (e) => {
	setImage(e.target.value);
	setSubmitted(false);
};
// const handleLink = (e) => {
// 	setLink(e.target.value);
// 	setSubmitted(false);
// };

// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (firstname === '' || lastname === '' || gender === ''|| skills === '') {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
// 	setError(false);
// 	}
// };
const history = useHistory();
const handleSubmit = (event) => {
      event.preventDefault();
      // Your form action goes here
      //history.push("/profile");
	    window.location.href = "/profile";
    };

const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {firstname} successfully registered!!</h1>
	</div>
	);
};

const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1 class="heading">User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	  <form onSubmit= {handleSubmit}> 
      <div className='container'> 
		{/* Labels and inputs for form data */}
		<label className="label">FirstName</label>
		<input onChange={handleFirstName} className="input"
		value={firstname} type="text" />

		<label className="label">LastName</label>
		<input onChange={handleLastName} className="input"
		value={lastname} type="text" />

		
      <h4>About Yourself</h4>
      <Textarea
        onChange={(e) => setAboutYourself(e.target.value)}
        placeholder="Tell me about yourself"
      /> <br></br>
      
  
		{/* <input onChange={handleAge} className="input"
		value={age} type="text" /> */}
        {/* <Select
        placeholder="Select Option"
        value={age} // set selected value
        options={ageData} // set list of the data
        onChange={handleAge} // assign onChange function
      />
      {age && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <b>Selected Option</b><br />
        <div style={{ marginTop: 10 }}><b>Label: </b> {age.label}</div>
        <div><b>Value: </b> {age.value}</div>
      </div>} */}
      
<label className="label">Gender</label><br></br>
		<input onChange={handleGender} className="input"
		value="Male" type="radio" checked = "true" id="male" name="gender"/>Male<br></br>
        <input onChange={handleGender} className="input"
		value="Female" type="radio" id="female" name="gender"/>Female<br></br>
        <input onChange={handleGender} className="input"
		value="Other" type="radio"id="other" name="gender"/>Other<br></br>

<label className="label">Skills</label>
		
<Autocomplete
        multiple
        id="checkbox"
        options={options}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </React.Fragment>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined"
            label="Enter your skills"
            placeholder="skills" />
        )}
      />

        <label className="label">Profile Picture</label>
		<input onChange={handleImage} className="input"
		value={image} type="file" />
        <p> <a href="login.js">Already have an account?</a></p>
        <a href="login.js">Forgot Password?</a>
        

<br></br>
		<button  className="registerbtn" type="submit">
                
		Submit
		</button>
        </div>
	</form>
    
	</div>
);
}
