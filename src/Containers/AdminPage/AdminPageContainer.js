import {connect} from "react-redux";
import AdminPage from "./AdminPage";

function mapStateToProps(state) {

    return{
        productList: state.productList.productList
    }
}

function mapDispatchToProps(dispatch) {

    return {

    }
}

export default (connect(mapStateToProps, mapDispatchToProps) (AdminPage))