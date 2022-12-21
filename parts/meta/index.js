import Head from "next/head";

const defaults = {
  title: ``,
  description: ``,
  image: ``,
  url: ``,
};

const Meta = (props) => (
  <Head>
    <title>{props.title || defaults.title}</title>

    <meta
      name="description"
      content={props.description || defaults.description}
    />

    {/*<!-- Google / Search Engine Tags -->*/}
    <meta itemProp="name" content={props.title || defaults.title} />
    <meta
      itemProp="description"
      content={props.description || defaults.description}
    />
    <meta itemProp="image" content={props.image || defaults.image} />

    {/*<!-- Facebook Meta Tags -->*/}
    <meta property="og:title" content={props.title || defaults.title} />
    <meta
      property="og:description"
      content={props.description || defaults.description}
    />
    <meta property="og:image" content={props.image || defaults.image} />
    <meta property="og:url" content={props.title || defaults.title} />
    <meta property="og:type" content="website" />

    {/*<!-- Twitter Meta Tags -->*/}
    <meta name="twitter:title" content={props.title || defaults.title} />
    <meta
      name="twitter:description"
      content={props.description || defaults.description}
    />
    <meta name="twitter:image" content={props.image || defaults.image} />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

export default Meta;
