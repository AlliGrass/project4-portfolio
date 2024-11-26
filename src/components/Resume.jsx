import { Image } from 'antd'
import { useState } from 'react'
import { saveAs } from 'file-saver';

const Resume = () => {
    const [isPreviewVisible, setPreviewVisible] = useState(false);

    const downloadResume = () => {
        const resumeUrl = 'src/assets/placeholders/resume_placeholder.png'
        saveAs(resumeUrl, 'Allison_Grasso_Resume.pdf')
    }

    return (
        <div className="resume-div">
            <h1>Resume</h1>
            <Image 
                preview={
                {
                    visible: isPreviewVisible,
                    onVisibleChange: (visible, prevVisible) => 
                        setPreviewVisible(visible)
            }} src="/assets/placeholders/resume_placeholder.png" alt="" />

            <div className="resume-handling-div">
                <button className='download-button' onClick={downloadResume}>Download</button>
            </div>
        </div>
    )
}

export default Resume