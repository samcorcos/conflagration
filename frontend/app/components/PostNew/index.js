import React from 'react'
import Dropzone from 'react-dropzone'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

const PostNew = React.createClass({
  // TODO remove all of this from local state
  getInitialState() {
    return {
      files: []
    }
  },
  onDrop(files) {
    this.setState({ files: files })
  },
  render() {
    return (
      <section className={ styles.postWrapper }>
        <div className={ styles.post }>
          <div className={ styles.row }>
            <div className={ styles.dropzoneWrapper }>
              {
                this.state.files.length > 0
                ?
                <Dropzone className={ styles.dropzone } multiple={false} onDrop={this.onDrop}>
                  {this.state.files.map((file) => <img className={ styles.previewImage } src={file.preview} key={ file.size } /> )}
                </Dropzone>
                :
                <Dropzone className={ styles.dropzone } multiple={false} onDrop={this.onDrop}>
                  <div className={ styles.dropzoneText }>Drop image or click<br />(optional)</div>
                </Dropzone>
              }
            </div>
            <div className={ styles.column }>
              <div className={ styles.row }>
                <div className={ styles.title }>
                  <label htmlFor="title">Title</label>
                  <input placeholder="Title of the post" id="title" />
                </div>
                <div className={ styles.link }>
                  <label htmlFor="url">Link</label>
                  <input id="url" placeholder="http://google.com" />
                </div>
              </div>
              <div className={ styles.row }>
                <div className={ styles.body }>
                  <label htmlFor="body">Body</label>
                  <textarea id="body" placeholder="(optional)" className={ styles.textarea }></textarea>
                </div>
              </div>
              <div className={ styles.row }>
                <input className={ styles.categories } placeholder="Up to 3 categories" />
              </div>
            </div>
          </div>
          <div className={ styles.buttonRow }>
            <button className={ styles.button }>Submit</button>
          </div>
        </div>
      </section>
    )
  }
})

export default CSSModules(PostNew, styles)
