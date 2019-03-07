import { connect } from 'react-redux';
import { logoutUser } from './actions/loginActions'
import { Navbar } from '../components/Navbar';

// const mapStateToProps = state => ({
//     isLoggedIn: state.login.isLoggedIn
// })
  
// const mapDispatchToProps = (dispatch) => {
//     return {
//         logoutUser: () => dispatch(logoutUser()),
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Navbar)