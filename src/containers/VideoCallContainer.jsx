import { hideVideoCalling } from '../redux/actions'
import { connect } from 'react-redux'
import VideoCall from '../components/VideoCall'

const mapDispatchToProps = (dispatch) => ({
  hideVideoCalling: () => dispatch(hideVideoCalling()),
})

export default connect(null, mapDispatchToProps)(VideoCall)
