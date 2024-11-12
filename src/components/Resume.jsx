import { Image } from 'antd'
import { useState } from 'react'

const Resume = () => {
    const [isPreviewVisible, setPreviewVisible] = useState(false);


        return (
            <div className="resume-div">
                <h1>Resume</h1>
                <Image preview={
                    {
                    visible: isPreviewVisible,
                    onVisibleChange: (visible, prevVisible) => 
                        setPreviewVisible(visible)
                }} src="src/assets/placeholders/resume_placeholder.png" alt="" />
                <div className="resume-handling-div">
                    {/* Popup View */}
                    <button className='view-button' onClick={() => setPreviewVisible(!isPreviewVisible)}>View</button>
                    <button className='download-button'>Download</button>
                </div>
            </div>
        )
}

export default Resume