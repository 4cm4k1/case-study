import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default class ItemData {
  async get() {
    const data = await fetch(`${publicRuntimeConfig.hostname}/data.json`)
      .then(response => response.json())
      .then(data => data.CatalogEntryView[0]);
    console.log(data);
    const item = {
      title: data.title,
      images: [
        data.Images[0].PrimaryImage[0].image,
        ...data.Images[0].AlternateImages.map(index => index.image),
      ],
      price: data.Offers[0].OfferPrice[0].formattedPriceValue,
      promos: [
        ...data.Promotions.map(index => {
          return {
            promoId: index.promotionIdentifier,
            description: index.Description[0].shortDescription,
          };
        }),
      ],
      availability: {
        inStore: data.purchasingChannelCode === 0 || 2 ? true : false,
        online: data.purchasingChannelCode === 0 || 1 ? true : false,
      },
      disclosure: {
        title: 'Returns',
        description: data.ReturnPolicy[0].legalCopy.replace(
          /(<([^>]+)>)|(&nbsp;)/gi,
          ' ',
        ),
      },
    };
    return item;
  }
}
