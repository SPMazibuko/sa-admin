import React, {useState, useEffect} from 'react';
import './lectures.css';
import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../header/Header';
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
import {IoIosInformationCircle} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { collection, doc, deleteDoc, onSnapshot} from "firebase/firestore";
import { auth,db,storage,dbs } from '../../firebase';
import { ref, set, onValue } from "firebase/database";

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

export const Lectures = () => {
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
          await deleteDoc(doc(db, "lecture", id));
          setData(data.filter((lecture) => lecture.id !== id));
        } catch (err) {
          console.log(err);
        }
      };

      /*---------------------------- Fetch students data from the database -------------------*/
      useEffect(()=>{
        onValue(ref(dbs, 'lectures'), (snapshot) => {
            const lecture = snapshot.val();
            const lectureList = []
            for(let id in lecture){
                lectureList.push(lecture[id])
            }
            setData(lectureList);
        })
    },[])
   
      /* useEffect(()=>{
         const unsub = onSnapshot(collection(db, "lecture"), (snapShot) =>{
             let list = [];
             snapShot.docs.forEach(doc=>{
                 list.push({id: doc.id, ...doc.data()});
             });
             setData(list);
         },(error)=>{
             console.log(error)
         });
         return ()=>{
             unsub();
         }
     },[]);*/

console.log(data);
    return(
        <div>
            <Sidebar />
            <div className='dashboard__container'>
                <Header />
                <div className='students__container'>
                    <div className="new-students">
                        <div className="title">
                            <h2>Registered Lectures</h2>
                            <button className= "btn-add" onClick={()=>navigate('/addlecture')}>Add Lecture</button>
                        </div>
                        <TableContainer component={Paper} className="table">
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="tableCell">Employee Number</TableCell>
                                        <TableCell className="tableCell">Lecture Name</TableCell>
                                        <TableCell className="tableCell">Faculty</TableCell>
                                        <TableCell className="tableCell">Options</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((data) => (
                                        <TableRow key={data.id}>
                                            <TableCell className="tableCell">{data.employeeNumber}</TableCell>
                                            <TableCell className="tableCell">{data.name}</TableCell>
                                            <TableCell className="tableCell">{data.faculty}</TableCell>
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
                                                            DELETE LECTURE
                                                        </DialogTitle>
                                                        <DialogContent>
                                                            <DialogContentText>
                                                                Are you sure you want to delete the Employee?
                                                            </DialogContentText>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={()=>{handleDelete(data.id)}}>DELETE</Button>
                                                            <Button onClick={handleClose}>BACK</Button>
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
