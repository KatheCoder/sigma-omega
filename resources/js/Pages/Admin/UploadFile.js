import React, {useState,useEffect} from 'react';
import {useForm} from '@inertiajs/inertia-react'
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  message,
  Col,
} from 'antd';
function UploadFile(props) {
  const [isFileName, setIsFileName] = useState('')
  const [isFile, setIsFile] = useState('')
  const [isStatus, setIsStatus] = useState(false)

  const {data, setData, post, progress, processing} = useForm({
    records: '',
   })

  const { Option } = Select;

  const handleSubmit = (e) => {
    setIsStatus(false);

    post('/file-import',{
      forceFormData: true,
      onSuccess: data => {
        setIsStatus(true);
      }
     })

  }


  const handleInputChange = (e) => {
    setData('records', e.target.files[0])
  }


  useEffect(() => {

  }, [isStatus]);

  return (
    <>
      <Form
        name="fileUploading"
        onFinish={handleSubmit}
        requiredMark={true}

      >



        <div className="form-group mb-4" style={{maxWidth: '500px', margin: '0 auto'}}>


            <Form.Item
              name="uploadFile"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please select a file to upload',
                },
              ]}

            >


            <input type="file"
                   disabled={processing}
                   name="uploadFile"
                   style={{width: '160%'}}
                   id="uploadFile"
                   onChange={handleInputChange}
                   className="form-control"/>
            </Form.Item>
          <br/>
          {
            isFileName
            && <h4 className="mt-3">
              File: <span className="text-danger">{isFileName}</span>
            </h4>
          }
          {progress && (
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                   aria-valuenow={progress.percentage} aria-valuemin="0" aria-valuemax="100"
                   style={{width: progress.percentage + "%"}}></div>
            </div>

          )}
          <Button type="primary"   disabled={processing} htmlType="submit">
            Upload
          </Button>
        </div>

      </Form>


      {processing &&
      (<>
          <div className="alert alert-danger" role="alert">
            <h5>Warning...</h5>
            <ul>
              <li>Do not refresh page until upload is done</li>
              <li>Do not close page until upload is done</li>
            </ul>
          </div>
        </>
      )}
      {isStatus &&
      (<>
          <div className="alert alert-success" role="alert">
            <h5>Success...</h5>
             <p>Upload successfull... </p>
          </div>
        </>
      )}



    </>

  );
}

export default UploadFile;
