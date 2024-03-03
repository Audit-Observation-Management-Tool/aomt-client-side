import { TextField } from "@mui/material";
import FileUploader from "../../../components/fileUploader/FileUploader"; 
import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";

const UploadDocumentSection = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const toolbarOptions = {
      options: ["inline", "blockType", "link"],
      inline: {
        options: ["bold", "italic", "underline", "strikethrough"],
      },
      blockType: {
        options: ["Normal", "Blockquote", "Code", "Header"],
      },
    };
    return (
        <div className="w-[450px] rounded-3xs bg-white box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-8 pb-[40px] pr-[26px] pl-7 gap-[22px_0px] min-w-[492px] max-w-full text-center text-sm text-white font-roboto border-[1px] border-solid border-gray-300 mq1250:flex-1 mq750:pt-[21px] mq750:pb-5 mq750:box-border mq750:min-w-full">

            {/* Upload File Section */}
            <div className="cursor-pointer pt-[10px] px-0 pb-[15px] self-stretch rounded-8xs overflow-hidden flex flex-col items-center justify-start gap-[9px_0px] whitespace-nowrap border-[1px] border-solid border-silver">

                <div className="self-stretch h-[90px] relative text-sm font-roboto text-gray-400 text-center flex items-center justify-center shrink-0">
                    <FileUploader />
                </div>
            </div>

            {/* Write Change Message Section 
            <TextField
                className="bg-white h-[296px] w-auto [outline:none] self-stretch relative rounded-8xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-silver"
                variant="outlined"
                color="success"
                multiline
                rows={11}
                placeholder="Write your change message within 50 words..."
            /> */}

            <Editor
          
              defaultEditorState={editorState}
              onEditorStateChange={setEditorState}
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              toolbar={toolbarOptions}
             // wrapperClassName="max-h-96 overflow-y-auto"
            />


            <div className="self-stretch rounded-3xs bg-seagreen-200 overflow-hidden flex flex-row items-center justify-center py-5 pt-px px-0 pb-0 box-border whitespace-nowrap w-[400px]">
                <div className="h-11 flex-1 relative font-semibold flex items-center justify-center w-[450px]">
                    Upload Document
                </div>
            </div>
        </div>
    );
};

export default UploadDocumentSection;
