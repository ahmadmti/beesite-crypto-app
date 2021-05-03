import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import { useHistory } from "react-router-dom";
import BottomBar from "../Welcome/BottomBar";
import Grid from "@material-ui/core/Grid";
import Label from './label';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import fileDownload from 'js-file-download';
import { Button, TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import firebase from "../../Firebase/initializeFirebase";

const useStyles = makeStyles(theme => ({

    root: {

        width: "100%",
        maxWidth: 400,
        paddingLeft: 0,
        backgroundColor: theme.palette.background.paper,
    },
    h3: {
        color: "#002f82",
    }
}));
export default function FurtherInformation(props) {

    const fetchMail = (email) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email:email,first_name:props.first_name,
                last_name:props.last_name,address:values.Adresse})
        };
        // Where we're fetching data from
        fetch(`http://beesite.geeklone.com:2000/api/send-mail`, requestOptions)
            // We get the API response and receive data in JSON format...
            .then(res => {
                console.log(res)
            })
            // Catch any errors we hit and update the app
            .catch(error => {console.log(error)});
    }
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [activeStep, setActiveStep] = React.useState(0);
    const [error, setError] = React.useState('');
    const [ans2, setAns2] = React.useState('');
    const [ans3, setAns3] = React.useState('');
    const [ans4, setAns4] = React.useState('');
    const [ans5, setAns5] = React.useState('');
    const [ans6, setAns6] = React.useState('');
    const [ans7, setAns7] = React.useState('');
    const [ans8, setAns8] = React.useState('');
    const [ans10, setAns10] = React.useState('');
    const [ans11, setAns11] = React.useState('');
    const [requestSubmit, setRequestSubmit] = React.useState(false);

    
    const handelAns2 = (event) => {
        setAns2(event.target.value);
    };
    const handelAns3 = (event) => {
        setAns3(event.target.value);
    };
    const handelAns4 = (event) => {
        setAns4(event.target.value);
    };
    const handelAns5 = (event) => {
        setAns5(event.target.value);
    };
    const handelAns6 = (event) => {
        setAns6(event.target.value);
    };
    const handelAns7 = (event) => {
        setAns7(event.target.value);
    };
    const handelAns8 = (event) => {
        setAns8(event.target.value);
    };
    const handelAns10 = (event) => {
        setAns10(event.target.value);
    };
    const handelAns11 = (event) => {
        setAns11(event.target.value);
    };
    let history = useHistory();

    const handleSubmit = () => {
        setError('')
        if (activeStep === 1) {
            if (ans2) {
                handleNext()
            }
            else {
                setError("You have to Choose Atleast One Option")
            }
        }
        if (activeStep === 2) {
            setError('')
            if (ans3) {
                handleNext()
            }
            else {
                setError("You have to Choose Atleast One Option")
            }
        }
        if (activeStep === 3) {
            setError('')
            if (ans4) {
                handleNext()
            }
            else {
                setError("You have to Choose Atleast One Option")
            }
        }
        if (activeStep === 4) {
            setError('')
            if (ans5) {
                handleNext()
            }
            else {
                setError("You have to Choose Atleast One Option")
            }
        }
        if (activeStep === 6) {
            setError('')
            if (ans6) {
                handleNext()
            }
            else {
                setError("You have to Choose Atleast One Option")
            }
        }
        if (activeStep === 7) {
            setError('')
            if (ans7) {
                handleNext()
            }
            else {
                setError("You have to Choose Atleast One Option")
            }
        }
        if (activeStep === 8) {
            setError('')
            if (ans8) {
                handleNext()
            }
            else {
                setError("You have to Choose Atleast One Option")
            }
        }
        if (activeStep === 9) {

            handleNext()

        }
        if (activeStep === 10) {
            setError('')
            if (ans10) {
                handleNext()
            }
            else {
                setError("You have to Choose Atleast One Option")
            }
        }

        if (activeStep === 12) {
            setError('')
            if (ans11) {

                // handleNext()

            }
            else {
                setError("You have to Choose Atleast One Option")
            }
        }


    };
    // console.log(activeStep)
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const [imageAsUrl, setImageAsUrl] = React.useState()
    const [imageAsFile, setImageAsFile] = React.useState(null);
    const [uploadImageName, setImageName] = React.useState(null);
    const [uploadIdImage, setuploadIdImage] = React.useState(null);


    const [certify, setCirtifyAccuracy] = React.useState(true);
    const [proofname, setProofImageName] = React.useState(null);
    const [proofImageAsFile, setProofImageAsFile] = React.useState(null);
    const [proofImage, setProofImage] = React.useState(null);


    const Icertify = (event) => {
        setCirtifyAccuracy(event.target.checked);
    };

    const handleProofImage = (event) => {
        const image = event.target.files[0]
        // console.log(image)
        setProofImageName(image.name)
        setProofImageAsFile(imageFile => (image))

    }
    const handleImage = (event) => {
        const image = event.target.files[0]
        // console.log(image)
        setImageName(image.name)
        setImageAsFile(imageFile => (image))

    }
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const [values, setValues] = React.useState({

        date_of_birth: '',
        Adresse: '',
    });
    const submit = (value) => {
        setRequestSubmit(true)
        const ref = firebase.firestore().collection('questions');
        var user = firebase.auth().currentUser;
        console.log(user)
        const storage = firebase.storage();

        if (proofImageAsFile) {
            const uploadProof = storage.ref(`/images/${proofImageAsFile.name}`).put(proofImageAsFile)

            uploadProof.on('state_changed',
                (snapShot) => {
                }, (err) => {
                    //catches the errors
                    // console.log(err)
                }, async () => {
                    const img = await storage.ref('images').child(proofImageAsFile.name).getDownloadURL();
                    console.log(img, "uploadProof")
                    setProofImage(img);
                    const res = ref.doc(user.uid).set({
                        Qs1: {
                            address: value.Adresse,
                            dob: value.date_of_birth,
                            agree: certify,
                            uploadId: null,
                            proofResidence: img,
                        },
                        Qs2: ans2,
                        Qs3: ans3,
                        Qs4: ans4,
                        Qs5: ans5,
                        Qs6: ans6,
                        Qs7: ans7,
                        Qs8: ans8,
                        Qs10: ans10,
                        Qs11: ans11


                    });
                    setRequestSubmit(false)
                    history.push("/besside/dashboard");
                })
        }
        if (imageAsFile) {
            const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
            //initiates the firebase side uploading 
            uploadTask.on('state_changed',
                (snapShot) => {
                }, (err) => {
                    //catches the errors
                    // console.log(err)
                }, async () => {
                    const img = await storage.ref('images').child(imageAsFile.name).getDownloadURL();
                    setuploadIdImage(img);
                    const res = ref.doc(user.uid).set({
                        Qs1: {
                            address: value.Adresse,
                            dob: value.date_of_birth,
                            agree: certify,
                            uploadId: img,
                            proofResidence: null,
                        },
                        Qs2: ans2,
                        Qs3: ans3,
                        Qs4: ans4,
                        Qs5: ans5,
                        Qs6: ans6,
                        Qs7: ans7,
                        Qs8: ans8,
                        Qs10: ans10,
                        Qs11: ans11


                    });
                    setRequestSubmit(false)
                    history.push("/besside/dashboard");
                })
        }
        if (proofImageAsFile && imageAsFile) {
            const uploadProof = storage.ref(`/images/${proofImageAsFile.name}`).put(proofImageAsFile)

            uploadProof.on('state_changed',
                (snapShot) => {
                }, (err) => {
                    //catches the errors
                    // console.log(err)
                }, async () => {
                    const proofimg = await storage.ref('images').child(proofImageAsFile.name).getDownloadURL();
                    const img = await storage.ref('images').child(imageAsFile.name).getDownloadURL();

                    console.log(img, "uploadProof")
                    setProofImage(img);
                    const res = ref.doc(user.uid).set({
                        Qs1: {
                            address: value.Adresse,
                            dob: value.date_of_birth,
                            agree: certify,
                            uploadId: img,
                            proofResidence: proofimg,
                        },
                        Qs2: ans2,
                        Qs3: ans3,
                        Qs4: ans4,
                        Qs5: ans5,
                        Qs6: ans6,
                        Qs7: ans7,
                        Qs8: ans8,
                        Qs10: ans10,
                        Qs11: ans11


                    });
                    setRequestSubmit(false)
                    history.push("/besside/dashboard");
                })
        }
        const res = ref.doc(user.uid).set({
            Qs1: {
                address: value.Adresse,
                dob: value.date_of_birth,
                agree: certify,
            },
            Qs2: ans2,
            Qs3: ans3,
            Qs4: ans4,
            Qs5: ans5,
            Qs6: ans6,
            Qs7: ans7,
            Qs8: ans8,
            Qs10: ans10,
            Qs11: ans11


        });
      
        fetchMail(user.email)
        history.push("/besside/dashboard");

    }
    const download = () => {

        fileDownload(imageAsFile, 'ID.png');

        var ext = imageAsFile.name.split('.').pop();
        const url = window.URL.createObjectURL(imageAsFile);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
            'download',
            'UploadedId',
        );
        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
    };
    const downloadProof = () => {

        var ext = proofImageAsFile.name.split('.').pop();
        const url = window.URL.createObjectURL(proofImageAsFile);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
            'download',
            'ProofOfResidence',
        );
        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
    };

    return (
        <div>

            {/* <div style={{ width: "100%",
        // maxWidth: 900,}}>
        <Contract/>
          {/* <PDF data={{ ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans10, ans11 }}></PDF> */}
            {/* </div> */}
            <div className={classes.root}>

                <div className={classes.cover}>

                    <svg width="148" height="11" viewBox="0 0 148 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.434 10.156C4.50667 10.156 3.666 9.95667 2.912 9.558C2.16667 9.15067 1.57733 8.59167 1.144 7.881C0.719333 7.16167 0.507 6.35133 0.507 5.45C0.507 4.54867 0.719333 3.74267 1.144 3.032C1.57733 2.31267 2.16667 1.75367 2.912 1.355C3.666 0.947666 4.511 0.744 5.447 0.744C6.23567 0.744 6.94633 0.882667 7.579 1.16C8.22033 1.43733 8.75767 1.836 9.191 2.356L7.839 3.604C7.22367 2.89333 6.461 2.538 5.551 2.538C4.98767 2.538 4.485 2.66367 4.043 2.915C3.601 3.15767 3.25433 3.5 3.003 3.942C2.76033 4.384 2.639 4.88667 2.639 5.45C2.639 6.01333 2.76033 6.516 3.003 6.958C3.25433 7.4 3.601 7.74667 4.043 7.998C4.485 8.24067 4.98767 8.362 5.551 8.362C6.461 8.362 7.22367 8.00233 7.839 7.283L9.191 8.531C8.75767 9.05967 8.22033 9.46267 7.579 9.74C6.93767 10.0173 6.22267 10.156 5.434 10.156ZM16.2462 10L14.4912 7.465H14.3872H12.5542V10H10.4482V0.899999H14.3872C15.1932 0.899999 15.8908 1.03433 16.4802 1.303C17.0782 1.57167 17.5375 1.953 17.8582 2.447C18.1788 2.941 18.3392 3.526 18.3392 4.202C18.3392 4.878 18.1745 5.463 17.8452 5.957C17.5245 6.44233 17.0652 6.815 16.4672 7.075L18.5082 10H16.2462ZM16.2072 4.202C16.2072 3.69067 16.0425 3.30067 15.7132 3.032C15.3838 2.75467 14.9028 2.616 14.2702 2.616H12.5542V5.788H14.2702C14.9028 5.788 15.3838 5.64933 15.7132 5.372C16.0425 5.09467 16.2072 4.70467 16.2072 4.202ZM26.8888 8.31V10H19.8428V0.899999H26.7198V2.59H21.9358V4.566H26.1608V6.204H21.9358V8.31H26.8888ZM34.3924 8.05H30.1674L29.3614 10H27.2034L31.2594 0.899999H33.3394L37.4084 10H35.1984L34.3924 8.05ZM33.7294 6.451L32.2864 2.967L30.8434 6.451H33.7294ZM39.6155 2.616H36.7035V0.899999H44.6335V2.616H41.7215V10H39.6155V2.616ZM52.6477 8.31V10H45.6017V0.899999H52.4787V2.59H47.6947V4.566H51.9197V6.204H47.6947V8.31H52.6477ZM63.668 8.05H59.443L58.637 10H56.479L60.535 0.899999H62.615L66.684 10H64.474L63.668 8.05ZM63.005 6.451L61.562 2.967L60.119 6.451H63.005ZM75.8091 0.899999V10H74.0801L69.5431 4.475V10H67.4631V0.899999H69.2051L73.7291 6.425V0.899999H75.8091ZM87.3068 8.05H83.0818L82.2758 10H80.1178L84.1738 0.899999H86.2538L90.3228 10H88.1128L87.3068 8.05ZM86.6438 6.451L85.2008 2.967L83.7578 6.451H86.6438ZM95.3299 10.156C94.4026 10.156 93.5619 9.95667 92.8079 9.558C92.0626 9.15067 91.4733 8.59167 91.0399 7.881C90.6153 7.16167 90.4029 6.35133 90.4029 5.45C90.4029 4.54867 90.6153 3.74267 91.0399 3.032C91.4733 2.31267 92.0626 1.75367 92.8079 1.355C93.5619 0.947666 94.4069 0.744 95.3429 0.744C96.1316 0.744 96.8423 0.882667 97.4749 1.16C98.1163 1.43733 98.6536 1.836 99.0869 2.356L97.7349 3.604C97.1196 2.89333 96.3569 2.538 95.4469 2.538C94.8836 2.538 94.3809 2.66367 93.9389 2.915C93.4969 3.15767 93.1503 3.5 92.8989 3.942C92.6563 4.384 92.5349 4.88667 92.5349 5.45C92.5349 6.01333 92.6563 6.516 92.8989 6.958C93.1503 7.4 93.4969 7.74667 93.9389 7.998C94.3809 8.24067 94.8836 8.362 95.4469 8.362C96.3569 8.362 97.1196 8.00233 97.7349 7.283L99.0869 8.531C98.6536 9.05967 98.1163 9.46267 97.4749 9.74C96.8336 10.0173 96.1186 10.156 95.3299 10.156ZM104.509 10.156C103.581 10.156 102.741 9.95667 101.987 9.558C101.241 9.15067 100.652 8.59167 100.219 7.881C99.794 7.16167 99.5817 6.35133 99.5817 5.45C99.5817 4.54867 99.794 3.74267 100.219 3.032C100.652 2.31267 101.241 1.75367 101.987 1.355C102.741 0.947666 103.586 0.744 104.522 0.744C105.31 0.744 106.021 0.882667 106.654 1.16C107.295 1.43733 107.832 1.836 108.266 2.356L106.914 3.604C106.298 2.89333 105.536 2.538 104.626 2.538C104.062 2.538 103.56 2.66367 103.118 2.915C102.676 3.15767 102.329 3.5 102.078 3.942C101.835 4.384 101.714 4.88667 101.714 5.45C101.714 6.01333 101.835 6.516 102.078 6.958C102.329 7.4 102.676 7.74667 103.118 7.998C103.56 8.24067 104.062 8.362 104.626 8.362C105.536 8.362 106.298 8.00233 106.914 7.283L108.266 8.531C107.832 9.05967 107.295 9.46267 106.654 9.74C106.012 10.0173 105.297 10.156 104.509 10.156ZM113.739 10.156C112.795 10.156 111.941 9.95233 111.178 9.545C110.424 9.13767 109.831 8.57867 109.397 7.868C108.973 7.14867 108.76 6.34267 108.76 5.45C108.76 4.55733 108.973 3.75567 109.397 3.045C109.831 2.32567 110.424 1.76233 111.178 1.355C111.941 0.947666 112.795 0.744 113.739 0.744C114.684 0.744 115.533 0.947666 116.287 1.355C117.041 1.76233 117.635 2.32567 118.068 3.045C118.502 3.75567 118.718 4.55733 118.718 5.45C118.718 6.34267 118.502 7.14867 118.068 7.868C117.635 8.57867 117.041 9.13767 116.287 9.545C115.533 9.95233 114.684 10.156 113.739 10.156ZM113.739 8.362C114.277 8.362 114.762 8.24067 115.195 7.998C115.629 7.74667 115.967 7.4 116.209 6.958C116.461 6.516 116.586 6.01333 116.586 5.45C116.586 4.88667 116.461 4.384 116.209 3.942C115.967 3.5 115.629 3.15767 115.195 2.915C114.762 2.66367 114.277 2.538 113.739 2.538C113.202 2.538 112.717 2.66367 112.283 2.915C111.85 3.15767 111.508 3.5 111.256 3.942C111.014 4.384 110.892 4.88667 110.892 5.45C110.892 6.01333 111.014 6.516 111.256 6.958C111.508 7.4 111.85 7.74667 112.283 7.998C112.717 8.24067 113.202 8.362 113.739 8.362ZM124.179 10.156C122.879 10.156 121.865 9.79633 121.137 9.077C120.418 8.35767 120.058 7.33067 120.058 5.996V0.899999H122.164V5.918C122.164 7.54733 122.84 8.362 124.192 8.362C124.851 8.362 125.354 8.167 125.7 7.777C126.047 7.37833 126.22 6.75867 126.22 5.918V0.899999H128.3V5.996C128.3 7.33067 127.936 8.35767 127.208 9.077C126.489 9.79633 125.479 10.156 124.179 10.156ZM138.562 0.899999V10H136.833L132.296 4.475V10H130.216V0.899999H131.958L136.482 6.425V0.899999H138.562ZM142.435 2.616H139.523V0.899999H147.453V2.616H144.541V10H142.435V2.616Z" fill="#002F82" />
                    </svg>


                    {/* <Button onClick={() => fetchMail()}>mail</Button> */}
                    <MobileStepper
                        variant="progress"
                        steps={13}
                        position="static"
                        activeStep={activeStep}
                        className={classes.root}
                    />
                    {
                        activeStep == 0 ?
                            <div>
                                <div>
                                    <h3 className={classes.h3}> <span>1 :</span> Validation of KYC (Know Your Customer)</h3>
                                </div>
                                <form>

                                    <Grid container spacing={2}>
                                        <Grid item md={12} sm={12} xs={12} >
                                            <div className="input__field_block_signup">
                                                <Label name="Date of Birth" />
                                                <TextField size="medium"
                                                    value={values.date_of_birth}
                                                    name="date_of_birth"
                                                    type="date"
                                                    required
                                                    onChange={handleChange('date_of_birth')}
                                                    className="field" />
                                            </div>
                                        </Grid>
                                        <Grid item md={12} sm={12} xs={12} >
                                            <div className="input__field_block_signup">
                                                <Label name="Adresse" />
                                                <TextField size="medium"
                                                    value={values.address}
                                                    name="Adresse"
                                                    onChange={handleChange('Adresse')}
                                                    className="field" />
                                            </div>
                                        </Grid>
                                        <Grid item md={12} sm={12} xs={12} >
                                            <label
                                                className="btn_style custom-file-upload">
                                                <input type="file" accept="image/*" onChange={handleImage} />
                                                <i className="fa fa-cloud-upload" />Upload an ID or a Photo
                                                        </label>
                                            <div className="file-preview">{uploadImageName}</div>

                                        </Grid>

                                        <Grid item md={12} sm={12} xs={12} >
                                            <label
                                                className="btn_style custom-file-upload">
                                                <input type="file" onChange={handleProofImage} />
                                                <i className="fa fa-cloud-upload" />Upload Proof of Residence or Photo
                                                        </label>
                                            <div className="file-preview">{proofname}</div>

                                        </Grid>
                                        <Grid item md={12} sm={12} xs={12} >
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={certify}
                                                        onChange={Icertify}
                                                        name="checkedB"
                                                        color="primary"
                                                    />
                                                }
                                                label="I certify the accuracy of the information"
                                            />
                                        </Grid>
                                    </Grid>
                                    <div className="padding">
                                        <Grid item md={12} sm={12} xs={12}>
                                            <div className="submission_block">

                                                <Button variant="contained" onClick={handleNext} color="info" class="question_btn">
                                                    Next Question
                                        </Button>
                                                <BottomBar />

                                            </div>
                                        </Grid>
                                    </div>
                                </form>
                            </div>
                            : null
                    }
                    {
                        activeStep == 1 ?

                            <div className={classes.h3}>

                                <h3 className={classes.h3}> <span>2 :</span> What is your approximate net situation in euros?</h3>
                                <p>Equity is the amount of your assets (real estate, furniture and liquidity) minus the amount of your debts (mainly home loans and consumer loans). → What is your approximate net worth in euros?
                                Equity is the amount of your assets (real estate, furniture and cash) minus the amount of your debts (mainly mortgage and consumer loans).
                        </p>

                                <FormControl component="fieldset">

                                    <RadioGroup aria-label="ans2" name="ans2" required value={ans2} onChange={handelAns2}>
                                        <FormControlLabel value="Less than € 20,000" control={<Radio required={true} />} label="Less than € 20,000" />
                                        <FormControlLabel value="€ 20,000 - € 50,000" control={<Radio required={true} />} label="€ 20,000 - € 50,000" />
                                        <FormControlLabel value="€ 50,000 - € 100,000" control={<Radio required={true} />} label="€ 50,000 - € 100,000" />
                                        <FormControlLabel value="€ 100,000 - € 250,000" control={<Radio />} label="€ 100,000 - € 250,000" />
                                        <FormControlLabel value="Over 250,000 €" control={<Radio />} label="Over 250,000 €" />
                                    </RadioGroup>
                                    <p style={{ fontWeight: 500, color: "red" }}>{error}</p>
                                </FormControl>
                                <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">

                                            <Button variant="contained" onClick={handleSubmit} color="info" class="question_btn">
                                                Next Question
                                    </Button>
                                            <BottomBar />

                                        </div>
                                    </Grid>
                                </div>

                            </div>
                            : null}
                    {
                        activeStep === 2 ?
                            <div className={classes.h3}>
                                <h3 className={classes.h3}> <span>3 :</span> What is your annual net income (€)? </h3>

                                <FormControl component="fieldset">

                                    <RadioGroup aria-label="ans2" name="ans3" value={ans3} onChange={handelAns3}>
                                        <FormControlLabel value="Less than 10,000 €" control={<Radio />} label="Less than 10,000 €" />
                                        <FormControlLabel value="€ 10,000 - € 20,000" control={<Radio />} label="€ 10,000 - € 20,000" />
                                        <FormControlLabel value="€ 20,000 - € 50,000" control={<Radio />} label="€ 20,000 - € 50,000" />
                                        <FormControlLabel value="€ 50,000 - € 100,000" control={<Radio />} label="€ 50,000 - € 100,000" />
                                        <FormControlLabel value="Over 100,000 €" control={<Radio />} label="Over 100,000 €" />
                                    </RadioGroup>
                                    <p style={{ fontWeight: 500, color: "red" }}>{error}</p>
                                </FormControl>
                                <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">

                                            <Button variant="contained" onClick={handleSubmit} color="info" class="question_btn">
                                                Next Question
                                        </Button>
                                            <BottomBar />

                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            : null
                    }
                    {
                        activeStep === 3 ?
                            <div className={classes.h3}>
                                <h3 className={classes.h3}> <span>4 :</span>What are your annual charges?</h3>

                                <FormControl component="fieldset">

                                    <RadioGroup aria-label="ans2" name="ans4" value={ans4} onChange={handelAns4}>
                                        <FormControlLabel value="Less than € 20,000" control={<Radio />} label="Less than € 20,000" />
                                        <FormControlLabel value="€ 20,000 - € 50,000" control={<Radio />} label="€ 20,000 - € 50,000" />
                                        <FormControlLabel value="€ 50,000 - € 100,000" control={<Radio />} label="€ 50,000 - € 100,000" />
                                        <FormControlLabel value="€ 100,000 - € 250,000" control={<Radio />} label="€ 100,000 - € 250,000" />
                                        <FormControlLabel value="Over 250,000 €" control={<Radio />} label="Over 250,000 €" />
                                    </RadioGroup>
                                    <p style={{ fontWeight: 500, color: "red" }}>{error}</p>
                                </FormControl>
                                <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">

                                            <Button variant="contained" onClick={handleSubmit} color="info" class="question_btn">
                                                Next Question
                                        </Button>
                                            <BottomBar />

                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            : null
                    }
                    {
                        activeStep === 4 ?
                            <div className={classes.h3}>
                                <h3 className={classes.h3}> <span>5 :</span>What is your goal with Beeside? </h3>

                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="ans2" name="ans5" value={ans5} onChange={handelAns5}>
                                        <FormControlLabel value="Take advantage of investment opportunity / return> risk ++" control={<Radio />} label="Take advantage of investment opportunity / return> risk ++" />
                                        <FormControlLabel value="Invest in LT in the currency of tomorrow. > risky -" control={<Radio />} label="Invest in LT in the currency of tomorrow. > risky -" />
                                        <FormControlLabel value="I don't really know but I want to take advantage of it> risk -" control={<Radio />} label="I don't really know but I want to take advantage of it> risk -" />
                                    </RadioGroup>
                                    <p style={{ fontWeight: 500, color: "red" }}>{error}</p>
                                </FormControl>
                                <p>
                                    Yes, we know it takes a long time, but it is the ransom to access an exceptional product within the rules 🚀
                                    We generate your document… Yousign on the engagement letter.
                    </p>
                                <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">

                                            <Button variant="contained" onClick={handleSubmit} color="info" class="question_btn">
                                                Next Question
                                        </Button>
                                            <BottomBar />

                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            : null
                    }
                    {
                        activeStep === 5 ?
                            <div className={classes.h3}>
                                <h3 className={classes.h3}> <span>6:</span>Some questions to protect yourself from an uninformed investment 💡
                    One last little effort 🤓
                    </h3>
                                <p>Investment and source of wealth</p>
                                <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">

                                            <Button variant="contained" onClick={handleNext} color="info" class="question_btn">
                                                Next Question
                                        </Button>
                                            <BottomBar />

                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            : null
                    }
                    {
                        activeStep === 6 ?
                            <div className={classes.h3}>
                                <h3 className={classes.h3}> <span>7:</span>What is your current professional situation?
                    </h3>
                                <FormControl component="fieldset">

                                    <RadioGroup aria-label="ans2" name="ans5" value={ans6} onChange={handelAns6}>
                                        <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
                                        <FormControlLabel value="Self-employed worker / entrepreneur" control={<Radio />} label="Self-employed worker / entrepreneur" />
                                        <FormControlLabel value="Retirement" control={<Radio />} label="Retirement" />
                                        <FormControlLabel value="Student" control={<Radio />} label="Student" />
                                        <FormControlLabel value="Non-working" control={<Radio />} label="Non-working" />
                                    </RadioGroup>
                                    <p style={{ fontWeight: 500, color: "red" }}>{error}</p>
                                </FormControl>
                                <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">

                                            <Button variant="contained" onClick={handleSubmit} color="info" class="question_btn">
                                                Next Question
                                        </Button>
                                            <BottomBar />

                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            : null
                    }
                    {
                        activeStep === 7 ?
                            <div className={classes.h3}>
                                <h3 className={classes.h3}> <span>8:</span>What is your education level?
                    </h3>
                                <FormControl component="fieldset">

                                    <RadioGroup aria-label="ans2" name="ans5" value={ans7} onChange={handelAns7}>
                                        <FormControlLabel value="Without diploma" control={<Radio />} label="Without diploma" />
                                        <FormControlLabel value="Tray" control={<Radio />} label="Tray" />
                                        <FormControlLabel value="Bac +2/3 (BTS, IUT, License)" control={<Radio />} label="Bac +2/3 (BTS, IUT, License)" />
                                        <FormControlLabel value="Bac +5 (Master, MBA, Msc)" control={<Radio />} label="Bac +5 (Master, MBA, Msc)" />
                                    </RadioGroup>
                                    <p style={{ fontWeight: 500, color: "red" }}>{error}</p>
                                </FormControl>
                                <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">

                                            <Button variant="contained" onClick={handleSubmit} color="info" class="question_btn">
                                                Next Question
                                        </Button>
                                            <BottomBar />

                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            : null
                    }
                    {
                        activeStep === 8 ?
                            <div className={classes.h3}>
                                <h3 className={classes.h3}> <span>9:</span>How much do you intend to invest in total this year (€)?
                    </h3>
                                <FormControl component="fieldset">

                                    <RadioGroup aria-label="ans2" name="ans5" value={ans8} onChange={handelAns8}>
                                        <FormControlLabel value="Less than 10,000 €" control={<Radio />} label="Less than 10,000 €" />
                                        <FormControlLabel value="€ 10,000 - € 20,000" control={<Radio />} label="€ 10,000 - € 20,000" />
                                        <FormControlLabel value="€ 20,000 - € 50,000" control={<Radio />} label="€ 20,000 - € 50,000" />
                                        <FormControlLabel value="€ 50,000 - € 100,000" control={<Radio />} label="€ 50,000 - € 100,000" />
                                        <FormControlLabel value="Over 100,000 €" control={<Radio />} label="Over 100,000 €" />

                                    </RadioGroup>
                                    <p style={{ fontWeight: 500, color: "red" }}>{error}</p>
                                </FormControl>
                                <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">

                                            <Button variant="contained" onClick={handleSubmit} color="info" class="question_btn">
                                                Next Question
                                        </Button>
                                            <BottomBar />

                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            : null
                    }
                    {
                        activeStep === 9 ?
                            <div className={classes.h3}>
                                <h3 className={classes.h3}> <span>10:</span>It's good, you have finished the process, we will send you by email the
                            RIB on which to make your deposit once your account is validated.</h3>
                                <h2>Now it's time to upload</h2>
                                <div >
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">
                                            <form>
                                                <Grid container spacing={2}>

                                                    {
                                                        imageAsFile ?
                                                            <Grid item md={12} sm={12} xs={12} >
                                                                <Button
                                                                    onClick={download}
                                                                    className="btn_style btn_id custom-file-upload">
                                                                    <input type="file" />
                                                                    <i className="fa fa-download" />Download ID
                                                    </Button>

                                                            </Grid>

                                                            :
                                                            <Grid item md={12} sm={12} xs={12} >
                                                                <label
                                                                    className="btn_style custom-file-upload">
                                                                    <input type="file" accept="image/*" onChange={handleImage} />
                                                                    <i className="fa fa-cloud-upload" />Upload an ID or a Photo
                                                                </label>
                                                                <div className="file-preview">{uploadImageName}</div>

                                                            </Grid>
                                                    }

                                                    {
                                                        proofImageAsFile ?
                                                            <Grid item md={12} sm={12} xs={12} >
                                                                <Button
                                                                    onClick={downloadProof}
                                                                    className="btn_style btn_id custom-file-upload">
                                                                    <input type="file" onChange={handleImage} />
                                                                    <i className="fa fa-download" /> Download  Proof of Residence or Photo
                                                </Button>
                                                                <div className="file-preview"></div>
                                                            </Grid>
                                                            :
                                                            <Grid item md={12} sm={12} xs={12} >
                                                                <label
                                                                    className="btn_style custom-file-upload">
                                                                    <input type="file" onChange={handleProofImage} />
                                                                    <i className="fa fa-cloud-upload" />Upload Proof of Residence or Photo
                                                            </label>
                                                                <div className="file-preview">{proofname}</div>

                                                            </Grid>
                                                    }

                                                </Grid>

                                            </form>
                                            <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                            <Button variant="contained" onClick={handleSubmit} color="info" class="question_btn">
                                                Next Question
                                        </Button>
                                            <BottomBar />
                                          
                                        </Grid>
                                      </div>
                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            : null
                    }
                    {
                        activeStep === 10 ?
                            <div className={classes.h3}>
                                <h3 className={classes.h3}> <span>11:</span>Help us to offer you an investment in line with your profile!
                        Have you ever invested in cryptocurrencies?</h3>
                                <FormControl component="fieldset">

                                    <RadioGroup aria-label="ans10" name="ans10" value={ans10} onChange={handelAns10}>
                                        <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="0" control={<Radio />} label="No" />

                                    </RadioGroup>
                                    <p style={{ fontWeight: 500, color: "red" }}>{error}</p>
                                </FormControl>
                                <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">

                                            <Button variant="contained" onClick={handleSubmit} color="info" class="question_btn">
                                                Next Question
                                        </Button>
                                            <BottomBar />

                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            : null
                    }
                    {
                        activeStep == 11 ?
                            <div className={classes.h3}>
                                <h3 className={classes.h3}> <span>12:</span>How much do you want to convert?</h3>
                                <p>
                                    Display of Beeside banking information.
                                    Your funds will be available within a classic interbank period of 2 to 3 working days
                                    You can withdraw your funds at any time after a 3 month blocking period. The deadline for receiving funds is approximately 2 weeks.

                    </p>
                                <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">

                                            <Button variant="contained" onClick={handleNext} color="info" class="question_btn">
                                                Next Question
                                        </Button>
                                            <BottomBar />

                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            : null
                    }
                    {
                        activeStep === 12 ?
                            <div>
                                <div className={classes.h3}>

                                    <h3 className={classes.h3}> <span>13:</span>Where are the funds you intend to invest on Beeside?</h3>
                                    <FormControl component="fieldset">

                                        <RadioGroup aria-label="ans2" name="ans5" value={ans11} onChange={handelAns11}>
                                            <FormControlLabel value="Salary (personal income)" control={<Radio />} label="Salary (personal income)" />
                                            <FormControlLabel value="Saving" control={<Radio />} label="Saving" />
                                            <FormControlLabel value="Heritage" control={<Radio />} label="Heritage" />
                                            <FormControlLabel value="Income from previous investments" control={<Radio />} label="Income from previous investments" />
                                            <FormControlLabel value="Retirement" control={<Radio />} label="Retirement" />
                                            <FormControlLabel value="Bank credit" control={<Radio />} label="Bank credit" />

                                        </RadioGroup>
                                        <p style={{ fontWeight: 500, color: "red" }}>{error}</p>
                                    </FormControl>


                                </div>
                                <div className="padding">
                                    <Grid item md={12} sm={12} xs={12}>
                                        <div className="submission_block">
                                            {/* <form onSubmit={submit(values)}> */}
                                                <Button disbled={requestSubmit} variant="contained" onClick={() => submit(values)} color="info" class="question_btn">
                                                Submit
                                                </Button>
                                            <BottomBar />
                                            {/* </form> */}
                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            : null
                    }
                </div>
            </div>
        </div>
    );
}
