// Typescript Version

import React, { useRef, useEffect } from "react";
import SunEditor, { buttonList } from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";
import './suneditor.min.css'; // Import Sun Editor's CSS File
import { generateMarkdown } from '../editor/converter';
import plugins from 'suneditor/src/plugins';

const showroomStyles = {
    width: "100%",
    height: '400px',
  };

const Editor = props => {
    const editor = useRef<SunEditorCore | null>(null); //not initialized yet
    const markDownShowRoom = useRef<HTMLTextAreaElement | null>(null);

    // The sunEditor parameter will be set to the core suneditor instance when this function is called
    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editor.current = sunEditor;
    };

    async function runConverter() {
        markDownShowRoom.current.value = null;
        const noHeaders: boolean = true;
        let text: string = editor.current.getContents(noHeaders);
        text = await generateMarkdown(text);
        console.log(text);
        markDownShowRoom.current.value = text;
    }

    return (
        <div>
            <p> My Other Contents </p>
            <SunEditor getSunEditorInstance={getSunEditorInstance} height="400" setOptions={
                {
                    plugins: plugins,
                    buttonList: [
                        ['undo', 'redo'],
                        ['font', 'fontSize', 'formatBlock'],
                        ['paragraphStyle', 'blockquote'],
                        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                        ['fontColor', 'hiliteColor', 'textStyle'],
                        ['removeFormat'],
                        '/', // Line break
                        ['outdent', 'indent'],
                        ['align', 'horizontalRule', 'list', 'lineHeight'],
                        ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                        /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                        ['fullScreen', 'showBlocks', 'codeView'],
                        ['preview', 'print'],
                        ['save', 'template'],
                        /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
                    ]
                }
            }
            />
            <button onClick={runConverter}>Convert to markdown</button>
            <br></br>
            <textarea ref={markDownShowRoom} style={showroomStyles}></textarea>
        </div>
    );
};
export default Editor;