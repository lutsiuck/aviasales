import {connect} from "react-redux";
import Home from "./Home";

let mapStateToProps = (state) => {
    return {

    }
};

let mapDispatchToProps = {

};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer