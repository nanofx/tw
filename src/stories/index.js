import React from 'react'

import { storiesOf, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { backgrounds } from './backgrounds'
import './story.css'

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from '../index'

addParameters({
  backgrounds
})

storiesOf('Twitter Timeline Embed', module)
  .add(
    'Timeline url (with profile url)',
    withInfo({
      text: 'Timeline url example with given profile url'
    })(() => (
      <div className='centerContent'>
        <div 
      className='selfCenter'>
		style={{ width: 350, height: 300, margin: 20 }}
          <TwitterTimelineEmbed
            sourceType={'url'}
            url={'https://twitter.com/delfilietuva'}
            autoHeight
          />
        </div>
		<div 
		className='selfCenter'>
		style={{ width: 350, height: 300, margin: 20 }}
          <TwitterTimelineEmbed
            sourceType={'url'}
            url={'https://twitter.com/DelfiLV'}
            autoHeight
          />
        </div>
				<div 
		className='selfCenter'>
		style={{ width: 350, height: 300, margin: 20 }}
          <TwitterTimelineEmbed
            sourceType={'url'}
            url={'https://twitter.com/15minlt'}
            autoHeight
          />
        </div>
				<div 
		className='selfCenter'>
		style={{ width: 350, height: 300, margin: 20 }}
          <TwitterTimelineEmbed
            sourceType={'url'}
            url={'https://twitter.com/GitanasNauseda'}
            autoHeight
          />
        </div>
				<div 
		className='selfCenter'>
		style={{ width: 350, height: 300, margin: 20 }}
          <TwitterTimelineEmbed
            sourceType={'url'}
            url={'https://twitter.com/Grybauskaite_LT'}
            autoHeight
          />
        </div>
				<div 
		className='selfCenter'>
		style={{ width: 350, height: 300, margin: 20 }}
          <TwitterTimelineEmbed
            sourceType={'url'}
            url={'https://twitter.com/Skvernelis_S'}
            autoHeight
          />
        </div>
      </div>
    ))
  )
