import { connect } from 'react-redux';
import AdminPage from './AdminPage';
import { removeProduct } from '../../Actions/ProductList';

function mapStateToProps(state) {
	return {
		productList: state.productList.productList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actionRemoveProduct: id => dispatch(removeProduct(id))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
