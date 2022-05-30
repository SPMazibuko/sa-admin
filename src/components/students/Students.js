import React, {useState, useEffect} from 'react';
import './students.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Draggable from 'react-draggable';
import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../header/Header';
import {IoIosInformationCircle} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs,doc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase';

function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

export const Students = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () =>{
          setOpen(false);
      };
    /************ Delete data from firebase **********************************************/
      const handleDelete = async (id) => {
        try {
          await deleteDoc(doc(db, "students", id));
          setData(data.filter((item) => item.id !== id));
        } catch (err) {
          console.log(err);
        }
      };

      const handleEdit = () => {
        setOpen(false);
      };
/*---------------------------- Fetch students data from the database -------------------*/
    useEffect(()=>{
        const fetchData = async()=>{
            let list = []
            try{
                const querySnapshot = await getDocs(collection(db, "students"));
                querySnapshot.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()});
                });
                setData(list);
            }catch(e){
                console.log(e);
            }
        }
        fetchData();
    },[])


    return(
        <div>
            <Sidebar />
            <div className='dashboard__container'>
                <Header />
                <div className='students__container'>
                    <div className="students">
                        <div className="title">
                            <h2>Registered Students</h2>
                            <button className= "btn-add" onClick={()=>navigate('/addstudent')}>Add New Student</button>
                        </div>
                        <TableContainer component={Paper} className="table">
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="tableCell">Profile</TableCell>
                                        <TableCell className="tableCell">Student Number</TableCell>
                                        <TableCell className="tableCell">Student Name</TableCell>
                                        <TableCell className="tableCell">Options</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((data) => (
                                        <TableRow key={data.id}>
                                            <TableCell className="tableCell">
                                                <div className="cellWrapper">
                                                    <img src={data.picture} alt="" className="image" />
                                                </div>
                                            </TableCell>
                                            <TableCell className="tableCell">{data.studentNumber}</TableCell>
                                            <TableCell className="tableCell">{data.name}</TableCell>
                                            <TableCell className="tableCell">
                                                <div>
                                                    <IoIosInformationCircle className='dashboard__user-icon' onClick={handleClickOpen}  style={{ cursor: 'pointer' }}/>
                                                    <Dialog
                                                        open={open}
                                                        onClose={handleClose}
                                                        PaperComponent={PaperComponent}
                                                        aria-labelledby="draggable-dialog-title"
                                                    >
                                                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                                                            Manage Student
                                                        </DialogTitle>
                                                        <DialogContent>
                                                            <DialogContentText>
                                                                Delete or edit student details.
                                                            </DialogContentText>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={()=>{handleDelete(data.id)}}>DELETE</Button>
                                                            <Button onClick={handleEdit}>EDIT</Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
