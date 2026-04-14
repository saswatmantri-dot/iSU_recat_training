import React, { useState } from 'react'
import UserInputBox from '../common/UserInputBox';
import CustomButton from '../common/CustomButton';
import AdminWelcome from '../common/AdminWelcome';
import NormalUserWelcome from '../common/NormalUserWelcome';
import SupportPage from '../common/SupportPage';

function MainPAge() {

const [nameVal, namePointer] = useState("");
const [roleVal, rolePointer] = useState("");
const [statusVal, statusPointer] = useState("");
const [mainPageVal, mainPagePointer] = useState("Please enter details");

let user = { name : nameVal, role : roleVal, status : statusVal }

const takeName = (event) => {
    namePointer(event.target.value);
  };

  const takeRole = (event) => {
    rolePointer(event.target.value);
  };

  const takeStatus = (event) => {
    statusPointer(event.target.value);
  };

  const onClick = (user) => {

    if(user.status==="recovery") {
    mainPagePointer(SupportPage)
    }
    else{
    if(user.role==="Admin") {
        mainPagePointer(AdminWelcome)
    }else{
        mainPagePointer(NormalUserWelcome)
    }
}
  };

  return (
    <div className="mainArea" >
          {mainPageVal}  
        
    <div className="nameInputBox">
        <UserInputBox inputText={nameVal} trigger={takeName} displayText="Enter name"         
        />
    </div>

    <div className="roleInputBox">
    <UserInputBox inputText={roleVal} trigger={takeRole} displayText="Enter role"         
    />
    </div>

    <div className="statusInputBox">
    <UserInputBox inputText={statusVal} trigger={takeStatus} displayText="Enter status"    
    />
    </div>

    <CustomButton label="Login" onClick={() => onClick(user)}>
    </CustomButton>

    </div>
  )

console.log(user);
}

export default MainPAge;