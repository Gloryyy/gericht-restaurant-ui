import React from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <p className="p__opensans">Mauris eget ultricies massa, nec commodo quam. Praesent ultrices nec odio non laoreet. Vestibulum sodales massa quis condimentum posuere. Praesent sodales velit risus, at tempor tellus elementum in. Donec porta velit eget iaculis vulputate. Pellentesque gravida placerat justo venenatis dignissim. In hac habitasse platea dictumst. Integer ullamcorper, nisl eu porttitor luctus, purus mi porta lorem, euismod convallis mauris lorem sed purus.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
