import React from "react";
import { Input, DatePicker, Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { TextArea } = Input;
import locale from "antd/es/date-picker/locale/ru_RU";

const Edit = () => {
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    const onChangeTextArea = (e) => {
        console.log("Change:", e.target.value);
    };
    const propsUpload = {
        name: "file",
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        headers: {
            authorization: "authorization-text",
        },
        onChange(info) {
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <div className="container">
            <h1>Редактировать новость</h1>
            <form action="">
                <div className="editors__inputs">
                    <div className="item">
                        <Upload {...propsUpload}>
                            <Button icon={<UploadOutlined />}>
                                Click to Upload
                            </Button>
                        </Upload>
                        ,
                    </div>
                    <div className="item">
                        <Input placeholder="Заголовок" />
                    </div>
                    <div className="item">
                        <TextArea
                            showCount
                            maxLength={100}
                            onChange={onChangeTextArea}
                        />
                    </div>
                    <div className="item">
                        <DatePicker onChange={onChange} locale={locale} />
                    </div>
                    <div className="item">
                        <Input placeholder="Заголовок СЕО" />
                    </div>
                    <div className="item">
                        <button type="submit">Отправить</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Edit;