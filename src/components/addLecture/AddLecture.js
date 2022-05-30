import React, {useState, useEffect} from 'react';
import './addLecture.css';
import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../header/Header';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { auth,db,storage } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

function AddLecture() {
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender ] = useState('');
    const [faculty, setFaculty ] = useState('');
    const [dob, setDob] = useState('');
    const [employeeNum, setEmployeeNum] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');
    const [file, setFile] = useState("");
    const [picture, setPicture] = useState("");
    const [perc, setPerc] = useState(null);

    useEffect(()=>{
        const uploadFile = () =>{
            const name = new Date().getTime() + file
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            
            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setPerc(progress);
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                    break;
                    default:
                        break;
                }
        }, 
        (error) => {
            console.log(error);
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPicture(downloadURL);
        });});};
        file && uploadFile();
    },[file])

  const handleChangeFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleAddLecture = async(e) =>{
      e.preventDefault();
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "lecture", response.user.uid), {
                name: fname,
                email: email,
                password: password,
                gender: gender,
                dob: dob,
                faculty: faculty,
                course: course,
                phone: phone,
                employeeNumber: employeeNum,
                picture: picture,
                registrationDate: serverTimestamp(),
              });
        }catch(error){
            console.log(error);
        }
      };

  return (
    <div>
      <Sidebar />
      <div className='dashboard__container'>
        <Header />
        <div className='addstudent__container'>
            <div className='add-student'>
                <div className="title">
                    <h2>Add New Lecture</h2>
                </div>
                <table>
                    <h4>Lecture Information</h4>
                    <div className="left">
                            <img
                                src={
                                    file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            />
                        </div>
                        <div className="right">
                            <form autoComplete="off">
                                <div className="formInput">
                                    <label htmlFor="file">
                                        Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={(e) => setFile(e.target.files[0])}
                                        style={{ display: "none" }}
                                    />

                                    <TextField
                                     id="name" 
                                     label="Full Name" 
                                     variant="standard" 
                                     required 
                                     placeholder='John Doe'
                                     onChange={(e)=>setFname(e.target.value)}
                                     value={fname}
                                     />
                                    <br />
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 100, paddingRight:2}}>
                                        <InputLabel id="gender">Gender</InputLabel>
                                        <Select
                                            labelId="gender-label"
                                            id="gender"
                                            value={gender}
                                            onChange={handleChangeGender}
                                            label="Gender"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'M'}>Male</MenuItem>
                                            <MenuItem value={'F'}>Female</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        id="dob"
                                        label="Date Of Birth"
                                        type="date"
                                        sx={{ width: 100, marginTop:1 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                        value={dob}
                                        onChange={(e)=>setDob(e.target.value)}
                                    />
                                    <TextField 
                                    id="password" 
                                    type='password' 
                                    label="Password" 
                                    variant="standard" 
                                    required 
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </div>{/*form input div*/}
                                <div className="formInput">
                                <TextField 
                                    id="course" 
                                    type='text' 
                                    label="Course" 
                                    variant="standard" 
                                    required 
                                    placeholder='Course'
                                    value={course}
                                    onChange={(e)=>setCourse(e.target.value)}
                                    />
                                    <br />
                                    <FormControl variant="standard" sx={{ m: 1, width: 120, marginTop: -0.2,}}>
                                        <InputLabel id="faculty">Faculty</InputLabel>
                                        <Select
                                            labelId="faculty-label"
                                            id="faculty"
                                            value={faculty}
                                            onChange={handleChangeFaculty}
                                            label="Faculty"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value='Humannities'>Humannities</MenuItem>
                                            <MenuItem value='ICT'>ICT</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField 
                                        id="Enum" 
                                        type='number' 
                                        label="Employee Number" 
                                        variant="standard" 
                                        required 
                                        placeholder='Employee Number'
                                        value={employeeNum}
                                        onChange={(e)=>setEmployeeNum(e.target.value)}
                                    />
                                    <TextField 
                                    id="email" 
                                    type='email' 
                                    label="Email Address" 
                                    variant="standard" 
                                    required 
                                    placeholder='Email Address'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                                    <TextField 
                                    id="pnumber" 
                                    type='tel' 
                                    label="Phone Number" 
                                    variant="standard" 
                                    required 
                                    placeholder='Phone Number'
                                    value={phone}
                                    onChange={(e)=>setPhone(e.target.value)}
                                    />
                                    <button className='parent-btn' onClick={handleAddLecture} disabled={perc !== null && perc < 100}>Add Lecture</button>
                                </div>
                            </form>
                        </div>
                </table>
            </div>
        </div>
    </div>
</div>
  );
}

export default AddLecture;