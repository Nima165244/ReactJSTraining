import React, { Component } from 'react'
import  {PropTypes} from 'react';
import AboutPage from './AboutPage';


export class ProfilePage extends Component {
  render() {
    return (
      <AboutPage
      username="Nima"
      emailAddress="nima@gmail.com"
    />
    )
  }
}
ProfilePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    pageState: PropTypes.object.isRequired
  };
  
//   function mapStateToProps(state) {
//     return {
//       pageState: state
//     }
//   }
  
// export default connect(mapStateToProps)(ProfilePage);
export default ProfilePage;