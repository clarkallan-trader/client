// @flow
import React, {Component} from 'react'
import {Box, Button, Icon, Input, PopupDialog, Text} from '../../../common-adapters/index'
import {globalColors, globalMargins, globalStyles} from '../../../styles'

import type {Props} from './'

class RenderBlockConversationWarning extends Component<void, Props, State> {

  _onBlock = () => {
    const {conversationIDKey} = this.props
    this.props.onBlock(conversationIDKey)
    this.props.onClose()
  }

  render () {
    return (
      <PopupDialog onClose={this.props.onClose}>
        <Box style={{...globalStyles.flexBoxColumn, alignItems: 'center', flex: 1, justifyContent: 'center', marginBottom: 80, marginLeft: 80, marginRight: 80, marginTop: 90}}>
          <Text type='Header'>Block the conversation with {this.props.participants}?</Text>
          <Text type='Body' style={{marginTop: globalMargins.large}}>You won't see this conversation anymore.</Text>
          <Text type='Body' style={{marginTop: globalMargins.small}}>  To unblock it, run <Text type='Terminal'>keybase chat hide -u {this.props.participants}</Text> in the terminal.</Text>
          <Box style={{...globalStyles.flexBoxRow, marginTop: globalMargins.large}}>
            <Button type='Secondary' onClick={this.props.onClose} label="No, don't block them" />
            <Button type='Danger' style={{marginLeft: globalMargins.tiny}} onClick={this._onBlock} label='Yes, block them' />
          </Box>
        </Box>
      </PopupDialog>
    )
  }
}

export default RenderBlockConversationWarning