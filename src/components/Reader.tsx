import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const Reader = () => {
  const [showReader, setShowReader] = useState(false);
  const [data, setData] = useState('');

  const handleShowReader = () => {
    setShowReader(true);
    setData('');
  }

  const handleResult = (result: any, error: any) => {
    if (!!result) {
      console.log('result-text', result.text)
      setData(result?.text);
      setShowReader(false);
    }

    if (!!error) {
      console.info(error);
    }
  }

  return (
    <div className="flex justify-center p-2 w-full min-h-screen">
      <div className="flex flex-col max-w-lg p-3 w-full mx-auto border-2 rounded-lg bg-gray-50 my-10">
          {/* Header */}
          <div className="flex flex-col mb-10">
            <h3 className="text-xl text-center mb-3">Scan the QR</h3>
            <button 
              type="button" 
              disabled={showReader}
              onClick={handleShowReader}
              className="disabled:opacity-30 mx-4 bg-white py-3 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Start
            </button>
          </div>

          {/* Reader */}
          <div className="border rounded-lg flex-1 p-1 mb-10">
            {
              showReader && (
                <QrReader
                  onResult={handleResult}
                  constraints={{ facingMode: 'back' }}
                  containerStyle={{ width: '100%' }}
                />
              )
            }

          </div>

          {/* Result */}
          <div className='mt-auto'>
            {
              data && (
                <div className="border border-md py-1 px-2 bg-gray-100">
                  <h3 className="text-lg">{data}</h3>
                </div>
              )
            }
          </div>
      </div>
    </div>
  );
}