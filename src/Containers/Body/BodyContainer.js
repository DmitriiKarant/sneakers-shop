import {connect} from "react-redux";
import Body from "./Body";

function mapStateToProps(state) {
    return{
        productList: state.productList.productList
    }
}

function mapDispatchToProps(dispatch) {

    return {
    }
}

export default (connect(mapStateToProps, mapDispatchToProps) (Body))