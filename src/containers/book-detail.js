import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.activeBook ? this.props.activeBook.title : 'Select Book to get Started'}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

export default connect (mapStateToProps)(BookDetail)
