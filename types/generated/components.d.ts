import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']>;
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    isLink: Attribute.Boolean & Attribute.DefaultTo<true>;
    image: Attribute.Media;
  };
}

export interface ComponentsCtaImage extends Schema.Component {
  collectionName: 'components_components_cta_images';
  info: {
    displayName: 'Cta Image';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    headingPrefix: Attribute.String;
    headingSuffix: Attribute.String;
    subHeading: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface ComponentsImage extends Schema.Component {
  collectionName: 'components_components_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    heading: Attribute.String;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsSlider extends Schema.Component {
  collectionName: 'components_components_sliders';
  info: {
    displayName: 'Slider';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    headingPrefix: Attribute.String;
    headingSuffix: Attribute.String;
    subHeading: Attribute.Text;
    description: Attribute.Text;
    image: Attribute.Media;
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    backgroundImage: Attribute.Media;
    headingImage: Attribute.Media;
  };
}

export interface HomeCarSlider extends Schema.Component {
  collectionName: 'components_home_car_sliders';
  info: {
    displayName: 'Car Slider';
  };
  attributes: {
    sectionName: Attribute.String;
    slider: Attribute.Component<'components.slider', true>;
  };
}

export interface HomeHeroContent extends Schema.Component {
  collectionName: 'components_home_hero_contents';
  info: {
    displayName: 'Hero Content';
  };
  attributes: {
    sectionName: Attribute.String;
    headingPrefix: Attribute.String;
    heading: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    video: Attribute.Media;
    ctaButton: Attribute.Component<'components.button'>;
    ctaImage: Attribute.Media;
  };
}

export interface HomeTrugoContent extends Schema.Component {
  collectionName: 'components_home_trugo_contents';
  info: {
    displayName: 'Trugo Content';
  };
  attributes: {
    sectionName: Attribute.String;
    headingImage: Attribute.Media;
    heading: Attribute.String;
    subHeading: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'components.button'>;
    image: Attribute.Media;
  };
}

export interface HomeTrumoreContent extends Schema.Component {
  collectionName: 'components_home_trumore_contents';
  info: {
    displayName: 'Trumore Content';
    description: '';
  };
  attributes: {
    sectionName: Attribute.String;
    headingImage: Attribute.Media;
    heading: Attribute.String;
    subHeading: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'components.button'>;
    image: Attribute.Media;
  };
}

export interface LayoutFeaturesSection extends Schema.Component {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'components.feature', true>;
    headingSuffix: Attribute.String;
    headingPrefix: Attribute.String;
    heading: Attribute.String;
    images: Attribute.Media;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'>;
    text: Attribute.String;
    socialLink: Attribute.Component<'components.link', true>;
    link: Attribute.Component<'components.link'>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'>;
    ctaButton: Attribute.Component<'components.link'>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    sectionTemplate: Attribute.Enumeration<['NONE']>;
    image: Attribute.Media;
    heading: Attribute.String;
    subHeading: Attribute.String;
    description: Attribute.Text;
    link: Attribute.Component<'components.link'>;
  };
}

export interface LayoutSliderSection extends Schema.Component {
  collectionName: 'components_layout_slider_sections';
  info: {
    displayName: 'Slider Section';
    description: '';
  };
  attributes: {
    sectionTemplate: Attribute.Enumeration<['NONE']>;
    title: Attribute.String;
    description: Attribute.Text;
    slider: Attribute.Component<'components.slider', true>;
    button: Attribute.Component<'components.button', true>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface T10XCar360Content extends Schema.Component {
  collectionName: 'components_t10x_car_360_contents';
  info: {
    displayName: 'Car 360 content';
    description: '';
  };
  attributes: {
    sectionName: Attribute.String;
    image: Attribute.Media;
    heading: Attribute.String;
    subHeading: Attribute.String;
    description: Attribute.Text;
    ctaImage: Attribute.Media;
  };
}

export interface T10XCarColorsSlider extends Schema.Component {
  collectionName: 'components_t10x_car_colors_sliders';
  info: {
    displayName: 'Car colors slider';
  };
  attributes: {
    sectionName: Attribute.String;
    slider: Attribute.Component<'components.slider', true>;
    colors: Attribute.Component<'components.image', true>;
  };
}

export interface T10XCarComfortSlider extends Schema.Component {
  collectionName: 'components_t10x_car_comfort_sliders';
  info: {
    displayName: 'Car comfort slider';
  };
  attributes: {
    sectionName: Attribute.String;
    heading: Attribute.String;
    description: Attribute.Text;
    slider: Attribute.Component<'components.slider', true>;
  };
}

export interface T10XCarDesignContent extends Schema.Component {
  collectionName: 'components_t10x_car_design_contents';
  info: {
    displayName: 'Car design content';
  };
  attributes: {
    sectionName: Attribute.String;
    image: Attribute.Media;
    headingPrefix: Attribute.String;
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface T10XCarInspirationContent extends Schema.Component {
  collectionName: 'components_t10x_car_inspiration_contents';
  info: {
    displayName: 'Car inspiration content';
    description: '';
  };
  attributes: {
    sectionName: Attribute.String;
    headingPrefix: Attribute.String;
    heading: Attribute.String;
    description: Attribute.Text;
    imageSlot1: Attribute.Media;
    imageSlot2: Attribute.Media;
    imageSlot3: Attribute.Media;
    imageSlot4: Attribute.Media;
  };
}

export interface T10XCarInteriorSlider extends Schema.Component {
  collectionName: 'components_t10x_car_interior_sliders';
  info: {
    displayName: 'Car interior slider';
  };
  attributes: {
    sectionName: Attribute.String;
    slider: Attribute.Component<'components.slider', true>;
  };
}

export interface T10XCarSafetyContent extends Schema.Component {
  collectionName: 'components_t10x_car_safety_contents';
  info: {
    displayName: 'Car safety content';
    description: '';
  };
  attributes: {
    sectionName: Attribute.String;
    image: Attribute.Media;
    heading: Attribute.String;
    description: Attribute.Text;
    features: Attribute.Component<'components.feature', true>;
  };
}

export interface T10XCarSlider extends Schema.Component {
  collectionName: 'components_t10x_car_sliders';
  info: {
    displayName: 'Car slider';
  };
  attributes: {
    sectionName: Attribute.String;
    slider: Attribute.Component<'components.slider', true>;
    buttons: Attribute.Component<'components.button', true>;
  };
}

export interface T10XCarSoundSystemContent extends Schema.Component {
  collectionName: 'components_t10x_car_sound_system_contents';
  info: {
    displayName: 'Car sound system content';
  };
  attributes: {
    sectionName: Attribute.String;
    headingImage: Attribute.Media;
    heading: Attribute.String;
    description: Attribute.Text;
    imageSlot1: Attribute.Media;
    imageSlot2: Attribute.Media;
    imageSlot3: Attribute.Media;
    image: Attribute.Media;
  };
}

export interface T10XCarTrugoContent extends Schema.Component {
  collectionName: 'components_t10x_car_trugo_contents';
  info: {
    displayName: 'Car trugo content';
  };
  attributes: {
    sectionName: Attribute.String;
    image: Attribute.Media;
    heading: Attribute.String;
    subHeading: Attribute.String;
    description: Attribute.Text;
    buttons: Attribute.Component<'components.button', true>;
  };
}

export interface TrugoHeroContent extends Schema.Component {
  collectionName: 'components_trugo_hero_contents';
  info: {
    displayName: 'Hero Content';
  };
  attributes: {
    sectionName: Attribute.String;
    headingImage: Attribute.Media;
    heading: Attribute.String;
    subHeading: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface TrumoreHeroContent extends Schema.Component {
  collectionName: 'components_trumore_hero_contents';
  info: {
    displayName: 'Hero Content';
    description: '';
  };
  attributes: {
    sectionName: Attribute.String;
    headingImage: Attribute.Media;
    heading: Attribute.String;
    subHeading: Attribute.String;
    buttons: Attribute.Component<'components.button', true>;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface TrumoreMeetTheTrumoreContent extends Schema.Component {
  collectionName: 'components_trumore_meet_the_trumore_contents';
  info: {
    displayName: 'Meet The Trumore Content';
  };
  attributes: {
    sectionName: Attribute.String;
    header: Attribute.String;
    headerSuffix: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface TrumoreMeetTheTrumoreSlider extends Schema.Component {
  collectionName: 'components_trumore_meet_the_trumore_sliders';
  info: {
    displayName: 'Meet The Trumore Slider';
  };
  attributes: {
    sectionName: Attribute.String;
    slider: Attribute.Component<'components.slider', true>;
  };
}

export interface TrumorePurposeContent extends Schema.Component {
  collectionName: 'components_trumore_purpose_contents';
  info: {
    displayName: 'Purpose Content';
  };
  attributes: {
    sectionName: Attribute.String;
    headingPrefix: Attribute.String;
    heading: Attribute.String;
    description: Attribute.Text;
    features: Attribute.Component<'components.feature', true>;
  };
}

export interface TrumoreRedefiningMobilitySlider extends Schema.Component {
  collectionName: 'components_trumore_redefining_mobility_sliders';
  info: {
    displayName: 'Redefining Mobility Slider';
  };
  attributes: {
    sectionName: Attribute.String;
    header: Attribute.String;
    slider: Attribute.Component<'components.slider', true>;
  };
}

export interface TrumoreSmartMobilityDeviceAndTrumoreContent
  extends Schema.Component {
  collectionName: 'components_trumore_smart_mobility_device_and_trumore_contents';
  info: {
    displayName: 'Smart Mobility Device & Trumore Content';
    description: '';
  };
  attributes: {
    sectionName: Attribute.String;
    headingPrefix: Attribute.String;
    heading: Attribute.String;
    subHeading: Attribute.String;
    features: Attribute.Component<'components.feature', true>;
    image: Attribute.Media;
  };
}

export interface TrumoreTrumoreMobileAppContent extends Schema.Component {
  collectionName: 'components_trumore_trumore_mobile_app_contents';
  info: {
    displayName: 'Trumore Mobile App Content';
  };
  attributes: {
    sectionName: Attribute.String;
    heading: Attribute.String;
    subHeading: Attribute.String;
    image: Attribute.Media;
    backgroundImage: Attribute.Media;
    buttons: Attribute.Component<'components.button', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.button': ComponentsButton;
      'components.cta-image': ComponentsCtaImage;
      'components.feature': ComponentsFeature;
      'components.image': ComponentsImage;
      'components.link': ComponentsLink;
      'components.slider': ComponentsSlider;
      'home.car-slider': HomeCarSlider;
      'home.hero-content': HomeHeroContent;
      'home.trugo-content': HomeTrugoContent;
      'home.trumore-content': HomeTrumoreContent;
      'layout.features-section': LayoutFeaturesSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.slider-section': LayoutSliderSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      't10x.car-360-content': T10XCar360Content;
      't10x.car-colors-slider': T10XCarColorsSlider;
      't10x.car-comfort-slider': T10XCarComfortSlider;
      't10x.car-design-content': T10XCarDesignContent;
      't10x.car-inspiration-content': T10XCarInspirationContent;
      't10x.car-interior-slider': T10XCarInteriorSlider;
      't10x.car-safety-content': T10XCarSafetyContent;
      't10x.car-slider': T10XCarSlider;
      't10x.car-sound-system-content': T10XCarSoundSystemContent;
      't10x.car-trugo-content': T10XCarTrugoContent;
      'trugo.hero-content': TrugoHeroContent;
      'trumore.hero-content': TrumoreHeroContent;
      'trumore.meet-the-trumore-content': TrumoreMeetTheTrumoreContent;
      'trumore.meet-the-trumore-slider': TrumoreMeetTheTrumoreSlider;
      'trumore.purpose-content': TrumorePurposeContent;
      'trumore.redefining-mobility-slider': TrumoreRedefiningMobilitySlider;
      'trumore.smart-mobility-device-and-trumore-content': TrumoreSmartMobilityDeviceAndTrumoreContent;
      'trumore.trumore-mobile-app-content': TrumoreTrumoreMobileAppContent;
    }
  }
}
