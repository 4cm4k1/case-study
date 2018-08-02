import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { nonce } = ctx.res.locals;
    return { ...initialProps, nonce };
  }

  render() {
    const { nonce } = this.props;
    return (
      <html lang="en-US">
        <Head nonce={nonce}>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://target.scene7.com" />
          <title>myRetail</title>
          <meta
            name="description"
            content="myRetail is a leading online retailer."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link rel="canonical" href="https://case-study.anthony.codes" />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </html>
    );
  }
}
