/* eslint-disable prettier/prettier */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import { HeroTitle } from '../../components/hero/HeroTitle';
import { HeroBody } from '../../components/hero/HeroBody';
import { HeroCtaContainer } from '../../components/hero/HeroCtaContainer';
import { HeroGraphic } from '../../components/hero/HeroGraphic';
import { Hero } from '../../components/hero/Hero';
import content from '../../../contents/support-page/support.yml';

const {
  heroAssistance: { title, body, btnText },
} = content;

const useStyle = createUseStyles({
  heroAssistanceBg: {
    backgroundColor: '#ffffff',
  },
  heroTitle: {
    color: '#33485C',
    fontSize: '1.333rem',
    fontWeight: '700',
    '@media (min-width: 992px)': {
      fontSize: '1.778rem',
    },
  },
  heroBtn: {
    textTransform: 'uppercase',
    marginTop: '1.5rem',
    '@media (min-width: 992px)': {
      marginTop: '2.667rem',
    },
  },
});

export const Assistance = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <Hero className={classes.heroAssistanceBg}>
        <div className="row align-items-center px-lg-5 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-0 mt-3 mt-lg-0 pr-lg-5">
            <HeroTitle title={title} className={classes.heroTitle} />
            <HeroBody html={body} />
            <HeroCtaContainer>
              <Link to="/supporto/assistenza" className={`${classes.heroBtn} btn btn-primary`}>
                {btnText}
              </Link>
            </HeroCtaContainer>
          </div>
          <HeroGraphic className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={`/assets/supporto.svg`}
              alt=""
            />
          </HeroGraphic>
        </div>
      </Hero>
    </React.Fragment>
  );
};
