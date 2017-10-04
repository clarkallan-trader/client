// @flow
import EditAvatar from './edit-avatar'
import {connect} from 'react-redux'
import {navigateUp} from '../actions/route-tree'
import {type TypedState} from '../constants/reducer'

const mapStateToProps = (state: TypedState) => {
  const username = state.config.username
  if (!username) {
    throw new Error('Not logged in')
  }

  const trackerState = username && state.tracker.trackers[username]
  const userProofs = trackerState && trackerState.type === 'tracker' && trackerState.proofs
  const hasAvatarProof = userProofs && userProofs.some(p => p.type === 'github' || p.type === 'twitter')
  return {
    keybaseUsername: username,
    hasAvatar: hasAvatarProof,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAck: () => dispatch(navigateUp()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAvatar)
