import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

function DownloadPage () {

  const [berkas, setBerkas] = useState("")

  
    
  return (
    <>
    <ListGroup defaultActiveKey="#link1">
      <h1>Selamat Datang!</h1>
      <h3>Silahkan Pilih Dokumen yang Ingin Di Unduh</h3>
      <ListGroup.Item action onClick={() => setBerkas('Dokumen 1')}>Dokumen 1</ListGroup.Item>
      <ListGroup.Item action onClick={() => setBerkas('Dokumen 2')}>Dokumen 2</ListGroup.Item>
      <ListGroup.Item action onClick={() => setBerkas('Dokumen 3')}>Dokumen 3</ListGroup.Item>
    </ListGroup>
    
    <h1>file yang akan anda unduh adalah :</h1>
    <h2>{berkas}</h2>
    </>
    
  )
}

export default DownloadPage
