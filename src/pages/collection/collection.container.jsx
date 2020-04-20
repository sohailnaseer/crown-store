import { compose } from 'redux';
import { connect } from 'react-redux';

import CollectionPage from './collection.component';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from './../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

export default compose(connect(mapStateToProps), WithSpinner)(CollectionPage);
