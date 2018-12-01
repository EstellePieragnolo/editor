import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

class PageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    onChange = (editorState) => {
        this.setState({ editorState })
    }

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
        if (newState) {
            this.onChange(newState);
            return 'handled'
        } else {
            return 'notHandled'
        }

    }

    onItalic = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
    }
    onBold = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
    }
    onUnderline = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
    }

    render() {
        return (
            <div>
                <button onClick={this.onItalic}>
                    <p>I</p>
                </button>
                <button onClick={this.onBold}>
                    <p>B</p>
                </button>
                <button onClick={this.onUnderline}>
                    <p>U</p>
                </button>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    handleKeyCommand={this.handleKeyCommand}
                />
            </div>
        )
    }
}

export default PageContainer