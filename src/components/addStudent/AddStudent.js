import React, {useState, useEffect} from 'react';
import './addStudent.css';
import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../header/Header';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { auth,db,storage,dbs } from '../../firebase';
import {uid} from 'uid';
import { ref, set } from "firebase/database";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

function AddStudent() {
    const [semester, setSemester] = useState(null);
    const [gender, setGender ] = useState('');
    const [faculty, setFaculty ] = useState('');
    const [fname, setFname] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [studentNum, setStudentNum] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');
    const [file, setFile] = useState("");
    const [picture, setPicture] = useState("");
    const [perc, setPerc] = useState(null);

    const navigate = useNavigate();

    /*************************** Image Upload to firebase storage *******************/
   /*useEffect(()=>{
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
            getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
                setPicture(downloadURL);
            });
        });};
        file && uploadFile();
    },[file])
*/
    const handleChangeSemester = (event) => {
        setSemester(event.target.value);
      };

      const handleChangeGender = (event) => {
        setGender(event.target.value);
      };

      const handleChangeFaculty = (event) => {
        setFaculty(event.target.value);
      };

      /********************* Add Student ******************************/
      const handleAddStudent=async(event)=>{
        event.preventDefault();
        const date = new Date().getFullYear();
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            await set(ref(dbs, 'students/' + response.user.uid), {
                name: fname,
                email: email,
                password: password,
                semester: semester,
                gender: gender,
                faculty: faculty,
                dob: dob,
                course: course,
                phone: phone,
                studentNumber: studentNum,
                attandance: false,
                //picture: picture,
                academicDate: date,
                timestamp: serverTimestamp(),
              });
              navigate(-1);
        }catch(error){
            console.log(error);
        }
      }
      /*const handleAddStudent=async(event)=>{
        event.preventDefault();
        const date = new Date().getFullYear();
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "students", response.user.uid), {
                name: fname,
                email: email,
                password: password,
                semester: semester,
                gender: gender,
                faculty: faculty,
                dob: dob,
                course: course,
                phone: phone,
                studentNumber: studentNum,
                picture: picture,
                academicDate: date,
                timestamp: serverTimestamp(),
              });
              navigate(-1);
        }catch(error){
            console.log(error);
        }
      }*/
      
  return (
    <div>
        <Sidebar />
        <div className='dashboard__container'>
            <Header />
            <div className='addstudent__container'>
                <div className='add-student'>
                    <div className="title">
                        <h2>Add New Student</h2>
                    </div>
                    <table>
                        <h4>Student Information</h4>
                       {/* <div className="left">
                            <img
                                src={
                                    file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            />
                            </div>*/}

                        <div className="right">
                            <form autoComplete="off">
                                <div className="formInput">
                                    <input
                                    type="text"
                                     id="name" 
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
                                </div>
                                <div className="formInput">
                                <input
                                    id="course" 
                                    type='text' 
                                    required 
                                    placeholder='Course'
                                    value={course}
                                    onChange={(e)=>setCourse(e.target.value)}
                                    />
                                    <FormControl variant="standard" sx={{ m: 1, width: 120,}}>
                                        <InputLabel id="semester">Semester</InputLabel>
                                        <Select
                                            labelId="semester-label"
                                            id="semester"
                                            value={semester}
                                            onChange={handleChangeSemester}
                                            label="Semester"
                                        >       
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="Semester 1">Semester 1</MenuItem>
                                            <MenuItem value="Semester 2">Semester 2</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl variant="standard" sx={{ m: 1, width: 120,}}>
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
                                        id="snum" 
                                        type='number' 
                                        label="Student Number" 
                                        variant="standard" 
                                        required 
                                        placeholder='Student Number'
                                        value={studentNum}
                                        onChange={(e)=>setStudentNum(e.target.value)}
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
                                    <button className='parent-btn' onClick={handleAddStudent} disabled={perc !== null && perc < 100}>Add Student</button>
                                </div>
                            </form>
                        </div>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent;
