import React from "react"
import PropTypes from "prop-types"
import { Link } from "./Link"

export class Options extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Link src="/favorite"/>
        <Link src="/favorite"/>
        <Link src="/favorite"/>
        <Link src="/favorite"/>
      </React.Fragment>
    );
  }
}

Options.propTypes = {
  wishlist: PropTypes.bool,
  trailer: PropTypes.string,
  score: PropTypes.node
};
export default Options
