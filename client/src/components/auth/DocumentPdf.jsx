import React, { useEffect } from "react";

import Pdf from "react-to-pdf";
import { makeStyles } from "@material-ui/core/styles";


const ref = React.createRef();

export default function PDF(props) {
    useEffect(() => {
        console.log(props.data)
    }, [])
    const useStyles = makeStyles(theme => ({
        padding: {
            padding: 30,
        },
        h3: {
            color: "black",
        }
    }));
    const classes = useStyles();
    return (


        <div className="App">

            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>


          
                <div className={classes.padding}>
                <div className={classes.h3}>
                        <h4 className={classes.h3}>
                            <span>Question 2 :</span>   What is your approximate net situation in euros?</h4>
                        
                        <h4><span>Ans:</span>{props.data.ans2}</h4>
                    </div>
                    <div className={classes.h3}>
                        <h4 className={classes.h3}>
                            <span>Question 3 :</span> What is your annual net income (€)?</h4>
                        
                        <h4><span>Ans:</span>{props.data.ans3}</h4>
                    </div>
                    <div className={classes.h3}>
                        <h4 className={classes.h3}>
                            <span>Question 4:</span> What are your annual charges?</h4>
                        <h4><span>Ans :</span>{props.data.ans4}</h4>
                    </div>
                    <div className={classes.h3}>
                        <h4 className={classes.h3}>
                            <span>Question 5:</span>What is your goal with Beeside?</h4>
                    
                        <h4><span>Ans :</span>{props.data.ans5}</h4>
                    </div>
                
                    <div className={classes.h3}>
                        <h4 className={classes.h3}>
                            <span>Question 6 :</span> :What is your current professional situation?</h4>
                     
                        <h4><span>Ans :</span>{props.data.ans6}</h4>
                    </div>
                    <div className={classes.h3}>
                        <h4 className={classes.h3}>
                            <span>Question 7 :</span>What is your education level?</h4>
                       
                        <h4><span>Ans :</span>{props.data.ans7}</h4>
                    </div>
                    <div className={classes.h3}>
                        <h4 className={classes.h3}>
                            <span>Question 8:</span>How much do you intend to invest in total this year (€)?</h4>
 
                        <h4><span>Ans :</span>{props.data.ans8}</h4>
                    </div>

                    <div className={classes.h3}>
                        <h4 className={classes.h3}>
                            <span>Question 9:</span> Help us to offer you an investment in line with your profile! Have you ever invested in cryptocurrencies?</h4>
 
                        <h4><span>Ans :</span>{props.data.ans10 ===1 ?"true":"false"}</h4>
                    </div>
                    <div className={classes.h3}>
                        <h4 className={classes.h3}>
                            <span>Question 10:</span> Where are the funds you intend to invest on Beeside?</h4>
 
                        <h4><span>Ans :</span>{props.data.ans11}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

