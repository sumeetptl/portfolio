import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'oov9c8er',
  dataset: 'production',
  apiVersion: '2023-12-05',
  useCdn: true,
  token: 'skE5x0UqyRCVWNltKR3dz2TfB60sFG8Ke9SsfhEEVRBo4be1TTziVVacILX7bEaYJn4Y13sKh0zwjDZEDc6e8lz4aBTENSAWDQpE328d9tt9qypcFdDRptmcgvF1CTS5OzSciesqx32DrVTVPdziAYyVXgoYI7k7xUbmETyFxp4MsBaOKo4F',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);