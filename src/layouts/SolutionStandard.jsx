import React, { useEffect, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'design-react-kit';
import content from '../../contents/come-funziona/soluzione-standard.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import contentHowItWorks from '../../contents/come-funziona/come-funziona.yml';
import { GlobalStateContext } from '../context/globalContext';
import { HeroSolutions } from '../components/hero/HeroSolutions';
import { TimelineVertical } from '../components/TimelineVertical';
import { ProjectsCards } from '../components/ProjectsCards';

const { title: seoTitle, description: seoDescription } = seo.standardSolutionPage;

const useStyles = createUseStyles({
  breadcrumb: {
    padding: '1.563rem 0 0',
    '& .breadcrumb': {
      padding: '0.75rem 0',
    },
  },
  breadcrumbItem: {
    '& a': {
      color: '#5B6F82',
      fontWeight: '600',
      textDecoration: 'underline',
      fontSize: '18px',
    },
    '&::before': {
      fontWeight: '600',
      color: '#33485C',
    },
  },
  breadcrumbItemActive: {
    '& a': {
      color: '#5B6F82',
      textDecoration: 'none',
      fontSize: '18px',
    },
    '&::before': {
      fontWeight: '600',
      color: '#33485C',
    },
  },
});

export const SolutionStandard = () => {
  const classes = useStyles();

  const { hero, verticalTimeline } = content;
  const { projectsCardsItem } = contentHowItWorks;
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch({
      type: 'SET:ACTIVE_HEADER',
      payload: { activeItem: 'iniziativa' },
    });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <h1 className="sr-only">{seoTitle}</h1>
      <div className="container px-3">
        <Row>
          <Col xs="12">
            <Breadcrumb className={classes.breadcrumb}>
              <BreadcrumbItem className={classes.breadcrumbItem}>
                <a href="/">Home</a>
                <span className="separator"></span>
              </BreadcrumbItem>
              <BreadcrumbItem className={classes.breadcrumbItem}>
                <a href="/iniziativa">L&apos;iniziativa</a>
                <span className="separator"></span>
              </BreadcrumbItem>
              <BreadcrumbItem active className={classes.breadcrumbItemActive}>
                <a href="/iniziativa/soluzioni-standard">Soluzioni standard</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
      <HeroSolutions
        title={hero.title}
        body={hero.body}
        image="standard-solution-big.svg"
        theme="bg-white"
        smallText="true"
      />
      <TimelineVertical item={verticalTimeline} />
      <ProjectsCards item={projectsCardsItem} />
    </>
  );
};
