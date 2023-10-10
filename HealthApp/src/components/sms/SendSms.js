import React, { useState, useEffect } from 'react';
import axios from 'axios';

 

function SendSms() {

  const [message, setMessage] = useState('');

  //const [loading, setLoading] = useState(true);

 

  const fetchData = async () => {

    try {

      const response = await axios.get('/sendSms');
      setMessage('button clicked')
      setMessage(response.data);
    }catch (error) {
        console.error(error);
    }
}

//       if (!response.ok) {

//         throw new Error('Failed to fetch data');

//       }

//       const data = await response.json();

//       setMessage(data.message);

//     } catch (error) {

//       console.error('Error fetching data:', error);

//       setMessage('Error fetching data');

//     } finally {

//       setLoading(false);

//     }

//   };

 

//   useEffect(() => {

//     fetchData();

//   }, []); // empty dependency array means it runs once when the component mounts

 

  return (

    <div className="App">

        <button onClick={fetchData}>Run node.js Script</button>

      {/* <h1>React App</h1>

      {loading ? (

        <p>Loading...</p>

      ) : (

        <p>Message from Node.js: {message}</p>

      )} */}

    </div>

  );

}

 

export default SendSms;