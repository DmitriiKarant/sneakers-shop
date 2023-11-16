import { connect } from 'react-redux';
import CatalogFilter from './CatalogFilter';

function mapStateToProps(state) {
	return {
		productList: state.productList.productList
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogFilter);
