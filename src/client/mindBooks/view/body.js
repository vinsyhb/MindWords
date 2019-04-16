import React from "react";
import Reviews from "./reviews";
import Mentions from "./mentions";
import ImportsWords from "./importantWords";

class ViewBody extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <div>
        {/* Reviews */}
        <div className="margin10">
          <Reviews {...this.props} />
        </div>
        {/* Mentions */}
        <div className="margin10">
          <Mentions {...this.props} />
        </div>
        {/* Important words */}
        <div className="margin10">
          <ImportsWords {...this.props} />
        </div>
      </div>
    );
  }
}
export default ViewBody;
