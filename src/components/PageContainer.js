import React from 'react';
import { EditorState, KeyBindingUtil, RichUtils } from 'draft-js';
import Editor from "draft-js-plugins-editor"
import createHighlightPlugin from './plugins/highlightPlugin'

const highlightPlugin = createHighlightPlugin();

class PageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty()
        }
        this.plugins = [
            highlightPlugin
        ]
    }


    onChange = (editorState) => {
        this.setState({ editorState })
    }

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
        if (newState) {
            this.onChange(newState);
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
    onHighlight = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'HIGHLIGHT'))
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
                <button onClick={this.onHighlight}>
                    <p>H</p>
                </button>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={this.plugins}
                />
            </div>
        )
    }
}

export default PageContainer