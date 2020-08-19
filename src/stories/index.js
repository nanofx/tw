import React from 'react'

import { storiesOf, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
//import { action } from '@storybook/addon-actions'
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
    'Timeline custom link color',
    withInfo({
      text: 'Timeline custom link color example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            userId={1429897651}
            linkColor={'#F44336'}
            theme={'light'}
            options={{ height:400}}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            userId={61612893}
            linkColor={'#CDDC39'}
            theme={'light'}
            options={{ height: 400}}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            userId={1429897651}
            linkColor={'#4CAF50'}
            theme={'light'}
            options={{ height: 400}}
          />
        </div>
		        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            userId={61612893}
            linkColor={'#4CAF50'}
            theme={'light'}
            options={{ height: 400}}
          />
        </div>
		        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            userId={1429897651}
            linkColor={'#4CAF50'}
            theme={'light'}
            options={{ height: 400}}
          />
        </div>
     </div>
    ))
  )
