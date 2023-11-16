import { connect } from 'react-redux';
import Header from './Header';

function mapStateToProps(state) {
	return {
		productList: state.productList.productList
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
