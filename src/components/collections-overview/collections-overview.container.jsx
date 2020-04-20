import { compose } from 'redux';
import { connect } from 'react-redux';

import CollectionOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';
import { selectIsFetching } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
