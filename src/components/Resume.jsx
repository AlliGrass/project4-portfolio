import { Image } from 'antd'
import { useState } from 'react'
import { saveAs } from 'file-saver'

import data from '../data/data.json'

const Resume = () => {
    const resume = data.resume
    
    const [isPreviewVisible, setPreviewVisible] = useState(false);

    const downloadResume = () => {
        saveAs(resume.pdf, 'Grasso_Allison_Resume.pdf')
    }

    return (
        <div className="resume-div">
            <h1>Resume</h1>
            <div className='resume-img-div'>
                <Image 
                    className='resume-img'
                    preview={
                    {
                        visible: isPreviewVisible,
                        onVisibleChange: (visible, prevVisible) => 
                            setPreviewVisible(visible)
                    }} src={resume.img} alt="" />
            </div>
            

            <div className="resume-handling-div">
                <button className='download-button' onClick={downloadResume}>Download</button>
            </div>
        </div>
    )
}

export default Resume   