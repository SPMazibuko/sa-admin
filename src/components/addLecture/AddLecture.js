import React, {useState} from 'react';
import './addLecture.css';
import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../header/Header';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

function AddLecture() {
  const [faculty, setFaculty ] = useState('');
  const [gender, setGender ] = useState('');

  const handleChangeFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
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
                    <div className='r-1'>
                    <TextField
                        id="regDate"
                        label="Registration Date"
                        type="date"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="standard"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
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
                                    <MenuItem value='H'>Humannities</MenuItem>
                                    <MenuItem value='ICT'>Information & Communications Technology</MenuItem>
                                </Select>
                        </FormControl>
                    </div>
                    <div className='r-2'>
                        <TextField id="fname" label="First Name" variant="standard" required placeholder='First Name' type='text' />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField id="lname" label="Last Name" variant="standard" required placeholder='Last Name'/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
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
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="dob"
                            label="Date Of Birth"
                            type="date"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            variant="standard"
                        />
                    </div>
                    <div className='r-3'>
                    <TextField id="empNum" type='number' label="Employee Number" variant="standard" required placeholder='Employee Number'/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField id="email" type='email' label="Email Address" variant="standard" required placeholder='Email Address'/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField id="pnumber" type='tel' label="Phone Number" variant="standard" required placeholder='Phone Number'/>
                    </div>
                    <button className='parent-btn'>Add Lecture</button>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default AddLecture