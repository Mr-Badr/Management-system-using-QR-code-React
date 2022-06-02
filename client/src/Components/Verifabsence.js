import React from 'react'
import { QrReader } from "react-qr-reader";
import Axios from "axios";
import { useState } from 'react';


function Verifabsence() {
  const [data, setData] = useState([]);

  return (
    <div>
      <h3>Qr Code Scan by Web Cam</h3>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              //console.info(error);
            }
          }}
          style={{ width: "50%" }}
        />

        <h3>Scanned By WebCam Code: {data}</h3>
    </div>
  )
}

export default Verifabsence