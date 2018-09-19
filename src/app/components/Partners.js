import React from 'react';
import Scroll from 'react-scroll';
import Block from './viewBlocks/Block';
import BlockHeader from './viewBlocks/BlockHeader';
import styles from './Partners.c.scss';
import PartnerSection from './Landing/PartnerSection';

const Partners = () => (
  <Scroll.Element name="partners">
    <Block className={styles.block}>
      <BlockHeader title="PARTNERS FROM 2018" className={styles.head} centered>
        <p>
          Want to see your logo here? Contact us at partnerships@hackjunction.com to get on board with the Junction
          community. Check out our partners from 2018:
        </p>
      </BlockHeader>
    </Block>
    <Block className={styles.block1}>
      <PartnerSection
        categories={[{ priority: 300, size_md: 4, size_xs: 6 }, { priority: 200, size_md: 3, size_xs: 4 }]}
        year="2018"
      />
    </Block>
  </Scroll.Element>
);

export default Partners;
