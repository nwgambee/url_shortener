import React, { Component } from 'react';
import './UrlContainer.css';
import { connect } from 'react-redux';
import { setUrls, updateUrls } from '../../actions/index'
import { getUrls, deleteUrl } from '../../apiCalls'

export class UrlContainer extends Component {
  constructor() {
    super();
 }

 componentDidMount() {
  getUrls()
    .then(data => data.urls.forEach(url => {
      this.props.setUrls(url)
      }
    ))
  .catch(err => console.error('Error fetching:', err));
}

deleteUrl = id => {
  deleteUrl(id)
    .then(() => this.props.updateUrls(id))
    .catch(err => console.error('Error deleting:', err));
}
 
 render() {
  let urlEls = []
  if (this.props.urls) {
   urlEls = this.props.urls.map(url => {
    return (
      <div className="url" key={url.id}>
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
        <button className='delete-btn' onClick={() => this.deleteUrl(url.id)} >Delete Url</button>
      </div>
    )
  });
 }
  return ( 
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
    )
  }
}

export const mapStateToProps = ({ urls }) => ({
  urls
});

export const mapDispatchToProps = dispatch => ({
  setUrls: (url) => dispatch(setUrls(url)),
  updateUrls: (id) => dispatch(updateUrls(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UrlContainer)
