import { connect } from 'react-redux';
import CatalogProducts from './CatalogProducts';

function mapStateToProps(state) {
	return {
		productList: state.productList.productList
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogProducts);
