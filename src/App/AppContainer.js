import {connect} from "react-redux";
import App from "./App";
import {getProductList} from "../Actions/ProductList";

function mapStateToProps(state) {
    return{
        productList: state.productList.productList
    }
}

function mapDispatchToProps(dispatch) {

    return {
        actionLoadProductList: () => dispatch(getProductList())
    }
}

export default (connect(mapStateToProps, mapDispatchToProps) (App))