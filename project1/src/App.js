import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';

const App = () => {

  // useState hook 
	const [options, setOptions] = useState(null);
	
	// useEffect hook
	useEffect(() => {
	    callApi()
	  }, 
      
      [setOptions]);
//  Function to call API
      function callApi() {
        
        const apiUrl = `https://api.api-ninjas.com/v1/trivia`;
	
	    fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'XmeSba7mSEh3ZbJaxCV4/A==6EphfBvVecW6X4mU'
              },
        })
	      .then((res) => res.json())
	      .then((response) => {
	        setOptions(response);
            console.log(options);
	      });
      }

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Knowledge App
      </Typography>
      <div>
     
       {options && 
            <div> <p> <strong> Question: </strong> {options[0].question} </p>
               <p> <strong> Answer: </strong> {options[0].answer} </p> 
               <Button variant="contained" onClick={callApi} >Generate Q&A/Button>
               
            </div> 
        }
              
    </div>
    </Box>


  );
};


export default App;


