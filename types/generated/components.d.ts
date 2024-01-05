import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterRow1 extends Schema.Component {
  collectionName: 'components_footer_row1s';
  info: {
    displayName: 'Row1';
    description: '';
  };
  attributes: {
    Column1: Attribute.Email;
    column2: Attribute.BigInteger;
  };
}

export interface FooterRow2 extends Schema.Component {
  collectionName: 'components_footer_row2s';
  info: {
    displayName: 'Row2';
    description: '';
  };
  attributes: {
    Column1: Attribute.String;
    Column2: Attribute.String;
    Column3: Attribute.String;
    Column4: Attribute.String;
    Column5: Attribute.String;
  };
}

export interface FooterRow3 extends Schema.Component {
  collectionName: 'components_footer_row3s';
  info: {
    displayName: 'Row3';
  };
  attributes: {
    Column1: Attribute.String;
  };
}

export interface FooterRow4 extends Schema.Component {
  collectionName: 'components_footer_row4s';
  info: {
    displayName: 'Row4';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    url: Attribute.String;
  };
}

export interface SocialMediaAuthorSocialmedia extends Schema.Component {
  collectionName: 'components_social_media_author_socialmedias';
  info: {
    displayName: 'author_socialmedia';
  };
  attributes: {
    socialmedia_image: Attribute.Media;
    socailmedia_url: Attribute.String;
  };
}

export interface SocialMediaUrls extends Schema.Component {
  collectionName: 'components_social_media_urls';
  info: {
    displayName: 'urls';
  };
  attributes: {
    urls: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.row1': FooterRow1;
      'footer.row2': FooterRow2;
      'footer.row3': FooterRow3;
      'footer.row4': FooterRow4;
      'social-media.author-socialmedia': SocialMediaAuthorSocialmedia;
      'social-media.urls': SocialMediaUrls;
    }
  }
}
