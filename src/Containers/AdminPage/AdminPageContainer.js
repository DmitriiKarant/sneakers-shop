import { connect } from 'react-redux';
import AdminPage from './AdminPage';
import { removeProduct, addProduct } from '../../Actions/ProductList';

function mapStateToProps(state) {
	return {
		productList: state.productList.productList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actionRemoveProduct: id => dispatch(removeProduct(id)),
		actionAddProduct: newProduct => dispatch(addProduct(newProduct))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
