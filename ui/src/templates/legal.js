import React from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import styles from './post.module.css';


export default ({ data }) => {

    const { title, image } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <Hero image={image} title={title} color="darkBlue"/>
            <div className={styles.post}>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
            </div>
        </Layout>
    );

};

export const legalQuery = graphql`
  query ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        image
      }
      html
    }
   }
`;
